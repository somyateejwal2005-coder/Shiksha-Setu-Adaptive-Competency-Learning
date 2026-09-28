const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'skillpath.sqlite');
const PORT = Number(process.env.PORT || 3000);
const MAX_BODY = 200_000;

fs.mkdirSync(DATA_DIR, { recursive: true });
const db = new DatabaseSync(DB_PATH);
db.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS learners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    subject TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    learner_id INTEGER NOT NULL REFERENCES learners(id),
    phase TEXT NOT NULL,
    subject TEXT NOT NULL,
    score INTEGER NOT NULL,
    topic_scores TEXT NOT NULL,
    answers TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

// Demo framework kept in sync with the learner-facing Java/Python/DBMS/DS topics.
const competencyFramework = {
  Python: [
    { topic: 'Python Basics', competency: 'Core Python Fundamentals', required: 80, prerequisite: 'Programming fundamentals' },
    { topic: 'Functions', competency: 'Function Design', required: 80, prerequisite: 'Python Basics' },
    { topic: 'OOP', competency: 'Object-Oriented Programming', required: 80, prerequisite: 'Python Basics' },
    { topic: 'Exception Handling', competency: 'Error Handling', required: 80, prerequisite: 'Functions' },
    { topic: 'File Handling', competency: 'File Processing', required: 80, prerequisite: 'Python Basics' }
  ],
  Java: [
    { topic: 'Java Basics', competency: 'Java Fundamentals', required: 80, prerequisite: 'Programming fundamentals' },
    { topic: 'Classes and Objects', competency: 'Object-Oriented Programming', required: 80, prerequisite: 'Java Basics' },
    { topic: 'Inheritance', competency: 'Inheritance Concepts', required: 80, prerequisite: 'Classes and Objects' },
    { topic: 'Exception Handling', competency: 'Error Handling', required: 80, prerequisite: 'Java Basics' },
    { topic: 'Collections', competency: 'Collection Framework', required: 80, prerequisite: 'Java Basics' }
  ],
  'Data Structures': [
    { topic: 'Arrays', competency: 'Linear Data Representation', required: 80, prerequisite: 'Programming fundamentals' },
    { topic: 'Linked List', competency: 'Dynamic Linear Structures', required: 80, prerequisite: 'Arrays' },
    { topic: 'Stack', competency: 'LIFO Data Management', required: 80, prerequisite: 'Arrays' },
    { topic: 'Queue', competency: 'FIFO Data Management', required: 80, prerequisite: 'Arrays' },
    { topic: 'Trees', competency: 'Hierarchical Data Structures', required: 80, prerequisite: 'Linked List' }
  ],
  DBMS: [
    { topic: 'SQL', competency: 'Database Querying', required: 80, prerequisite: 'Database fundamentals' },
    { topic: 'Normalization', competency: 'Database Design', required: 80, prerequisite: 'SQL' },
    { topic: 'Transactions', competency: 'Transaction Management', required: 80, prerequisite: 'SQL' },
    { topic: 'Indexing', competency: 'Query Performance', required: 80, prerequisite: 'SQL' },
    { topic: 'Keys', competency: 'Relational Integrity', required: 80, prerequisite: 'Database fundamentals' }
  ]
};

function makeQuestion(topic, q, options, answer, explanation) {
  return { topic, q, options, answer, explanation };
}

const questionBank = {
  Python: [
    makeQuestion('Python Basics', 'Which keyword is used to define a function in Python?', ['function', 'def', 'fun', 'define'], 1, 'Python uses the def keyword to define a function.'),
    makeQuestion('Functions', 'Which statement returns a value from a Python function?', ['send', 'return', 'output', 'give'], 1, 'The return statement sends a value back from a function.'),
    makeQuestion('OOP', 'Which concept allows a class to acquire properties of another class?', ['Inheritance', 'Compilation', 'Iteration', 'Indexing'], 0, 'Inheritance allows one class to acquire properties and methods of another class.'),
    makeQuestion('Exception Handling', 'Which block is commonly used to handle an exception in Python?', ['try-except', 'if-else', 'for-while', 'switch-case'], 0, 'Python uses try and except blocks for exception handling.'),
    makeQuestion('File Handling', 'Which function is commonly used to open a file in Python?', ['file()', 'open()', 'read()', 'load()'], 1, 'The open() function is used to open a file.')
  ],
  Java: [
    makeQuestion('Java Basics', 'Which keyword is used to create a class in Java?', ['class', 'struct', 'define', 'object'], 0, 'The class keyword defines a class in Java.'),
    makeQuestion('Classes and Objects', 'An object is an instance of what?', ['Method', 'Class', 'Package', 'Interface only'], 1, 'An object is an instance of a class.'),
    makeQuestion('Inheritance', 'Which keyword is used for class inheritance in Java?', ['inherits', 'extends', 'include', 'using'], 1, 'The extends keyword is used for class inheritance.'),
    makeQuestion('Exception Handling', 'Which keyword is used to catch an exception?', ['catch', 'error', 'handle', 'except'], 0, 'Java uses catch to handle exceptions.'),
    makeQuestion('Collections', 'Which interface represents an ordered collection that can contain duplicates?', ['Set', 'List', 'Map', 'QueueOnly'], 1, 'List represents an ordered collection and can contain duplicates.')
  ],
  'Data Structures': [
    makeQuestion('Arrays', 'Which data structure stores elements in contiguous memory locations?', ['Array', 'Tree', 'Graph', 'Stack only'], 0, 'Arrays store elements in contiguous memory locations.'),
    makeQuestion('Linked List', 'A linked list node generally contains data and what?', ['Pointer/reference', 'SQL query', 'Compiler', 'Class only'], 0, 'A linked list node stores data and a reference to another node.'),
    makeQuestion('Stack', 'Which principle does a stack follow?', ['FIFO', 'LIFO', 'Random', 'Priority only'], 1, 'Stack follows Last In, First Out.'),
    makeQuestion('Queue', 'Which principle does a queue follow?', ['LIFO', 'FIFO', 'Random', 'Binary'], 1, 'Queue follows First In, First Out.'),
    makeQuestion('Trees', 'A tree is mainly a type of which structure?', ['Linear', 'Hierarchical', 'Sequential only', 'Tabular'], 1, 'A tree represents hierarchical relationships.')
  ],
  DBMS: [
    makeQuestion('SQL', 'Which SQL command is used to retrieve data?', ['SELECT', 'DELETE', 'DROP', 'UPDATE'], 0, 'SELECT retrieves records from a database.'),
    makeQuestion('Normalization', 'What is a major purpose of normalization?', ['Increase redundancy', 'Reduce redundancy', 'Delete all data', 'Increase duplicate records'], 1, 'Normalization reduces data redundancy and improves database design.'),
    makeQuestion('Transactions', 'Which property ensures a transaction is treated as an all-or-nothing operation?', ['Atomicity', 'Indexing', 'Redundancy', 'Sorting'], 0, 'Atomicity ensures that a transaction is completed fully or not applied.'),
    makeQuestion('Indexing', 'What is a major purpose of database indexing?', ['Improve query performance', 'Delete tables', 'Remove primary keys', 'Increase redundancy'], 0, 'Indexes can improve the speed of data retrieval.'),
    makeQuestion('Keys', 'Which key uniquely identifies a row in a table?', ['Foreign key', 'Primary key', 'Duplicate key', 'Search key'], 1, 'A primary key uniquely identifies each row.')
  ]
};

const reassessmentBank = Object.fromEntries(Object.entries(questionBank).map(([subject, questions]) => [
  subject,
  questions.map((item, index) => ({
    ...item,
    q: `Re-assessment: ${item.q}`,
    explanation: `Review point: ${item.explanation}`,
    // Rotate the options to avoid repeating exactly the same answer position.
    options: index % 2 === 0 ? [item.options[1], item.options[0], item.options[2], item.options[3]] : [...item.options],
    answer: index % 2 === 0 ? (item.answer === 0 ? 1 : item.answer === 1 ? 0 : item.answer) : item.answer
  }))
]));

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (Buffer.byteLength(raw) > MAX_BODY) {
        reject(Object.assign(new Error('Request is too large'), { status: 413 }));
        req.destroy();
      }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(raw || '{}')); }
      catch { reject(Object.assign(new Error('Invalid JSON'), { status: 400 })); }
    });
    req.on('error', reject);
  });
}

function servePage(pathname, res) {
  const allowed = { '/': 'index.html', '/index.html': 'index.html', '/style.css': 'style.css', '/script.js': 'script.js' };
  const file = allowed[pathname];
  if (!file) return json(res, 404, { error: 'Not found' });
  const fullPath = path.join(ROOT, file);
  const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
  res.writeHead(200, { 'Content-Type': types[path.extname(fullPath)], 'Cache-Control': 'no-cache' });
  fs.createReadStream(fullPath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  try {
    if (req.method === 'GET' && url.pathname === '/api/health') return json(res, 200, { status: 'ok', database: 'SQLite' });
    if (req.method === 'GET' && url.pathname === '/api/bootstrap') return json(res, 200, { competencyFramework, questionBank, reassessmentBank, frameworkNote: 'Sample Java, Python, Data Structures and DBMS topics for this demo; not an official curriculum.' });

    if (req.method === 'POST' && url.pathname === '/api/learners') {
      const body = await readJson(req);
      const name = String(body.name || '').trim().slice(0, 100);
      const role = String(body.role || '').trim().slice(0, 80);
      const subject = String(body.subject || '').trim().slice(0, 100);
      if (!name || !role || !subject) return json(res, 400, { error: 'Name, role and selected subject are required.' });
      if (!competencyFramework[subject]) return json(res, 400, { error: 'Please select a subject from the available demo framework.' });
      const result = db.prepare('INSERT INTO learners(name, role, subject) VALUES (?, ?, ?)').run(name, role, subject);
      return json(res, 201, { id: Number(result.lastInsertRowid), name, role, subject });
    }

    if (req.method === 'POST' && url.pathname === '/api/attempts') {
      const body = await readJson(req);
      const learnerId = Number(body.learnerId);
      const learner = db.prepare('SELECT id, subject FROM learners WHERE id = ?').get(learnerId);
      if (!Number.isSafeInteger(learnerId) || !learner) return json(res, 400, { error: 'Learner profile was not found. Please create it again.' });
      const phase = String(body.phase || 'assessment').trim();
      const subject = String(body.subject || '').trim();
      const numericScore = Number(body.score);
      if (!['assessment', 'reassessment', 'advanced-assessment'].includes(phase)) return json(res, 400, { error: 'Attempt phase must be assessment, reassessment or advanced-assessment.' });
      if (subject !== learner.subject) return json(res, 400, { error: 'Attempt subject must match the learner profile.' });
      if (!Number.isFinite(numericScore) || numericScore < 0 || numericScore > 100) return json(res, 400, { error: 'Score must be a number from 0 to 100.' });
      if (!body.topicScores || typeof body.topicScores !== 'object' || Array.isArray(body.topicScores)) return json(res, 400, { error: 'Topic scores must be an object.' });
      if (!Array.isArray(body.answers)) return json(res, 400, { error: 'Answers must be an array.' });
      const score = Math.round(numericScore);
      const result = db.prepare('INSERT INTO attempts(learner_id, phase, subject, score, topic_scores, answers) VALUES (?, ?, ?, ?, ?, ?)').run(
        learnerId,
        phase,
        subject,
        score,
        JSON.stringify(body.topicScores || {}),
        JSON.stringify(body.answers || [])
      );
      return json(res, 201, { id: Number(result.lastInsertRowid), score });
    }

    if (req.method === 'GET' && url.pathname.startsWith('/api/progress/')) {
      const learnerId = Number(url.pathname.split('/').pop());
      const learner = db.prepare('SELECT id, name, role, subject FROM learners WHERE id = ?').get(learnerId);
      if (!learner) return json(res, 404, { error: 'Learner profile not found.' });
      const attempts = db.prepare('SELECT id, phase, subject, score, topic_scores AS topicScores, created_at AS createdAt FROM attempts WHERE learner_id = ? ORDER BY id').all(learnerId).map(row => ({ ...row, topicScores: JSON.parse(row.topicScores) }));
      return json(res, 200, { learner, attempts });
    }

    if (req.method === 'GET') return servePage(url.pathname, res);
    return json(res, 405, { error: 'Method not allowed' });
  } catch (error) {
    if (!res.headersSent) json(res, error.status || 500, { error: error.message || 'Server error' });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`SkillPath AI is running at http://localhost:${PORT}`);
  console.log(`SQLite database: ${DB_PATH}`);
});

process.on('SIGINT', () => { db.close(); server.close(() => process.exit(0)); });
process.on('SIGTERM', () => { db.close(); server.close(() => process.exit(0)); });
