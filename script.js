/* =========================================================
   SKILLPATH AI - COMPETENCY FRAMEWORK
   ========================================================= */

const competencyFramework = {

    Python: [
        {
            topic: "Python Basics",
            competency: "Core Python Fundamentals",
            required: 80,
            prerequisite: "Programming fundamentals"
        },
        {
            topic: "Functions",
            competency: "Function Design",
            required: 80,
            prerequisite: "Python Basics"
        },
        {
            topic: "OOP",
            competency: "Object-Oriented Programming",
            required: 80,
            prerequisite: "Python Basics"
        },
        {
            topic: "Exception Handling",
            competency: "Error Handling",
            required: 80,
            prerequisite: "Functions"
        },
        {
            topic: "File Handling",
            competency: "File Processing",
            required: 80,
            prerequisite: "Python Basics"
        }
    ],

    Java: [
        {
            topic: "Java Basics",
            competency: "Java Fundamentals",
            required: 80,
            prerequisite: "Programming fundamentals"
        },
        {
            topic: "Classes and Objects",
            competency: "Object-Oriented Programming",
            required: 80,
            prerequisite: "Java Basics"
        },
        {
            topic: "Inheritance",
            competency: "Inheritance Concepts",
            required: 80,
            prerequisite: "Classes and Objects"
        },
        {
            topic: "Exception Handling",
            competency: "Error Handling",
            required: 80,
            prerequisite: "Java Basics"
        },
        {
            topic: "Collections",
            competency: "Collection Framework",
            required: 80,
            prerequisite: "Java Basics"
        }
    ],

    "Data Structures": [
        {
            topic: "Arrays",
            competency: "Linear Data Representation",
            required: 80,
            prerequisite: "Programming fundamentals"
        },
        {
            topic: "Linked List",
            competency: "Dynamic Linear Structures",
            required: 80,
            prerequisite: "Arrays"
        },
        {
            topic: "Stack",
            competency: "LIFO Data Management",
            required: 80,
            prerequisite: "Arrays"
        },
        {
            topic: "Queue",
            competency: "FIFO Data Management",
            required: 80,
            prerequisite: "Arrays"
        },
        {
            topic: "Trees",
            competency: "Hierarchical Data Structures",
            required: 80,
            prerequisite: "Linked List"
        }
    ],

    DBMS: [
        {
            topic: "SQL",
            competency: "Database Querying",
            required: 80,
            prerequisite: "Database fundamentals"
        },
        {
            topic: "Normalization",
            competency: "Database Design",
            required: 80,
            prerequisite: "SQL"
        },
        {
            topic: "Transactions",
            competency: "Transaction Management",
            required: 80,
            prerequisite: "SQL"
        },
        {
            topic: "Indexing",
            competency: "Query Performance",
            required: 80,
            prerequisite: "SQL"
        },
        {
            topic: "Keys",
            competency: "Relational Integrity",
            required: 80,
            prerequisite: "Database fundamentals"
        }
    ]
};


/* =========================================================
   INITIAL ASSESSMENT QUESTIONS
   ========================================================= */

const questionBank = {

    Python: [

        {
            topic: "Python Basics",
            q: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            answer: 1,
            explanation: "Python uses the def keyword to define a function."
        },

        {
            topic: "Functions",
            q: "Which statement returns a value from a Python function?",
            options: ["send", "return", "output", "give"],
            answer: 1,
            explanation: "The return statement sends a value back from a function."
        },

        {
            topic: "OOP",
            q: "Which concept allows a class to acquire properties of another class?",
            options: ["Inheritance", "Compilation", "Iteration", "Indexing"],
            answer: 0,
            explanation: "Inheritance allows one class to acquire properties and methods of another class."
        },

        {
            topic: "Exception Handling",
            q: "Which block is commonly used to handle an exception in Python?",
            options: ["try-except", "if-else", "for-while", "switch-case"],
            answer: 0,
            explanation: "Python uses try and except blocks for exception handling."
        },

        {
            topic: "File Handling",
            q: "Which function is commonly used to open a file in Python?",
            options: ["file()", "open()", "read()", "load()"],
            answer: 1,
            explanation: "The open() function is used to open a file."
        }

    ],

    Java: [

        {
            topic: "Java Basics",
            q: "Which keyword is used to create a class in Java?",
            options: ["class", "struct", "define", "object"],
            answer: 0,
            explanation: "The class keyword defines a class in Java."
        },

        {
            topic: "Classes and Objects",
            q: "An object is an instance of what?",
            options: ["Method", "Class", "Package", "Interface only"],
            answer: 1,
            explanation: "An object is an instance of a class."
        },

        {
            topic: "Inheritance",
            q: "Which keyword is used for class inheritance in Java?",
            options: ["inherits", "extends", "include", "using"],
            answer: 1,
            explanation: "The extends keyword is used for class inheritance."
        },

        {
            topic: "Exception Handling",
            q: "Which keyword is used to catch an exception?",
            options: ["catch", "error", "handle", "except"],
            answer: 0,
            explanation: "Java uses catch to handle exceptions."
        },

        {
            topic: "Collections",
            q: "Which interface represents an ordered collection that can contain duplicates?",
            options: ["Set", "List", "Map", "QueueOnly"],
            answer: 1,
            explanation: "List represents an ordered collection and can contain duplicates."
        }

    ],

    "Data Structures": [

        {
            topic: "Arrays",
            q: "Which data structure stores elements in contiguous memory locations?",
            options: ["Array", "Tree", "Graph", "Stack only"],
            answer: 0,
            explanation: "Arrays store elements in contiguous memory locations."
        },

        {
            topic: "Linked List",
            q: "A linked list node generally contains data and what?",
            options: ["Pointer/reference", "SQL query", "Compiler", "Class only"],
            answer: 0,
            explanation: "A linked list node stores data and a reference to another node."
        },

        {
            topic: "Stack",
            q: "Which principle does a stack follow?",
            options: ["FIFO", "LIFO", "Random", "Priority only"],
            answer: 1,
            explanation: "Stack follows Last In, First Out."
        },

        {
            topic: "Queue",
            q: "Which principle does a queue follow?",
            options: ["LIFO", "FIFO", "Random", "Binary"],
            answer: 1,
            explanation: "Queue follows First In, First Out."
        },

        {
            topic: "Trees",
            q: "A tree is mainly a type of which structure?",
            options: ["Linear", "Hierarchical", "Sequential only", "Tabular"],
            answer: 1,
            explanation: "A tree represents hierarchical relationships."
        }

    ],

    DBMS: [

        {
            topic: "SQL",
            q: "Which SQL command is used to retrieve data?",
            options: ["SELECT", "DELETE", "DROP", "UPDATE"],
            answer: 0,
            explanation: "SELECT retrieves records from a database."
        },

        {
            topic: "Normalization",
            q: "What is a major purpose of normalization?",
            options: [
                "Increase redundancy",
                "Reduce redundancy",
                "Delete all data",
                "Increase duplicate records"
            ],
            answer: 1,
            explanation: "Normalization reduces data redundancy and improves database design."
        },

        {
            topic: "Transactions",
            q: "Which property ensures a transaction is treated as an all-or-nothing operation?",
            options: ["Atomicity", "Indexing", "Redundancy", "Sorting"],
            answer: 0,
            explanation: "Atomicity ensures that a transaction is completed fully or not applied."
        },

        {
            topic: "Indexing",
            q: "What is a major purpose of database indexing?",
            options: [
                "Improve query performance",
                "Delete tables",
                "Remove primary keys",
                "Increase redundancy"
            ],
            answer: 0,
            explanation: "Indexes can improve the speed of data retrieval."
        },

        {
            topic: "Keys",
            q: "Which key uniquely identifies a row in a table?",
            options: [
                "Foreign key",
                "Primary key",
                "Duplicate key",
                "Search key"
            ],
            answer: 1,
            explanation: "A primary key uniquely identifies each row."
        }

    ]

};


/* =========================================================
   RE-ASSESSMENT QUESTIONS
   ========================================================= */

const reassessmentBank = {

    Python: [

        {
            topic: "Python Basics",
            q: "Which symbol is used to write a comment in Python?",
            options: ["//", "#", "/*", "<!--"],
            answer: 1,
            explanation: "Python uses # for a single-line comment."
        },

        {
            topic: "Functions",
            q: "What is the main purpose of a function?",
            options: [
                "Reuse a block of code",
                "Delete variables",
                "Create a database",
                "Stop the program permanently"
            ],
            answer: 0,
            explanation: "Functions help organize and reuse code."
        },

        {
            topic: "OOP",
            q: "Which OOP concept hides internal implementation details?",
            options: [
                "Encapsulation",
                "Iteration",
                "Indexing",
                "Compilation"
            ],
            answer: 0,
            explanation: "Encapsulation groups data and methods and controls access to implementation details."
        },

        {
            topic: "Exception Handling",
            q: "Which block executes whether an exception occurs or not?",
            options: ["finally", "except", "error", "repeat"],
            answer: 0,
            explanation: "The finally block is designed to execute after try/except processing."
        },

        {
            topic: "File Handling",
            q: "Which mode is generally used to append data to a file?",
            options: ["r", "w", "a", "x"],
            answer: 2,
            explanation: "The a mode appends data to an existing file."
        }

    ],

    Java: [

        {
            topic: "Java Basics",
            q: "Which method is the common starting point of a Java application?",
            options: ["start()", "main()", "run()", "execute()"],
            answer: 1,
            explanation: "The main() method is the standard entry point of a Java application."
        },

        {
            topic: "Classes and Objects",
            q: "Which keyword is used to create an object in Java?",
            options: ["new", "object", "create", "make"],
            answer: 0,
            explanation: "The new keyword creates an object."
        },

        {
            topic: "Inheritance",
            q: "What is the class being inherited from commonly called?",
            options: ["Superclass", "Child class", "Local class", "Loop class"],
            answer: 0,
            explanation: "The class from which another class inherits is commonly called the superclass."
        },

        {
            topic: "Exception Handling",
            q: "Which keyword manually throws an exception?",
            options: ["throws", "throw", "error", "raise"],
            answer: 1,
            explanation: "The throw keyword is used to explicitly throw an exception."
        },

        {
            topic: "Collections",
            q: "Which collection does not allow duplicate elements?",
            options: ["List", "Set", "ArrayList", "Vector"],
            answer: 1,
            explanation: "Set collections are designed not to contain duplicate elements."
        }

    ],

    "Data Structures": [

        {
            topic: "Arrays",
            q: "What is the usual time complexity for accessing an array element by index?",
            options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
            answer: 0,
            explanation: "Direct array indexing generally provides O(1) access."
        },

        {
            topic: "Linked List",
            q: "Which operation can be efficient at the beginning of a linked list?",
            options: [
                "Insertion",
                "Binary search",
                "Random access",
                "Index calculation"
            ],
            answer: 0,
            explanation: "Insertion at the beginning can be done efficiently when the head reference is available."
        },

        {
            topic: "Stack",
            q: "Which operation removes the top element from a stack?",
            options: ["Push", "Pop", "Peek only", "Insert"],
            answer: 1,
            explanation: "Pop removes the top element."
        },

        {
            topic: "Queue",
            q: "Which operation adds an element to a queue?",
            options: ["Enqueue", "Dequeue", "Pop", "Peek"],
            answer: 0,
            explanation: "Enqueue adds an element to a queue."
        },

        {
            topic: "Trees",
            q: "What is the topmost node of a tree called?",
            options: ["Leaf", "Root", "Child", "Edge"],
            answer: 1,
            explanation: "The topmost node is called the root."
        }

    ],

    DBMS: [

        {
            topic: "SQL",
            q: "Which SQL clause is used to filter rows?",
            options: ["WHERE", "ORDER", "TABLE", "COLUMN"],
            answer: 0,
            explanation: "WHERE filters rows based on a condition."
        },

        {
            topic: "Normalization",
            q: "Which normal form is associated with removing partial dependency?",
            options: ["1NF", "2NF", "3NF", "BCNF only"],
            answer: 1,
            explanation: "Second Normal Form addresses partial dependency."
        },

        {
            topic: "Transactions",
            q: "Which ACID property ensures committed changes remain persistent?",
            options: [
                "Atomicity",
                "Consistency",
                "Isolation",
                "Durability"
            ],
            answer: 3,
            explanation: "Durability ensures committed transaction changes persist."
        },

        {
            topic: "Indexing",
            q: "An index is primarily used to make what faster?",
            options: [
                "Data retrieval",
                "Table deletion",
                "Database installation",
                "Column naming"
            ],
            answer: 0,
            explanation: "Indexes are primarily used to improve data retrieval performance."
        },

        {
            topic: "Keys",
            q: "Which key establishes a relationship with a key in another table?",
            options: [
                "Foreign key",
                "Primary key only",
                "Candidate key only",
                "Duplicate key"
            ],
            answer: 0,
            explanation: "A foreign key references a key in another table."
        }

    ]

};


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const state = {

    name: "",
    role: "Learner",
    subject: "",

    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: [],

    topicScores: {},
    weakestTopic: "",
    weakestScore: 0,

    reassessmentQuestions: [],
    currentRQuestion: 0,
    rScore: 0,
    rAnswers: [],

    beforeScore: 0,
    afterScore: 0,

    timerInterval: null
};


/* =========================================================
   NAVIGATION
   ========================================================= */

function showSection(id) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    const section = document.getElementById(id);

    if (section) {
        section.classList.add("active");
    }

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(btn => {

        const text = btn.textContent
            .toLowerCase()
            .replace("&", "and")
            .replace("-", " ");

        const target = id
            .toLowerCase()
            .replace("-", " ");

        if (
            text.includes(target) ||
            (id === "progress" && text.includes("progress"))
        ) {
            btn.classList.add("active");
        }
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SUBJECT / PROFILE
   ========================================================= */

function selectSubject(subject, button) {

    state.subject = subject;

    document.querySelectorAll(".subject-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    renderTopics();
    renderStarter();

    showToast(subject + " selected");
}


function saveProfile() {

    const name = document
        .getElementById("learnerName")
        .value
        .trim();

    const role = document
        .getElementById("learnerRole")
        .value;

    if (!name) {
        showToast("Please enter learner name");
        return;
    }

    if (!state.subject) {
        showToast("Please select a subject");
        return;
    }

    state.name = name;
    state.role = role;

    renderTopics();
    renderStarter();

    showSection("topics");

    showToast("Learner profile created");
}


/* =========================================================
   TOPICS
   ========================================================= */

function renderTopics() {

    const container =
        document.getElementById("topicContainer");

    if (!container || !state.subject) return;

    const topics =
        competencyFramework[state.subject];

    container.innerHTML =
        topics.map(item => `

            <div class="topic-card">

                <h3>${item.topic}</h3>

                <p>
                    Competency:
                    <strong>${item.competency}</strong>
                </p>

                <div class="topic-meta">

                    <span>
                        Required: ${item.required}%
                    </span>

                    <span>
                        Prerequisite: ${item.prerequisite}
                    </span>

                </div>

            </div>

        `).join("");
}


function renderStarter() {

    const container =
        document.getElementById("starterContent");

    if (!container || !state.subject) return;

    const firstTopic =
        competencyFramework[state.subject][0];

    container.innerHTML = `

        <span class="badge">
            FOUNDATION CONCEPT
        </span>

        <h2>
            ${firstTopic.topic}
        </h2>

        <p>
            This starter module introduces the fundamentals
            required for the upcoming competency assessment.
        </p>

        <br>

        <p>
            <strong>Competency:</strong>
            ${firstTopic.competency}
        </p>

        <p>
            <strong>Required proficiency:</strong>
            ${firstTopic.required}%
        </p>

    `;
}


/* =========================================================
   INITIAL ASSESSMENT
   ========================================================= */

function startAssessment() {

    if (!state.subject) {

        showToast("Please select a subject first");
        showSection("profile");

        return;
    }

    state.questions =
        [...questionBank[state.subject]];

    state.currentQuestion = 0;
    state.score = 0;
    state.answers = [];

    renderQuestion();

    showSection("assessment");
}


function renderQuestion() {

    const question =
        state.questions[state.currentQuestion];

    if (!question) return;

    document.getElementById("questionNumber")
        .textContent =
        `Question ${state.currentQuestion + 1} of ${state.questions.length}`;

    document.getElementById("assessmentScore")
        .textContent =
        `Score: ${state.score}`;

    document.getElementById("questionTopic")
        .textContent =
        question.topic;

    document.getElementById("questionText")
        .textContent =
        question.q;

    const container =
        document.getElementById("answerContainer");

    container.innerHTML = "";

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.textContent = option;

        button.onclick = () => {

            document
                .querySelectorAll("#answerContainer .option")
                .forEach(item => {
                    item.classList.remove("selected");
                });

            button.classList.add("selected");

            state.answers[state.currentQuestion] =
                index;
        };

        container.appendChild(button);
    });
}


function skipQuestion() {

    state.answers[state.currentQuestion] = null;

    nextQuestion();
}


function nextQuestion() {

    const question =
        state.questions[state.currentQuestion];

    const selected =
        state.answers[state.currentQuestion];

    if (
        selected !== null &&
        selected !== undefined &&
        selected === question.answer
    ) {
        state.score++;
    }

    state.currentQuestion++;

    if (
        state.currentQuestion >=
        state.questions.length
    ) {

        finishAssessment();

        return;
    }

    renderQuestion();
}


/* =========================================================
   GAP ANALYSIS
   ========================================================= */

function calculateTopicScores() {

    state.topicScores = {};

    state.questions.forEach((question, index) => {

        const selected =
            state.answers[index];

        state.topicScores[question.topic] =
            selected === question.answer
                ? 100
                : 0;
    });

    const topicNames =
        Object.keys(state.topicScores);

    if (!topicNames.length) {
        state.weakestTopic = "";
        state.weakestScore = 0;
        return;
    }

    let weakest =
        topicNames[0];

    topicNames.forEach(topic => {

        if (
            state.topicScores[topic] <
            state.topicScores[weakest]
        ) {
            weakest = topic;
        }

    });

    state.weakestTopic = weakest;
    state.weakestScore =
        state.topicScores[weakest];
}


function gapPriority(score) {

    if (score < 50) return "HIGH";

    if (score < 80) return "MEDIUM";

    return "ON TRACK";
}


function finishAssessment() {

    const total =
        state.questions.length;

    if (!total) return;

    state.beforeScore =
        Math.round(
            (state.score / total) * 100
        );

    calculateTopicScores();

    const requiredLevel = 80;

    const gap =
        Math.max(
            0,
            requiredLevel - state.beforeScore
        );

    document.getElementById("overallScore")
        .textContent =
        state.beforeScore + "%";

    document.getElementById("gapScore")
        .textContent =
        gap + "%";

    document.getElementById("priorityScore")
        .textContent =
        gapPriority(state.weakestScore);

    renderGapExplanation();
    renderTopicPerformance();
    renderMistakes();

    showSection("gap");
}


/*
    FIX 1 + FIX 2:
    Clear overall-gap calculation and correct 100% case.
*/

function renderGapExplanation() {

    const explanation =
        document.getElementById("gapExplanation");

    if (!state.subject) {
        explanation.textContent = "";
        return;
    }

    const requiredLevel = 80;

    /*
        If learner reaches required level,
        do not call any topic a "gap".
    */

    if (state.beforeScore >= requiredLevel) {

        explanation.textContent =
            `The learner achieved ${state.beforeScore}% in the assessment, ` +
            `which meets the required ${requiredLevel}% proficiency level. ` +
            `No competency gap is currently identified. The learner can progress ` +
            `towards the next competency or advanced topic.`;

        return;
    }

    const topic =
        competencyFramework[state.subject]
            .find(item =>
                item.topic === state.weakestTopic
            );

    if (!topic) return;

    const topicScore =
        state.topicScores[state.weakestTopic];

    const topicGap =
        Math.max(
            0,
            topic.required - topicScore
        );

    explanation.textContent =
        `The learner scored ${state.beforeScore}% overall against the required ` +
        `${requiredLevel}% level, creating an overall gap of ` +
        `${requiredLevel - state.beforeScore}%. ` +
        `The weakest mapped topic is ${topic.topic}, with a demo competency ` +
        `indicator of ${topicScore}%. ` +
        `This indicates a ${topicGap}% topic-level gap against the ${topic.required}% ` +
        `target, so ${topic.topic} is prioritised for targeted learning.`;
}


/*
    FIX 3:
    Topic score is explicitly treated as a demo indicator.
*/

function renderTopicPerformance() {

    const container =
        document.getElementById("topicPerformance");

    container.innerHTML = "";

    Object.entries(state.topicScores)
        .forEach(([topic, score]) => {

            const priority =
                gapPriority(score);

            container.innerHTML += `

                <div class="performance-row">

                    <div class="performance-top">

                        <span>
                            ${topic}
                        </span>

                        <span>
                            ${score}% — ${priority}
                        </span>

                    </div>

                    <div class="progress">

                        <div
                            class="progress-fill"
                            style="width:${score}%"
                        ></div>

                    </div>

                </div>

            `;
        });
}


/* =========================================================
   MISTAKE REVIEW
   ========================================================= */

function renderMistakes() {

    const container =
        document.getElementById("mistakeContainer");

    container.innerHTML = "";

    state.questions.forEach((question, index) => {

        const selected =
            state.answers[index];

        const isCorrect =
            selected === question.answer;

        const selectedText =
            selected === null ||
            selected === undefined
                ? "Skipped"
                : question.options[selected];

        if (isCorrect) {

            container.innerHTML += `

                <div class="review-box correct">

                    <div class="review-status">
                        CORRECT ANSWER
                    </div>

                    <h3>${question.topic}</h3>

                    <p>
                        <strong>Question:</strong>
                        ${question.q}
                    </p>

                    <p>
                        <strong>Your answer:</strong>
                        ${selectedText}
                    </p>

                    <p>
                        <strong>Why it is correct:</strong>
                        ${question.explanation}
                    </p>

                </div>

            `;

        } else {

            container.innerHTML += `

                <div class="review-box incorrect">

                    <div class="review-status">
                        INCORRECT / NEEDS REVIEW
                    </div>

                    <h3>${question.topic}</h3>

                    <p>
                        <strong>Question:</strong>
                        ${question.q}
                    </p>

                    <p>
                        <strong>Your answer:</strong>
                        ${selectedText}
                    </p>

                    <p>
                        <strong>Correct answer:</strong>
                        ${question.options[question.answer]}
                    </p>

                    <p>
                        <strong>Explanation:</strong>
                        ${question.explanation}
                    </p>

                </div>

            `;
        }

    });
}


/* =========================================================
   TARGETED LEARNING
   ========================================================= */

function startTargetedLearning() {

    if (!state.subject || !state.weakestTopic) {

        showToast("Complete the assessment first");

        return;
    }

    const topic =
        state.weakestTopic;

    const competency =
        competencyFramework[state.subject]
            .find(item =>
                item.topic === topic
            );

    if (!competency) return;

    document.getElementById("learningTopic")
        .textContent =
        topic;

    const priority =
        gapPriority(state.weakestScore);

    document.getElementById("learningPriority")
        .textContent =
        priority + " PRIORITY";

    document.getElementById("learningReason")
        .textContent =
        `This topic was selected because the assessment identified a gap in ` +
        `${competency.competency}. The current demo indicator is ` +
        `${state.weakestScore}% against the required ${competency.required}% proficiency.`;

    document.getElementById("learningContent")
        .innerHTML =
        getLearningContent(
            state.subject,
            topic
        );

    startTimer();

    showSection("learning");
}


function getLearningContent(subject, topic) {

    const content = {

        Python: {

            "Python Basics":
                "Focus on variables, data types, operators, conditions and basic syntax.",

            "Functions":
                "Focus on function definition, parameters, return values and reusable logic.",

            "OOP":
                "Focus on classes, objects, encapsulation, inheritance and polymorphism.",

            "Exception Handling":
                "Focus on try, except, else and finally and how errors are handled.",

            "File Handling":
                "Focus on opening files, reading, writing and appending data."

        },

        Java: {

            "Java Basics":
                "Focus on Java syntax, variables, data types, classes and program structure.",

            "Classes and Objects":
                "Focus on classes, objects, constructors and methods.",

            "Inheritance":
                "Focus on superclass, subclass, extends and reuse of class behaviour.",

            "Exception Handling":
                "Focus on try, catch, finally, throw and throws.",

            "Collections":
                "Focus on List, Set, Map and choosing an appropriate collection."

        },

        "Data Structures": {

            "Arrays":
                "Focus on indexed storage, traversal and direct access.",

            "Linked List":
                "Focus on nodes, references and insertion/deletion operations.",

            "Stack":
                "Focus on LIFO behaviour and push, pop and peek operations.",

            "Queue":
                "Focus on FIFO behaviour and enqueue/dequeue operations.",

            "Trees":
                "Focus on root, child, leaf and hierarchical relationships."

        },

        DBMS: {

            "SQL":
                "Focus on SELECT, WHERE, filtering and retrieving database records.",

            "Normalization":
                "Focus on reducing redundancy and improving relational database design.",

            "Transactions":
                "Focus on ACID properties and reliable transaction processing.",

            "Indexing":
                "Focus on indexes and how they improve data retrieval performance.",

            "Keys":
                "Focus on primary keys, foreign keys and relational integrity."

        }

    };

    return `

        <h3>
            Concept Explanation
        </h3>

        <p>
            ${content[subject][topic]}
        </p>

        <br>

        <h3>
            Guided Practice
        </h3>

        <p>
            Review the concept, identify the key rule,
            and explain it in your own words before starting
            the re-assessment.
        </p>

        <br>

        <h3>
            Learning Reminder
        </h3>

        <p>
            The goal is not only to answer the next question
            correctly, but to strengthen the underlying competency.
        </p>

    `;
}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(state.timerInterval);

    let seconds = 60;

    document.getElementById("timer")
        .textContent =
        "01:00";

    state.timerInterval =
        setInterval(() => {

            seconds--;

            const min =
                String(
                    Math.floor(seconds / 60)
                ).padStart(2, "0");

            const sec =
                String(seconds % 60)
                    .padStart(2, "0");

            document.getElementById("timer")
                .textContent =
                `${min}:${sec}`;

            if (seconds <= 0) {

                clearInterval(
                    state.timerInterval
                );

                showToast(
                    "Learning timer completed"
                );
            }

        }, 1000);
}


/* =========================================================
   RE-ASSESSMENT
   ========================================================= */

function startReassessment() {

    if (!state.subject) {
        showToast("Please complete the initial assessment first");
        return;
    }

    clearInterval(state.timerInterval);

    state.reassessmentQuestions =
        [...reassessmentBank[state.subject]];

    state.currentRQuestion = 0;
    state.rScore = 0;
    state.rAnswers = [];

    renderRQ();

    showSection("reassessment");
}


function renderRQ() {

    const question =
        state.reassessmentQuestions[
            state.currentRQuestion
        ];

    if (!question) return;

    document.getElementById("rQuestionNumber")
        .textContent =
        `Question ${state.currentRQuestion + 1} of ${state.reassessmentQuestions.length}`;

    document.getElementById("rScore")
        .textContent =
        `Score: ${state.rScore}`;

    document.getElementById("rQuestionTopic")
        .textContent =
        question.topic;

    document.getElementById("rQuestionText")
        .textContent =
        question.q;

    const container =
        document.getElementById("rAnswerContainer");

    container.innerHTML = "";

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.textContent = option;

        button.onclick = () => {

            document
                .querySelectorAll("#rAnswerContainer .option")
                .forEach(item => {
                    item.classList.remove("selected");
                });

            button.classList.add("selected");

            state.rAnswers[
                state.currentRQuestion
            ] = index;
        };

        container.appendChild(button);

    });
}


function skipRQuestion() {

    state.rAnswers[
        state.currentRQuestion
    ] = null;

    nextRQuestion();
}


function nextRQuestion() {

    const question =
        state.reassessmentQuestions[
            state.currentRQuestion
        ];

    const selected =
        state.rAnswers[
            state.currentRQuestion
        ];

    if (
        selected !== null &&
        selected !== undefined &&
        selected === question.answer
    ) {
        state.rScore++;
    }

    state.currentRQuestion++;

    if (
        state.currentRQuestion >=
        state.reassessmentQuestions.length
    ) {

        finishReassessment();

        return;
    }

    renderRQ();
}


/* =========================================================
   PROGRESS + RECOMMENDATION
   ========================================================= */

function finishReassessment() {

    const total =
        state.reassessmentQuestions.length;

    if (!total) return;

    state.afterScore =
        Math.round(
            (state.rScore / total) * 100
        );

    const improvement =
        state.afterScore -
        state.beforeScore;

    document.getElementById("beforeScore")
        .textContent =
        state.beforeScore + "%";

    document.getElementById("afterScore")
        .textContent =
        state.afterScore + "%";

    document.getElementById("improvementScore")
        .textContent =
        (improvement >= 0 ? "+" : "") +
        improvement +
        "%";

    generateRecommendation();

    showSection("progress");
}


function generateRecommendation() {

    const topic =
        state.weakestTopic;

    const recommendation =
        document.getElementById("nextRecommendation");

    if (state.afterScore >= 80) {

        recommendation.textContent =
            `The reassessment shows that the learner reached the required ` +
            `80% competency level. The recommended next step is to progress ` +
            `towards the next competency or an advanced topic.`;

    }

    else if (
        state.afterScore >
        state.beforeScore
    ) {

        recommendation.textContent =
            `The learner improved after targeted learning, but the required ` +
            `80% level has not yet been reached. Continue guided practice for ` +
            `${topic} and reassess again.`;

    }

    else {

        recommendation.textContent =
            `The competency gap remains in ${topic}. The platform recommends ` +
            `prerequisite reinforcement before another assessment.`;

    }
}


/* =========================================================
   iGOT DEMO
   ========================================================= */

/*
    FIX 5:
    Role selection remains available for the demo.
    The current prototype does not claim full role-based access.
*/

function showIGOTRecommendation() {

    const box =
        document.getElementById("igotRecommendation");

    const topic =
        state.weakestTopic || "the identified competency";

    const score =
        state.afterScore || state.beforeScore;

    let recommendation;

    if (score >= 80) {

        recommendation =
            `Demo iGOT Recommendation: Progress to an advanced learning module ` +
            `related to ${topic}.`;

    } else {

        recommendation =
            `Demo iGOT Recommendation: Assign foundational learning for ` +
            `${topic}, followed by practice and reassessment.`;

    }

    box.innerHTML = `
        <strong>Simulated Training Recommendation</strong>
        <br><br>
        ${recommendation}
        <br><br>
        <span>
            This is a demo recommendation. A production version would use
            authorised iGOT APIs and learner/training data.
        </span>
    `;

    box.classList.add("show");
}


/* =========================================================
   RESTART
   ========================================================= */

function restartDemo() {

    clearInterval(
        state.timerInterval
    );

    state.name = "";
    state.role = "Learner";
    state.subject = "";

    state.questions = [];
    state.currentQuestion = 0;
    state.score = 0;
    state.answers = [];

    state.topicScores = {};
    state.weakestTopic = "";
    state.weakestScore = 0;

    state.reassessmentQuestions = [];
    state.currentRQuestion = 0;
    state.rScore = 0;
    state.rAnswers = [];

    state.beforeScore = 0;
    state.afterScore = 0;

    document.getElementById("learnerName")
        .value = "";

    document.getElementById("learnerRole")
        .value = "Learner";

    document.querySelectorAll(".subject-btn")
        .forEach(btn => {
            btn.classList.remove("selected");
        });

    document.getElementById("topicContainer")
        .innerHTML = "";

    document.getElementById("starterContent")
        .innerHTML = "";

    document.getElementById("mistakeContainer")
        .innerHTML = "";

    document.getElementById("topicPerformance")
        .innerHTML = "";

    document.getElementById("overallScore")
        .textContent = "0%";

    document.getElementById("gapScore")
        .textContent = "0%";

    document.getElementById("priorityScore")
        .textContent = "-";

    document.getElementById("beforeScore")
        .textContent = "0%";

    document.getElementById("afterScore")
        .textContent = "0%";

    document.getElementById("improvementScore")
        .textContent = "0%";

    document.getElementById("gapExplanation")
        .textContent = "";

    document.getElementById("nextRecommendation")
        .textContent = "";

    document.getElementById("igotRecommendation")
        .innerHTML = "";

    document.getElementById("igotRecommendation")
        .classList.remove("show");

    showSection("welcome");

    showToast(
        "Demo restarted successfully"
    );
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent =
        message;

    toast.style.display =
        "block";

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            toast.style.display =
                "none";

        }, 2500);
}