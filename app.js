// ==========================================
// ROADMAP DATABASE (Tailored per Career path)
// ==========================================
const ROADMAPS_DB = {
  "Machine Learning Engineer": {
    foundations: [
      { id: "mle-f-1", title: "Linear Algebra & Vector Calculus", desc: "Eigenvalues, Singular Value Decomposition (SVD), Gradients, Jacobians, and Matrix operations.", time: "15 hours", resources: ["3Blue1Brown Linear Algebra", "Math for ML Textbook"], projects: ["Matrix Transformation Visualizer"] },
      { id: "mle-f-2", title: "Python for Data Science", desc: "Data structures, NumPy vectorization, Pandas DataFrame queries, and OOP concepts.", time: "20 hours", resources: ["Python DS Handbook", "Kaggle Python Course"], projects: ["Vectorized Data Processing Pipeline"] },
      { id: "mle-f-3", title: "Probability & Inferential Stats", desc: "Probability distributions, Bayes Theorem, PDF/CDF, and hypothesis testing.", time: "12 hours", resources: ["StatQuest Probability Basics", "OpenIntro Statistics"], projects: ["A/B Testing Simulator"] }
    ],
    intermediate: [
      { id: "mle-i-1", title: "Supervised Learning Algorithms", desc: "Linear/Logistic Regression, Tree-based Models (Decision Trees, Random Forests, XGBoost), and SVMs.", time: "25 hours", resources: ["Andrew Ng ML Specialization", "Scikit-Learn Docs"], projects: ["Housing Price Regressor API"] },
      { id: "mle-i-2", title: "Deep Learning & Neural Networks", desc: "MLPs, activation functions, backpropagation, SGD, Adam, and regularizations.", time: "30 hours", resources: ["Deep Learning Book (Goodfellow)", "Fast.ai Practical DL"], projects: ["Custom CNN Image Classifier in PyTorch"] },
      { id: "mle-i-3", title: "SQL & Relational Schema Design", desc: "Advanced Joins, CTEs, Window functions, indexing, and normalization.", time: "10 hours", resources: ["Mode Analytics SQL tutorial", "LeetCode SQL problems"], projects: ["User Behavior Event Database Schema"] }
    ],
    advanced: [
      { id: "mle-a-1", title: "MLOps & Model Serving", desc: "FastAPI wrappers, Docker containerization, and basic model deployment pipeline.", time: "20 hours", resources: ["Made With ML (Goku Mohandas)", "FastAPI Official Guide"], projects: ["Predictive Model API Containerized in Docker"] },
      { id: "mle-a-2", title: "Sequence Models & Transformers", desc: "RNNs, LSTMs, Attention mechanism, and the original Transformer architecture.", time: "25 hours", resources: ["Hugging Face NLP Course", "Stanford CS224N lectures"], projects: ["Text Generator from Scratch (PyTorch)"] }
    ],
    projects: [
      { id: "mle-p-1", title: "Production ML Inference Pipeline", desc: "Build, containerize, and deploy a neural network model API with experiment tracking.", time: "30 hours", resources: ["MLflow Docs", "Docker Docs"], projects: ["End-to-End Inference API with MLflow & Docker"] }
    ],
    interview: [
      { id: "mle-v-1", title: "Machine Learning System Design", desc: "Designing recommendation systems, search rankings, and large-scale data ingestion.", time: "15 hours", resources: ["Designing Machine Learning Systems (Chip Huyen)", "System Design Primer"], projects: ["ML System Design Whitepaper"] }
    ],
    internship: [
      { id: "mle-n-1", title: "Git, Collaboration & CI/CD", desc: "GitHub actions, branching workflows, pre-commit hooks, and style checking.", time: "10 hours", resources: ["Git Pro Book", "GitHub Actions docs"], projects: ["Automated Model Testing via GitHub Actions"] }
    ]
  },
  "AI Engineer": {
    foundations: [
      { id: "aie-f-1", title: "Python & APIs Fundamentals", desc: "Async/await patterns, JSON parsing, API query methods, and HTTP protocols.", time: "15 hours", resources: ["Python Documentation", "RealPython API Guides"], projects: ["Async Data Scraper"] },
      { id: "aie-f-2", title: "Introduction to Large Language Models", desc: "Decoder architectures, tokenization methods, and API prompt structuring.", time: "10 hours", resources: ["Andrej Karpathy 'Intro to LLMs'", "Hugging Face transformers docs"], projects: ["LLM Text Completion Tool"] }
    ],
    intermediate: [
      { id: "aie-i-1", title: "Vector Databases & Embeddings", desc: "Semantic search, Cosine similarity, vector indexing, Pinecone, and ChromaDB.", time: "18 hours", resources: ["Pinecone Learn Center", "Cohere LLM University"], projects: ["Semantic Document Search Engine"] },
      { id: "aie-i-2", title: "Retrieval-Augmented Generation (RAG)", desc: "Document loading, chunking strategies, parent-child retrievers, and prompt injection.", time: "25 hours", resources: ["LlamaIndex Docs", "LangChain Academy"], projects: ["QA Bot Over Custom PDFs (RAG)"] }
    ],
    advanced: [
      { id: "aie-a-1", title: "AI Agents & Tool Calling", desc: "ReAct framework, LangGraph, tool definitions, and conversational state tracking.", time: "30 hours", resources: ["LangGraph Tutorials", "DeepLearning.ai Agent courses"], projects: ["Autonomous SQL-Querying AI Agent"] },
      { id: "aie-a-2", title: "LLM Fine-Tuning & Quantization", desc: "PEFT, LoRA, QLoRA, GGML/GGUF exports, and parameter-efficient adapters.", time: "25 hours", resources: ["Axolotl Guides", "Hugging Face PEFT documentation"], projects: ["Fine-tuned Llama-3 for Medical Dialogue"] }
    ],
    projects: [
      { id: "aie-p-1", title: "Enterprise AI Agent Dashboard", desc: "Create a fully functional multi-agent dashboard that performs web research and SQL queries.", time: "35 hours", resources: ["Vite Docs", "FastAPI Docs"], projects: ["Multi-Agent Research Assistant App"] }
    ],
    interview: [
      { id: "aie-v-1", title: "LLM System Design & Security", desc: "Prompt injection defenses, rate-limiting, semantic caching, and LLM evaluation (Ragas).", time: "15 hours", resources: ["OWASP Top 10 LLM", "Ragas Documentation"], projects: ["RAG Evaluator Test Suite"] }
    ],
    internship: [
      { id: "aie-n-1", title: "Cloud Deployment & Docker", desc: "Deploying LLM orchestrations to AWS/GCP, Docker containerization, and Streamlit layouts.", time: "12 hours", resources: ["AWS ECS Guides", "Docker Hub"], projects: ["Dockerized Streamlit AI Chatbot on AWS"] }
    ]
  },
  "Data Scientist": {
    foundations: [
      { id: "ds-f-1", title: "Applied Probability & Distributions", desc: "Hypothesis testing, P-Values, Z-tests, ANOVA, and Central Limit Theorem.", time: "15 hours", resources: ["StatQuest Statistics Course", "Khan Academy Statistics"], projects: ["Statistical Significance Calculator"] },
      { id: "ds-f-2", title: "Python Basics & Matplotlib", desc: "Pandas manipulation, NumPy vectors, Matplotlib and Seaborn visualization styles.", time: "15 hours", resources: ["Pandas Docs", "Seaborn Gallery"], projects: ["Exploratory Data Analysis Report"] }
    ],
    intermediate: [
      { id: "ds-i-1", title: "Regression & Forecasting Models", desc: "Linear/Logistic Regression, GLMs, ANOVA, and Time Series ARIMA models.", time: "20 hours", resources: ["Forecasting: Principles & Practice", "Scikit-Learn Guides"], projects: ["E-Commerce Sales Predictor"] },
      { id: "ds-i-2", title: "Advanced SQL & Warehousing", desc: "Window functions, subqueries, CTEs, aggregation rollups, and indexing.", time: "15 hours", resources: ["SQL Zoo", "LeetCode Database problems"], projects: ["User Retention Cohort Querying Suite"] }
    ],
    advanced: [
      { id: "ds-a-1", title: "Experimental Design & A/B Testing", desc: "Sample size calculation, power analysis, type I/II errors, and sequential tests.", time: "20 hours", resources: ["A/B Testing (Kohavi)", "Evan Miller's A/B Tools"], projects: ["A/B Test Metric Dashboard"] },
      { id: "ds-a-2", title: "Unsupervised Models & Clustering", desc: "K-Means, PCA dimensional reductions, hierarchical clusters, and GMM models.", time: "15 hours", resources: ["ESL (Hastie/Tibshirani)", "Scikit-Learn Cluster docs"], projects: ["Customer Segmentation Clustering Report"] }
    ],
    projects: [
      { id: "ds-p-1", title: "Data-Driven Marketing Audit", desc: "Analyze raw logs, perform A/B test analysis, and generate interactive Tableau/Plotly charts.", time: "25 hours", resources: ["Plotly Docs", "Tableau Tutorials"], projects: ["Marketing Campaign ROI Dashboard"] }
    ],
    interview: [
      { id: "ds-v-1", title: "Data Science Product Metrics", desc: "Defining product success metrics, debugging conversion drop-offs, and case studies.", time: "12 hours", resources: ["Cracking the PM Interview", "Product Case Studies"], projects: ["Product Metric Funnel Whitepaper"] }
    ],
    internship: [
      { id: "ds-n-1", title: "Jupyter Collaboration & Presentation", desc: "Clean notebook layouts, markdown report styling, and slideshow compilation.", time: "8 hours", resources: ["Jupyter Docs", "Voila docs"], projects: ["HTML Interactive Notebook Report"] }
    ]
  },
  "Software Engineer": {
    foundations: [
      { id: "swe-f-1", title: "Object Oriented Programming (OOP)", desc: "Classes, polymorphism, inheritance, design patterns, and solid design.", time: "18 hours", resources: ["Head First Design Patterns", "Clean Code Book"], projects: ["Object-Oriented Banking App Mock"] },
      { id: "swe-f-2", title: "Basic Data Structures", desc: "Arrays, Linked Lists, Stacks, Queues, Hash Tables, and Big-O runtime notation.", time: "20 hours", resources: ["Abdul Bari Algorithms Course", "LeetCode Explore"], projects: ["Custom Hash Map Implementation"] }
    ],
    intermediate: [
      { id: "swe-i-1", title: "Advanced Algorithms & Trees", desc: "Recursion, DFS/BFS traversals, sorting, and binary trees.", time: "25 hours", resources: ["CLRS Introduction to Algorithms", "LeetCode Roadmap"], projects: ["Graph Path Finder Visualizer"] },
      { id: "swe-i-2", title: "REST APIs & Databases", desc: "HTTP codes, API routing, relational schemas, PostgreSQL, and SQL joins.", time: "20 hours", resources: ["PostgreSQL Docs", "MDN HTTP Guides"], projects: ["RESTful CRUD API Service"] }
    ],
    advanced: [
      { id: "swe-a-1", title: "System Design & Architecture", desc: "Load balancers, Caching (Redis), CDNs, Sharding, and Eventual Consistency.", time: "25 hours", resources: ["System Design Interview (Alex Xu)", "ByteByteGo"], projects: ["Distributed Chat System Architecture"] },
      { id: "swe-a-2", title: "Concurrency & Multithreading", desc: "Mutexes, locks, semaphore synchronization, async pools, and processes.", time: "15 hours", resources: ["Java Concurrency in Practice", "Python Threading Guides"], projects: ["High-Throughput File Processing Pool"] }
    ],
    projects: [
      { id: "swe-p-1", title: "E-Commerce Microservice API", desc: "Build and deploy an API service with token validation, caching, and database schemas.", time: "30 hours", resources: ["Redis Docs", "Docker Docs"], projects: ["Microservice API with Redis & Docker"] }
    ],
    interview: [
      { id: "swe-v-1", title: "Algorithm Mock Prep", desc: "LeetCode medium/hard patterns: dynamic programming, slide window, two pointers.", time: "20 hours", resources: ["Neetcode 150 list", "Elements of Programming Interviews"], projects: ["100 Solved Leetcode Solutions Repository"] }
    ],
    internship: [
      { id: "swe-n-1", title: "CI/CD & Shell Scripting", desc: "Linux commands, SSH, GitHub actions, automated testing, and branch merges.", time: "10 hours", resources: ["Linux Command Line Book", "GitHub Actions docs"], projects: ["Automated Test & Build pipeline setup"] }
    ]
  }
};

// Default roadmaps for standard web roles not fully mapped to prevent crashes
const WEB_ROADMAPS_DEFAULT = {
  foundations: [
    { id: "web-f-1", title: "Foundations & Syntax", desc: "Master the base programming constructs and syntax of your chosen track.", time: "15 hours", resources: ["FreeCodeCamp Basics", "MDN Docs"], projects: ["Local Calculator App"] }
  ],
  intermediate: [
    { id: "web-i-1", title: "Intermediate Application Logic", desc: "Create interactive elements, deal with APIs, and wire up database backends.", time: "20 hours", resources: ["Roadmap.sh Tutorials", "W3Schools Guides"], projects: ["To-Do Database Sync Application"] }
  ],
  advanced: [
    { id: "web-a-1", title: "Advanced Deployments & Scale", desc: "Deploy containerized layouts and evaluate latency bottlenecks.", time: "25 hours", resources: ["Official Documentation", "DevOps basics"], projects: ["Full Cloud Deployment System"] }
  ],
  projects: [
    { id: "web-p-1", title: "Production Portfolio Project", desc: "Assemble a complete project to showcase to placements.", time: "30 hours", resources: ["GitHub Portfolios"], projects: ["Comprehensive Portfolio Project"] }
  ],
  interview: [
    { id: "web-v-1", title: "Technical Mock Preparation", desc: "Study common conceptual questions asked in hiring interviews.", time: "15 hours", resources: ["Tech Interview Handbook"], projects: ["Concept Revision Sheets"] }
  ],
  internship: [
    { id: "web-n-1", title: "Git Workflows & Team Standards", desc: "Review pull requests, Git branching, and agile issue workflows.", time: "10 hours", resources: ["Atlassian Git Guides"], projects: ["Open Source Contribution Prereqs"] }
  ]
};

// Add fallback configurations for other options
["Data Analyst", "Web Developer", "Product Manager", "Cybersecurity Analyst", "Other"].forEach(role => {
  if (!ROADMAPS_DB[role]) {
    ROADMAPS_DB[role] = WEB_ROADMAPS_DEFAULT;
  }
});


// ==========================================
// INTERVIEW QUESTION BANK
// ==========================================
const INTERVIEW_QUESTIONS = {
  "Machine Learning Engineer": [
    { type: "Technical", text: "Explain the Bias-Variance tradeoff and how L1/L2 regularization affects it.", keywords: ["bias", "variance", "regularization", "overfitting", "l1", "l2", "lasso", "ridge"], ideal: "Bias is error from erroneous assumptions. Variance is error from sensitivity to small fluctuations in training data. L1 (Lasso) adds absolute value penalty leading to sparse coefficients (feature selection). L2 (Ridge) adds squared value penalty shrinking weights, distributing them evenly, reducing variance." },
    { type: "Technical", text: "How does Singular Value Decomposition (SVD) work and where is it used in MLE?", keywords: ["svd", "matrix", "eigenvalues", "dimensions", "pca", "recommender", "latent"], ideal: "SVD decomposes a matrix A into U * Sigma * V^T. It extracts latent concepts, represents dimensions of highest variance, and is used for dimensionality reduction (PCA), latent semantic analysis in NLP, and Collaborative Filtering in Recommender Systems." },
    { type: "Behavioral", text: "Describe a project where you had to deal with extremely messy or missing data. How did you handle it?", keywords: ["imputation", "pandas", "null", "outlier", "clean", "drop", "median"], ideal: "I identified missing values using Pandas `isna()`. I evaluated if the data was Missing Completely at Random (MCAR) or Missing at Random (MAR). Depending on the percentage, I used median imputation for continuous vars, mode for categorical, or trained an iterative KNN Imputer. I documented outliers to prevent model bias." },
    { type: "Role-Specific", text: "Design a model evaluation pipeline for a highly imbalanced dataset (e.g., fraud detection).", keywords: ["imbalance", "precision", "recall", "f1", "auc", "smote", "confusion matrix", "stratified"], ideal: "Do not use Accuracy. Implement Stratified K-Fold cross-validation. Evaluate models using Precision-Recall Area Under Curve (PR-AUC), F1-Score, and Recall. Use sampling techniques like SMOTE or class weighting (e.g., class_weight='balanced' in Scikit-Learn) to balance gradient updates." }
  ],
  "AI Engineer": [
    { type: "Technical", text: "Explain the difference between Fine-Tuning and Retrieval-Augmented Generation (RAG). When would you use which?", keywords: ["rag", "fine-tuning", "weights", "hallucination", "knowledge", "external", "cost"], ideal: "RAG connects LLMs to external databases via vector embeddings (cheap, updates instantly, referenceable, prevents hallucinations). Fine-Tuning modifies LLM weights (expensive, teaches format/tone/style/domain grammar, but doesn't guarantee factual accuracy of new facts)." },
    { type: "Technical", text: "What is LoRA (Low-Rank Adaptation) and how does it optimize LLM training?", keywords: ["lora", "peft", "rank", "parameters", "weight", "adapter", "matrix"], ideal: "LoRA is a PEFT technique that freezes base LLM weights and injects trainable rank decomposition matrices (A and B) into attention layers. This reduces trainable parameters by 99%+, saving GPU memory while maintaining full performance." },
    { type: "Behavioral", text: "Tell me about a time you had to deal with an API rate limit or LLM latency bottleneck.", keywords: ["rate limit", "latency", "cache", "async", "batch", "queue", "exponential backoff"], ideal: "I implemented semantic caching using Redis to resolve latency for duplicate user queries. For APIs, I implemented asynchronous queries with `asyncio` and wrapped requests in exponential backoff retry blocks to prevent rate limit exceptions." }
  ],
  "Data Scientist": [
    { type: "Technical", text: "Explain how A/B testing works, including statistical power and Type I/II errors.", keywords: ["hypothesis", "p-value", "significance", "type i", "type ii", "power", "null hypothesis", "sample size"], ideal: "A/B testing evaluates if treatment B outperforms baseline A. Type I error (Alpha) is rejecting null hypothesis when it is true (false positive). Type II error (Beta) is failing to reject null hypothesis when it is false (false negative). Statistical Power (1 - Beta) is the probability of correctly detecting an effect." },
    { type: "Technical", text: "How does logistic regression output probabilities, and what is the log-odds ratio?", keywords: ["sigmoid", "odds", "probability", "logit", "exponential"], ideal: "Logistic regression fits a linear equation but outputs through the Sigmoid function: p = 1 / (1 + e^-z). The z-value represents the log-odds ratio, meaning a unit change in a feature increases the log-odds of the outcome by the feature's coefficient." }
  ],
  "Software Engineer": [
    { type: "Technical", text: "Explain the time and space complexity of DFS and BFS. When is one preferred over the other?", keywords: ["dfs", "bfs", "complexity", "stack", "queue", "vertex", "edge", "o(v+e)"], ideal: "Both have O(V + E) time complexity. BFS uses a Queue (space matches widest tree level, preferred for shortest path in unweighted graphs). DFS uses a Stack/recursion (space matches deepest path, preferred for finding cycles or topological sorts)." },
    { type: "Technical", text: "Explain the REST API principles and the difference between PUT and PATCH methods.", keywords: ["rest", "http", "put", "patch", "idempotent", "stateless", "payload"], ideal: "REST is stateless and resource-oriented. PUT replaces the entire resource representation (idempotent; multiple calls yield same state). PATCH performs partial updates (not necessarily idempotent; updates specific fields)." }
  ]
};

// Fallbacks for web roles not fully mapped to prevent crashes
const DEFAULT_INTERVIEW_QUESTIONS = [
  { type: "Technical", text: "Explain how Git works under the hood. What is the difference between merging and rebasing?", keywords: ["git", "merge", "rebase", "commit", "history", "conflict"], ideal: "Git is a DAG of commits. Merging creates a new merge commit combining branches. Rebasing rewrites project history by moving commits to the tip of the target branch, creating a clean linear timeline." },
  { type: "Behavioral", text: "Tell me about a time you encountered a merge conflict or version control error. How did you resolve it?", keywords: ["conflict", "git", "diff", "branch", "pull request"], ideal: "I ran `git status` to find files with conflict markers (`<<<<<<<`). I analyzed changes, edited files to keep valid modifications, ran `git add`, and committed the resolve." }
];

Object.keys(ROADMAPS_DB).forEach(role => {
  if (!INTERVIEW_QUESTIONS[role]) {
    INTERVIEW_QUESTIONS[role] = DEFAULT_INTERVIEW_QUESTIONS;
  }
});


// ==========================================
// RESUME KEYWORD DICTIONARIES (For AI Audit)
// ==========================================
const RESUME_DICT = {
  "Machine Learning Engineer": {
    keywords: ["python", "numpy", "pandas", "pytorch", "tensorflow", "scikit-learn", "keras", "docker", "fastapi", "sql", "git", "linear algebra", "calculus", "machine learning", "deep learning", "neural network", "regression", "xgboost", "classification", "random forest", "svd", "pca", "mlops", "deployment"],
    projects: "Add PyTorch custom CNN/RNN pipeline projects, fastapi inference wrappers, docker containers, and experiment tracking logs (MLflow).",
    certs: "AWS Certified Machine Learning Specialty, Andrew Ng Deep Learning Specialization."
  },
  "AI Engineer": {
    keywords: ["python", "api", "llm", "gpt", "rag", "langchain", "llamaindex", "chromadb", "pinecone", "prompt engineering", "agent", "lora", "fine-tuning", "quantization", "gguf", "transformers", "hugging face", "fastapi", "docker", "embeddings"],
    projects: "Build a custom Retrieval-Augmented Generation (RAG) assistant querying document vectors, or autonomous tool-calling Agents using LangGraph.",
    certs: "Generative AI with Large Language Models (Coursera), Hugging Face NLP Credential."
  },
  "Data Scientist": {
    keywords: ["r", "python", "sql", "pandas", "numpy", "statistics", "hypothesis testing", "ab testing", "regression", "forecasting", "clustering", "k-means", "tableau", "plotly", "probability", "power analysis", "p-value", "excel", "data analysis"],
    projects: "Implement marketing campaign conversion A/B tests with sample power formulas, exploratory analysis reports in Jupyter, and clustering segmentations.",
    certs: "Google Advanced Data Analytics, Microsoft Certified: Power BI Data Analyst."
  },
  "Software Engineer": {
    keywords: ["java", "c++", "python", "javascript", "oop", "data structures", "algorithms", "rest api", "postgresql", "sql", "redis", "docker", "git", "system design", "microservices", "concurrency", "caching", "linux", "testing", "design patterns"],
    projects: "Add high-performance asynchronous REST API projects, custom databases, redis caches, distributed systems layouts, or fully unit-tested software engines.",
    certs: "AWS Certified Developer - Associate, Oracle Certified Professional Java SE."
  }
};

const DEFAULT_RESUME_DICT = {
  keywords: ["python", "git", "github", "sql", "programming", "collaboration", "linux", "software", "api", "database", "problem solving", "agile", "development", "data"],
  projects: "Include end-to-end deployed web applications, collaborative Git projects, clean API routes, and database normalization setups.",
  certs: "Certified Scrum Developer (CSD), CompTIA Project+."
};

Object.keys(ROADMAPS_DB).forEach(role => {
  if (!RESUME_DICT[role]) {
    RESUME_DICT[role] = DEFAULT_RESUME_DICT;
  }
});


// ==========================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
let state = {
  profile: null, // { career, level, hours, style }
  checklist: {}, // { id: Boolean } (Roadmap completed milestones)
  planner: {
    dailyCompleted: 0,
    dailyCompletedDates: [], // Strings of dates completed
    extraSessionsCount: 0
  },
  resumeLogs: [], // History of resume reports
  interviewLogs: [], // History of mock assessments
  stats: {
    coursesStartedCount: 1,
    skillsMasteredCount: 0,
    projectsLoggedCount: 0,
    auditsRunCount: 0
  },
  streak: 0,
  streakLastActive: "" // String of date
};

const playChime = (type) => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'start') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12); // A5
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.16); // G5
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    }
  } catch (e) {
    console.warn("Audio Context blocked:", e);
  }
};

const loadState = () => {
  const localData = localStorage.getItem('career_compass_state');
  if (localData) {
    try {
      state = JSON.parse(localData);
    } catch (e) {
      console.error("Could not parse saved state, resetting.");
    }
  }
  // Initialize default structural fields
  if (!state.checklist) state.checklist = {};
  if (!state.planner) state.planner = { dailyCompleted: 0, dailyCompletedDates: [], extraSessionsCount: 0 };
  if (!state.planner.dailyCompletedDates) state.planner.dailyCompletedDates = [];
  if (!state.resumeLogs) state.resumeLogs = [];
  if (!state.interviewLogs) state.interviewLogs = [];
  if (!state.stats) state.stats = { coursesStartedCount: 1, skillsMasteredCount: 0, projectsLoggedCount: 0, auditsRunCount: 0 };
  if (!state.streak) state.streak = 0;
  
  verifyStreak();
};

const saveState = () => {
  localStorage.setItem('career_compass_state', JSON.stringify(state));
  updateUI();
};

const verifyStreak = () => {
  if (state.streak === 0) return;
  
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  
  if (state.streakLastActive !== today && state.streakLastActive !== yesterday) {
    // Streak expired
    state.streak = 0;
  }
};


// ==========================================
// CONVERSATIONAL ONBOARDING WIZARD
// ==========================================
const initOnboardingWizard = () => {
  const overlay = document.getElementById('onboarding-screen');
  const appLayout = document.getElementById('app-layout');
  const nextBtns = document.querySelectorAll('.btn-next-step');
  const prevBtns = document.querySelectorAll('.btn-prev-step');
  const steps = document.querySelectorAll('.wizard-step');
  const indicators = document.querySelectorAll('.step-indicator');
  
  // Selection chips
  const careerChips = document.querySelectorAll('.career-chip');
  const levelChips = document.querySelectorAll('.level-chip');
  const hoursChips = document.querySelectorAll('.hours-chip');
  const styleChips = document.querySelectorAll('.style-chip');

  const nameInput = document.getElementById('input-onboarding-name');
  const startOnboardingBtn = document.getElementById('btn-start-onboarding');

  let wizardData = {
    name: "",
    career: "",
    level: "",
    hours: "",
    style: ""
  };

  const showStep = (stepNumber) => {
    steps.forEach((step, idx) => {
      if (idx + 1 === stepNumber) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    indicators.forEach((ind, idx) => {
      if (idx + 1 <= stepNumber) {
        ind.classList.add('active');
      } else {
        ind.classList.remove('active');
      }
    });
  };

  // Name validation
  nameInput.addEventListener('input', () => {
    startOnboardingBtn.disabled = nameInput.value.trim().length === 0;
  });

  startOnboardingBtn.addEventListener('click', () => {
    wizardData.name = nameInput.value.trim();
    showStep(2);
    playChime('start');
  });

  // Setup click listeners for next/back
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = parseInt(btn.getAttribute('data-current'));
      // Step 1 next btn is handled by startOnboardingBtn click
      if (current > 1) {
        showStep(current + 1);
        playChime('start');
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = parseInt(btn.getAttribute('data-current'));
      showStep(current - 1);
      playChime('start');
    });
  });

  // Setup selection mappings
  const setupChips = (chipsList, fieldName, nextBtnId) => {
    chipsList.forEach(chip => {
      chip.addEventListener('click', () => {
        chipsList.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        wizardData[fieldName] = chip.getAttribute('data-value');
        document.getElementById(nextBtnId).disabled = false;
        playChime('start');
      });
    });
  };

  setupChips(careerChips, 'career', 'btn-next-career');
  setupChips(levelChips, 'level', 'btn-next-level');
  setupChips(hoursChips, 'hours', 'btn-next-hours');
  setupChips(styleChips, 'style', 'btn-finish-onboarding');

  // Onboarding Complete listener
  document.getElementById('btn-finish-onboarding').addEventListener('click', () => {
    state.profile = {
      name: wizardData.name,
      career: wizardData.career,
      level: wizardData.level,
      hours: wizardData.hours,
      style: wizardData.style
    };
    
    // Set some sample completed checklists to simulate initial progress if level is Intermediate
    if (state.profile.level === 'Intermediate') {
      const track = state.profile.career;
      const initialNodes = ROADMAPS_DB[track] ? ROADMAPS_DB[track].foundations : [];
      if (initialNodes.length > 0) {
        state.checklist[initialNodes[0].id] = true;
      }
    }

    state.stats.coursesStartedCount = 1;
    state.stats.skillsMasteredCount = Object.keys(state.checklist).length;
    state.streak = 1;
    state.streakLastActive = new Date().toDateString();

    playChime('success');
    overlay.classList.remove('active');
    appLayout.classList.add('active');

    // Trigger full roadmap population & UI rendering
    initRoadmapView();
    initStudyPlanner();
    initResourceHub();
    saveState();
  });

  // Reset Profile Trigger
  document.getElementById('btn-re-onboard').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset your career profile? All roadmap checkboxes and custom planner items will be cleared.")) {
      localStorage.removeItem('career_compass_state');
      state = {
        profile: null,
        checklist: {},
        planner: { dailyCompleted: 0, dailyCompletedDates: [], extraSessionsCount: 0 },
        resumeLogs: [],
        interviewLogs: [],
        stats: { coursesStartedCount: 1, skillsMasteredCount: 0, projectsLoggedCount: 0, auditsRunCount: 0 },
        streak: 0,
        streakLastActive: ""
      };
      
      // Reset disabled states in Onboarding HTML
      document.getElementById('btn-start-onboarding').disabled = true;
      document.getElementById('btn-next-career').disabled = true;
      document.getElementById('btn-next-level').disabled = true;
      document.getElementById('btn-next-hours').disabled = true;
      document.getElementById('btn-finish-onboarding').disabled = true;
      document.getElementById('input-onboarding-name').value = '';
      document.querySelectorAll('.selection-chip').forEach(c => c.classList.remove('active'));

      appLayout.classList.remove('active');
      overlay.classList.add('active');
      showStep(1);
    }
  });

  // Check if onboarding needs to trigger initially
  if (!state.profile) {
    appLayout.classList.remove('active');
    overlay.classList.add('active');
    showStep(1);
  } else {
    overlay.classList.remove('active');
    appLayout.classList.add('active');
    initRoadmapView();
    initStudyPlanner();
    initResourceHub();
    updateUI();
  }
};


// ==========================================
// NAVIGATION TAB CONTROLLER
// ==========================================
const initNavigation = () => {
  const navItems = document.querySelectorAll('.nav-item');
  const viewTabs = document.querySelectorAll('.view-tab');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      viewTabs.forEach(tab => {
        if (tab.id === `view-${targetTab}`) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
      playChime('start');
    });
  });
};


// ==========================================
// DYNAMIC ROADMAP RESOURCE LINKS MAPPINGS
// ==========================================
const RESOURCE_LINKS = {
  "3Blue1Brown Linear Algebra": "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
  "Math for ML Textbook": "https://mml-book.github.io/",
  "Python DS Handbook": "https://jakevdp.github.io/PythonDataScienceHandbook/",
  "Kaggle Python Course": "https://www.kaggle.com/learn/python",
  "StatQuest Probability Basics": "https://statquest.org/video-index/",
  "OpenIntro Statistics": "https://www.openintro.org/book/os/",
  "Andrew Ng ML Specialization": "https://www.coursera.org/specializations/machine-learning-introduction",
  "Scikit-Learn Docs": "https://scikit-learn.org/stable/",
  "Deep Learning Book (Goodfellow)": "https://www.deeplearningbook.org/",
  "Fast.ai Practical DL": "https://course.fast.ai/",
  "Mode Analytics SQL tutorial": "https://mode.com/sql-tutorial/",
  "LeetCode SQL problems": "https://leetcode.com/problemset/database/",
  "Made With ML (Goku Mohandas)": "https://madewithml.com/",
  "FastAPI Official Guide": "https://fastapi.tiangolo.com/",
  "Hugging Face NLP Course": "https://huggingface.co/learn/nlp-course",
  "Stanford CS224N lectures": "https://web.stanford.edu/class/cs224n/",
  "MLflow Docs": "https://mlflow.org/docs/latest/index.html",
  "Docker Docs": "https://docs.docker.com/",
  "Designing Machine Learning Systems (Chip Huyen)": "https://huyenchip.com/books/",
  "System Design Primer": "https://github.com/donnemartin/system-design-primer",
  "Git Pro Book": "https://git-scm.com/book/en/v2",
  "GitHub Actions docs": "https://docs.github.com/en/actions",
  "Python Documentation": "https://docs.python.org/3/",
  "RealPython API Guides": "https://realpython.com/api-integration-in-python/",
  "Andrej Karpathy 'Intro to LLMs'": "https://www.youtube.com/watch?v=zjkBMFhNj_g",
  "Hugging Face transformers docs": "https://huggingface.co/docs/transformers/index",
  "Pinecone Learn Center": "https://www.pinecone.io/learn/",
  "Cohere LLM University": "https://cohere.com/llmu",
  "LlamaIndex Docs": "https://docs.llamaindex.ai/",
  "LangChain Academy": "https://academy.langchain.com/",
  "LangGraph Tutorials": "https://langchain-ai.github.io/langgraph/",
  "DeepLearning.ai Agent courses": "https://www.deeplearning.ai/short-courses/",
  "Hugging Face PEFT documentation": "https://huggingface.co/docs/peft/index",
  "Axolotl Guides": "https://github.com/OpenAccess-AI-Collective/axolotl",
  "OWASP Top 10 LLM": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
  "Ragas Documentation": "https://docs.ragas.io/",
  "AWS ECS Guides": "https://docs.aws.amazon.com/ecs/",
  "Docker Hub": "https://hub.docker.com/",
  "StatQuest Statistics Course": "https://statquest.org/",
  "Khan Academy Statistics": "https://www.khanacademy.org/math/statistics-probability",
  "Pandas Docs": "https://pandas.pydata.org/docs/",
  "Seaborn Gallery": "https://seaborn.pydata.org/examples/index.html",
  "Forecasting: Principles & Practice": "https://otexts.com/fpp3/",
  "SQL Zoo": "https://sqlzoo.net/",
  "A/B Testing (Kohavi)": "https://www.amazon.com/Trustworthy-Online-Controlled-Experiments-Practical/dp/110842477X",
  "Evan Miller's A/B Tools": "https://www.evanmiller.org/ab-testing/",
  "ESL (Hastie/Tibshirani)": "https://hastie.su.domains/ElemStatLearn/",
  "Plotly Docs": "https://plotly.com/python/",
  "Tableau Tutorials": "https://www.tableau.com/learn/training/20223",
  "Cracking the PM Interview": "https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818",
  "Product Case Studies": "https://productcases.com/",
  "Jupyter Docs": "https://jupyter.org/documentation",
  "Voila docs": "https://voila.readthedocs.io/",
  "Head First Design Patterns": "https://www.oreilly.com/library/view/head-first-design/9781492077992/",
  "Clean Code Book": "https://www.oreilly.com/library/view/clean-code-a/9780136083238/",
  "Neetcode 150 list": "https://neetcode.io/practice",
  "Elements of Programming Interviews": "https://elementsofprogramminginterviews.com/",
  "CLRS Introduction to Algorithms": "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
  "LeetCode Roadmap": "https://neetcode.io/roadmap",
  "MDN HTTP Guides": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
  "System Design Interview (Alex Xu)": "https://bytebytego.com/",
  "ByteByteGo": "https://bytebytego.com/",
  "Java Concurrency in Practice": "https://www.oreilly.com/library/view/java-concurrency-in/0321349601/",
  "Python Threading Guides": "https://realpython.com/intro-to-python-threading/",
  "Redis Docs": "https://redis.io/documentation",
  "FreeCodeCamp Basics": "https://www.freecodecamp.org/",
  "MDN Docs": "https://developer.mozilla.org/",
  "Roadmap.sh Tutorials": "https://roadmap.sh/",
  "W3Schools Guides": "https://www.w3schools.com/",
  "Tech Interview Handbook": "https://www.techinterviewhandbook.org/",
  "Atlassian Git Guides": "https://www.atlassian.com/git"
};

const getResourceURL = (name) => {
  const cleanName = name.replace(/['"“”]/g, "").trim();
  if (RESOURCE_LINKS[cleanName]) {
    return RESOURCE_LINKS[cleanName];
  }
  for (const key of Object.keys(RESOURCE_LINKS)) {
    if (cleanName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cleanName.toLowerCase())) {
      return RESOURCE_LINKS[key];
    }
  }
  return `https://www.google.com/search?q=${encodeURIComponent(name)}`;
};

// ==========================================
// DYNAMIC ROADMAP GENERATOR
// ==========================================
const initRoadmapView = () => {
  const track = state.profile ? state.profile.career : "Machine Learning Engineer";
  const roadmapData = ROADMAPS_DB[track] || WEB_ROADMAPS_DEFAULT;
  const container = document.getElementById('roadmap-milestones-container');
  
  // Phase filter buttons
  const filterBtns = document.querySelectorAll('.roadmap-stage-toggle button[data-roadmap-phase]');
  let activeFilter = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-roadmap-phase');
      renderRoadmapMilestones();
    });
  });

  const renderRoadmapMilestones = () => {
    container.innerHTML = '';
    
    const phases = [
      { key: "foundations", title: "Phase 1: Technical Foundations" },
      { key: "intermediate", title: "Phase 2: Intermediate Core Skills" },
      { key: "advanced", title: "Phase 3: Advanced Specializations" },
      { key: "projects", title: "Phase 4: Capstone Portfolio Projects" },
      { key: "interview", title: "Phase 5: Placement & Interview Mock Prep" },
      { key: "internship", title: "Phase 6: Professional Internship Readiness" }
    ];

    phases.forEach(phase => {
      if (activeFilter !== 'all' && activeFilter !== phase.key) {
        if (activeFilter === 'foundations' && phase.key !== 'foundations') return;
        if (activeFilter === 'intermediate' && phase.key !== 'intermediate') return;
        if (activeFilter === 'advanced' && phase.key !== 'advanced' && phase.key !== 'projects' && phase.key !== 'interview' && phase.key !== 'internship') return;
      }

      const nodes = roadmapData[phase.key] || [];
      if (nodes.length === 0) return;

      const phaseHeader = document.createElement('h3');
      phaseHeader.textContent = phase.title;
      phaseHeader.style.fontFamily = "var(--font-heading)";
      phaseHeader.style.fontSize = "1.15rem";
      phaseHeader.style.color = "var(--text-primary)";
      phaseHeader.style.marginTop = "1rem";
      phaseHeader.style.marginBottom = "1rem";
      container.appendChild(phaseHeader);

      nodes.forEach(node => {
        const divNode = document.createElement('div');
        
        // Evaluate completion status
        const isCompleted = state.checklist[node.id] === true;
        let statusClass = "locked";
        if (isCompleted) {
          statusClass = "completed";
        } else {
          statusClass = "in-progress";
        }

        divNode.className = `roadmap-milestone-node ${statusClass}`;
        
        let projectsHTML = '';
        if (node.projects && node.projects.length > 0) {
          node.projects.forEach(p => {
            projectsHTML += `<li>📁 ${p}</li>`;
          });
        }

        let resourcesHTML = '';
        if (node.resources && node.resources.length > 0) {
          node.resources.forEach(r => {
            resourcesHTML += `<li>🔗 <a href="${getResourceURL(r)}" target="_blank" rel="noopener noreferrer">${r}</a></li>`;
          });
        }

        divNode.innerHTML = `
          <span class="node-indicator"></span>
          <div class="node-content-panel glass-panel">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <h3>
                  <label class="check-item">
                    <input type="checkbox" class="roadmap-checkbox" data-id="${node.id}" ${isCompleted ? 'checked' : ''}>
                    <span class="custom-checkbox"></span>
                    <span>${node.title}</span>
                  </label>
                </h3>
                <p class="subtitle mt-1" style="font-size: 0.85rem; line-height: 1.4; color: var(--text-secondary);">${node.desc}</p>
              </div>
              <span class="badge ${isCompleted ? 'badge-green' : 'badge-amber'}">${node.time}</span>
            </div>

            <div class="roadmap-node-details">
              <div>
                <span class="node-section-title">Recommended Resources</span>
                <ul class="node-resources-list">
                  ${resourcesHTML || '<li>Documentation / Core Manuals</li>'}
                </ul>
              </div>
              <div>
                <span class="node-section-title">Portfolio Projects</span>
                <ul class="node-projects-list">
                  ${projectsHTML || '<li>Implementation assignment</li>'}
                </ul>
              </div>
            </div>
          </div>
        `;

        // Bind checkbox trigger
        const checkbox = divNode.querySelector('.roadmap-checkbox');
        checkbox.addEventListener('change', (e) => {
          state.checklist[node.id] = e.target.checked;
          
          // Audio chime based on checking/unchecking
          if (e.target.checked) playChime('success');
          else playChime('start');

          state.stats.skillsMasteredCount = Object.keys(state.checklist).filter(k => state.checklist[k]).length;
          
          saveState();
          renderRoadmapMilestones();
        });

        container.appendChild(divNode);
      });
    });
  };

  renderRoadmapMilestones();
};


// ==========================================
// STUDY PLANNER (Actionable breakdowns)
// ==========================================
const initStudyPlanner = () => {
  const planBtns = document.querySelectorAll('.roadmap-stage-toggle button[data-plan-view]');
  const viewTitle = document.getElementById('planner-view-title');
  const durationLabel = document.getElementById('planner-time-required');
  const goalTitle = document.getElementById('planner-active-goal');
  const tasksList = document.getElementById('planner-active-tasks');
  const completeBtn = document.getElementById('btn-planner-complete-day');

  let currentView = 'daily';

  planBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      planBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.getAttribute('data-plan-view');
      renderPlannerData();
    });
  });

  const getWeeklyHours = () => {
    if (!state.profile) return 10;
    const hoursStr = state.profile.hours;
    if (hoursStr === '1-5') return 3;
    if (hoursStr === '5-10') return 8;
    if (hoursStr === '10-15') return 12;
    if (hoursStr === '15-20') return 18;
    return 25;
  };

  const renderPlannerData = () => {
    tasksList.innerHTML = '';
    const track = state.profile ? state.profile.career : "Machine Learning Engineer";
    const weeklyHours = getWeeklyHours();
    const style = state.profile ? state.profile.style : "Mixed";
    
    if (currentView === 'daily') {
      viewTitle.textContent = "Today's Focus Plan";
      const dailyMins = Math.round((weeklyHours / 7) * 60);
      durationLabel.textContent = `${dailyMins} Mins`;

      // Formulate target goal based on career
      if (track.includes("Machine Learning") || track.includes("AI")) {
        goalTitle.textContent = "Data Wrangling & Vector Operations in NumPy";
        tasksList.innerHTML = `
          <li>Set up Jupyter notebook virtual environment</li>
          <li>Review array broadcasting and dot product formulas</li>
          <li>Implement 1 custom sigmoid vectorization in Python</li>
        `;
      } else if (track.includes("Software")) {
        goalTitle.textContent = "Algorithm Recursion & Call Stacks";
        tasksList.innerHTML = `
          <li>Trace recursion stack of Fibonacci and Factorial</li>
          <li>Implement helper method to search binary trees</li>
          <li>Solve 1 DFS recursion puzzle on LeetCode</li>
        `;
      } else {
        goalTitle.textContent = "Introductory Syntax & Local Layout Config";
        tasksList.innerHTML = `
          <li>Open your IDE and set up folder repository structure</li>
          <li>Write basic loops and dictionary variable queries</li>
          <li>Practice 5 short syntax syntax problems</li>
        `;
      }

      // Check if already completed today
      const todayString = new Date().toDateString();
      if (state.planner.dailyCompletedDates.includes(todayString)) {
        completeBtn.disabled = true;
        completeBtn.textContent = "Today's Target Completed ✓";
      } else {
        completeBtn.disabled = false;
        completeBtn.textContent = "Complete Daily Target";
      }

    } else if (currentView === 'weekly') {
      viewTitle.textContent = "Weekly Focus Blueprint";
      durationLabel.textContent = `${weeklyHours} Hours`;
      
      goalTitle.textContent = "Core Python & Data Science Foundations";
      tasksList.innerHTML = `
        <li>Understand core OOP design patterns and clean classes</li>
        <li>Master SVD, matrices, and linear algebra probability</li>
        <li>Build 1 local vectorized processing pipeline</li>
        <li>Run mock assessments on variables, arrays, and SQL joins</li>
      `;
      completeBtn.disabled = true;
      completeBtn.textContent = "Completed incrementally via Daily targets";

    } else {
      viewTitle.textContent = "Monthly Strategy Path";
      durationLabel.textContent = `${weeklyHours * 4} Hours`;
      
      goalTitle.textContent = "Foundational Mastery & First Portfolio Project";
      tasksList.innerHTML = `
        <li>Master all math foundations and Python data structures</li>
        <li>Complete 25 Easy and 10 Medium SQL database problems</li>
        <li>Draft and publish your ML/AI Portfolio Git foundation project</li>
        <li>Complete 1 full ATS audit on your resume (Target Score >= 80)</li>
      `;
      completeBtn.disabled = true;
      completeBtn.textContent = "Tracked via Overall Career Readiness metric";
    }
  };

  completeBtn.addEventListener('click', () => {
    const todayString = new Date().toDateString();
    if (!state.planner.dailyCompletedDates.includes(todayString)) {
      state.planner.dailyCompletedDates.push(todayString);
      state.planner.dailyCompleted++;
      
      // Update streak
      const yesterdayString = new Date(Date.now() - 86400000).toDateString();
      if (state.streakLastActive === yesterdayString || state.streak === 0) {
        state.streak++;
      } else if (state.streakLastActive !== todayString) {
        state.streak = 1;
      }
      state.streakLastActive = todayString;

      playChime('success');
      saveState();
      renderPlannerData();
    }
  });

  renderPlannerData();
};


// ==========================================
// AI RESUME REVIEW (ATS Keywords Matcher)
// ==========================================
const initResumeReview = () => {
  const form = document.getElementById('resume-form');
  const emptyView = document.getElementById('resume-empty-view');
  const reportView = document.getElementById('resume-report-view');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = document.getElementById('input-resume-text').value.trim();
    const track = state.profile ? state.profile.career : "Machine Learning Engineer";
    
    const dict = RESUME_DICT[track] || DEFAULT_RESUME_DICT;
    const lowerText = text.toLowerCase();

    // Check matching keywords
    let matched = [];
    let missing = [];
    dict.keywords.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        matched.push(keyword);
      } else {
        missing.push(keyword);
      }
    });

    // Score calculations
    // Base score = 40. +3 points per matched keyword (Max 45). Formatting score = 15.
    const keywordScore = Math.min(45, matched.length * 3.5);
    const formattingScore = lowerText.includes("education") && lowerText.includes("experience") && lowerText.includes("project") ? 15 : 5;
    const lengthScore = text.length > 250 ? 15 : 5;
    const totalScore = Math.round(25 + keywordScore + formattingScore + lengthScore);

    // Dynamic advice outputs
    let missingSkillsText = missing.slice(0, 5).join(', ');
    if (missing.length === 0) missingSkillsText = "None! Your skill representation matches the target job description.";

    let weakAreasText = "";
    if (totalScore < 60) {
      weakAreasText = "Extremely sparse content. Expand on descriptions, list metrics (e.g. 'improved speed by 15%'), and add sections for projects and tools.";
    } else if (totalScore < 80) {
      weakAreasText = "Lack of metrics. Add quantifiable outcomes. Detail what model framework you used (e.g. PyTorch instead of just 'Deep Learning').";
    } else {
      weakAreasText = "Excellent formatting. Consider updating active Git deployment links for portfolio verification.";
    }

    // Populate Report UI
    document.getElementById('resume-score-num').textContent = totalScore;
    document.getElementById('resume-missing-skills').textContent = missingSkillsText;
    document.getElementById('resume-weak-areas').textContent = weakAreasText;
    document.getElementById('resume-suggested-projects').textContent = dict.projects;
    document.getElementById('resume-suggested-certs').textContent = dict.certs;

    // Badges readiness evaluation
    const readinessBadge = document.getElementById('resume-readiness-badge');
    if (totalScore >= 80) {
      readinessBadge.textContent = "Placements Ready";
      readinessBadge.className = "badge badge-green";
    } else if (totalScore >= 60) {
      readinessBadge.textContent = "Intern Ready";
      readinessBadge.className = "badge badge-amber";
    } else {
      readinessBadge.textContent = "Drafting Mode";
      readinessBadge.className = "badge badge-red";
    }

    // Store report in log history
    const logItem = {
      date: new Date().toISOString(),
      score: totalScore,
      skills: matched.length
    };
    state.resumeLogs.unshift(logItem);
    state.stats.auditsRunCount = state.resumeLogs.length + state.interviewLogs.length;

    saveState();
    playChime('success');
    emptyView.style.display = 'none';
    reportView.style.display = 'block';
  });
};


// ==========================================
// MOCK INTERVIEW TRAINER (Interactive Q&A)
// ==========================================
const initInterviewPrep = () => {
  const generateBtn = document.getElementById('btn-generate-question');
  const roleSelect = document.getElementById('interview-role-select');
  const questionBox = document.getElementById('interview-active-question-box');
  const qTypeText = document.getElementById('interview-q-type');
  const qText = document.getElementById('interview-question-text');
  const form = document.getElementById('interview-answer-form');
  const answerInput = document.getElementById('input-interview-answer');
  const triggerRow = document.getElementById('interview-trigger-row');
  
  const feedbackCard = document.getElementById('interview-feedback-card');
  const feedbackEmpty = document.getElementById('interview-feedback-empty');
  const feedbackReport = document.getElementById('interview-feedback-report');

  let activeQuestion = null;

  // Sync role select with profile
  if (state.profile) {
    roleSelect.value = state.profile.career;
  }

  generateBtn.addEventListener('click', () => {
    const role = roleSelect.value;
    const questions = INTERVIEW_QUESTIONS[role] || DEFAULT_INTERVIEW_QUESTIONS;
    
    // Choose random question
    const idx = Math.floor(Math.random() * questions.length);
    activeQuestion = questions[idx];

    qTypeText.textContent = activeQuestion.type;
    qText.textContent = activeQuestion.text;
    
    // Set colors
    if (activeQuestion.type === 'Technical') {
      qTypeText.className = "badge badge-green";
    } else if (activeQuestion.type === 'Behavioral') {
      qTypeText.className = "badge badge-amber";
    } else {
      qTypeText.className = "badge";
    }

    // Show answer forms
    form.style.display = 'flex';
    answerInput.value = '';
    triggerRow.style.display = 'none';
    feedbackReport.style.display = 'none';
    feedbackEmpty.style.display = 'block';
    
    playChime('start');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!activeQuestion) return;

    const answer = answerInput.value.trim();
    const lowerAnswer = answer.toLowerCase();

    // Grade answer based on length and keywords matching
    let matchedKeywords = [];
    activeQuestion.keywords.forEach(keyword => {
      if (lowerAnswer.includes(keyword)) {
        matchedKeywords.push(keyword);
      }
    });

    const keywordPercentage = matchedKeywords.length / activeQuestion.keywords.length;
    let score = Math.round(4 + (keywordPercentage * 5));
    if (answer.length > 200) score = Math.min(10, score + 1);
    
    // Gaps and improvements text
    let evaluation = "";
    let improvements = "";

    if (score >= 8) {
      evaluation = "Excellent conceptual depth. You hit the key core terminologies and contextual definitions.";
      improvements = "To make it perfect, discuss a direct deployment trade-off or complex failure scenario (e.g. latency constraints).";
    } else if (score >= 5) {
      evaluation = "Good base structure, but missing vital conceptual keywords.";
      improvements = `Expand on how this works under the hood. Specifically, reference: ${activeQuestion.keywords.slice(0, 3).join(', ')}.`;
    } else {
      evaluation = "Incomplete response or insufficient details.";
      improvements = `Include real-world examples. Study structural elements such as: ${activeQuestion.keywords.join(', ')}.`;
    }

    // Update Report UI
    document.getElementById('interview-score-val').textContent = `${score}/10`;
    document.getElementById('interview-evaluation').textContent = evaluation;
    document.getElementById('interview-improvements').textContent = improvements;
    document.getElementById('interview-ideal-answer').textContent = activeQuestion.ideal;

    const scoreBadge = document.getElementById('interview-score-badge');
    scoreBadge.textContent = score >= 8 ? "Exceptional" : score >= 5 ? "Average" : "Needs Review";
    scoreBadge.className = `badge ${score >= 8 ? 'badge-green' : score >= 5 ? 'badge-amber' : 'badge-red'}`;

    // Logs history
    const logItem = {
      date: new Date().toISOString(),
      question: activeQuestion.text,
      score: score
    };
    state.interviewLogs.unshift(logItem);
    state.stats.auditsRunCount = state.resumeLogs.length + state.interviewLogs.length;

    saveState();
    playChime('success');

    // UI transitions
    form.style.display = 'none';
    triggerRow.style.display = 'flex';
    generateBtn.textContent = "Generate Next Question";
    
    feedbackEmpty.style.display = 'none';
    feedbackReport.style.display = 'block';
  });
};


// ==========================================
// PROGRESS TRACKER (Badges & Rings)
// ==========================================
const updateTrackerUI = () => {
  const track = state.profile ? state.profile.career : "Machine Learning Engineer";
  const roadmapData = ROADMAPS_DB[track] || WEB_ROADMAPS_DEFAULT;

  // Calculate readiness percentage
  let totalNodes = 0;
  let checkedNodes = 0;

  Object.keys(roadmapData).forEach(key => {
    roadmapData[key].forEach(node => {
      totalNodes++;
      if (state.checklist[node.id] === true) {
        checkedNodes++;
      }
    });
  });

  const percent = totalNodes > 0 ? Math.round((checkedNodes / totalNodes) * 100) : 0;

  // Update overall values
  document.getElementById('dash-readiness-percent').textContent = `${percent}%`;
  document.getElementById('dash-readiness-progress-bar').style.width = `${percent}%`;

  // Estimate Job ready months
  let months = "6 Months";
  if (percent >= 80) months = "Job Ready";
  else if (percent >= 60) months = "1 Month";
  else if (percent >= 40) months = "3 Months";
  document.getElementById('dash-job-ready-est').textContent = months;

  // Sync view progress tracker tab
  document.getElementById('tracker-courses-count').textContent = state.stats.coursesStartedCount;
  document.getElementById('tracker-skills-count').textContent = checkedNodes;
  document.getElementById('tracker-projects-count').textContent = state.stats.projectsLoggedCount;
  document.getElementById('tracker-interviews-count').textContent = state.stats.auditsRunCount;
  document.getElementById('tracker-ring-val').textContent = `${percent}%`;

  // SVG ring update
  const circle = document.getElementById('tracker-ring');
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const percentDone = percent / 100;
    const strokeOffset = circumference * (1 - percentDone);
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = strokeOffset;
  }

  // Evaluate Achievement Badges (Unlock states)
  const evaluateBadge = (badgeId, isUnlocked) => {
    const badgeCard = document.getElementById(badgeId);
    if (badgeCard) {
      if (isUnlocked) {
        badgeCard.className = "badge-item-card unlocked";
      } else {
        badgeCard.className = "badge-item-card locked";
      }
    }
  };

  // 1. Python Master: completed linear algebra + python foundations
  const hasBaseSkills = state.checklist["mle-f-2"] === true || state.checklist["swe-f-2"] === true || checkedNodes >= 2;
  evaluateBadge("badge-python", hasBaseSkills);

  // 2. Project Completed: completed 1 project milestone
  const hasCompletedProject = state.checklist["mle-p-1"] === true || state.checklist["swe-p-1"] === true || state.checklist["aie-p-1"] === true || state.stats.projectsLoggedCount > 0;
  evaluateBadge("badge-project", hasCompletedProject);

  // 3. Resume Ready: Audit run with score >= 80
  const isResumeReady = state.resumeLogs.some(log => log.score >= 80);
  evaluateBadge("badge-resume", isResumeReady);

  // 4. Interview Ready: Assessment score >= 8
  const isInterviewReady = state.interviewLogs.some(log => log.score >= 8);
  evaluateBadge("badge-interview", isInterviewReady);
};


// ==========================================
// EMPATHETIC ACCOUNTABILITY COACH
// ==========================================
const initAccountabilityCoach = () => {
  const streakNum = document.getElementById('coach-streak-num');
  const textBubble = document.getElementById('coach-encouragement-text');
  const missBtn = document.getElementById('btn-coach-simulate-miss');
  const workBtn = document.getElementById('btn-coach-simulate-work');

  const getRecoveryPitches = () => {
    const name = state.profile ? state.profile.name : "Protégé";
    return [
      `It's completely okay to miss a day, ${name}. Consistency is built incrementally. Let's rebuild your momentum with a single 5-minute task today.`,
      `Overthinking where to start can cause friction, ${name}. Let's ignore the big picture for a moment and focus on writing down one function declaration.`,
      `Sustainable progress beats brief intensity. Do not feel guilty about yesterday, ${name}. Solve just 1 simple problem now to restart your streak.`,
      `Your streak reset, ${name}, but your skills didn't. You still retain everything you learned. Let's open our editor and read one code comments file.`
    ];
  };

  const getWorkPitches = () => {
    const name = state.profile ? state.profile.name : "Protégé";
    return [
      `Fantastic consistency, ${name}! You've logged your daily session. Let's keep this momentum steady.`,
      `Consistency > Intensity, ${name}. By coding daily, you are building subconscious muscle memory. Keep it up!`,
      `Great work today, ${name}. You are now closer to being placement ready. Take a break and review tomorrow.`
    ];
  };

  const renderCoachUI = () => {
    streakNum.textContent = `${state.streak} ${state.streak === 1 ? 'Day' : 'Days'}`;
    document.getElementById('coach-streak-num').textContent = `${state.streak} ${state.streak === 1 ? 'Day' : 'Days'}`;
  };

  // Simulate missed day (Empathetic Coach Protocol)
  missBtn.addEventListener('click', () => {
    state.streak = 0;
    state.streakLastActive = "";
    
    const recoveryPitches = getRecoveryPitches();
    const idx = Math.floor(Math.random() * recoveryPitches.length);
    textBubble.textContent = `"${recoveryPitches[idx]}"`;
    
    playChime('start');
    saveState();
    renderCoachUI();
  });

  // Log additional session
  workBtn.addEventListener('click', () => {
    const today = new Date().toDateString();
    state.streak++;
    state.streakLastActive = today;
    state.planner.extraSessionsCount++;

    const workPitches = getWorkPitches();
    const idx = Math.floor(Math.random() * workPitches.length);
    textBubble.textContent = `"${workPitches[idx]}"`;

    playChime('success');
    saveState();
    renderCoachUI();
  });

  renderCoachUI();
};


// ==========================================
// PERSONALIZED RESOURCE HUBS
// ==========================================
const initResourceHub = () => {
  const container = document.getElementById('resources-grid-container');
  if (!container) return;

  const track = state.profile ? state.profile.career : "Machine Learning Engineer";
  
  const resourcesDB = {
    "Machine Learning Engineer": [
      { cat: "YouTube & Free Courses", items: ["3Blue1Brown Mathematics of ML", "Andrew Ng Machine Learning Specialization", "Fast.ai Practical Deep Learning"] },
      { cat: "Documentation & Manuals", items: ["PyTorch Core Tensor Docs", "Scikit-Learn Model API Guide", "Pandas Dataframe Query API"] },
      { cat: "Git & Kaggle Repositories", items: ["NeetCode DSA Roadmap Git", "Kaggle Housing Price Regressor datasets", "System Design Primer Repository"] }
    ],
    "AI Engineer": [
      { cat: "YouTube & Free Courses", items: ["Andrej Karpathy Intro to LLMs", "Hugging Face transformers course", "DeepLearning.ai Prompt Engineering"] },
      { cat: "Documentation & Manuals", items: ["LangChain Python Core Docs", "LlamaIndex RAG Pipeline Manual", "ChromaDB vector database documentation"] },
      { cat: "Git & Kaggle Repositories", items: ["LangGraph agentic templates Git", "Ollama LLM local model files", "Llama-3 fine-tuning adapters"] }
    ],
    "Data Scientist": [
      { cat: "YouTube & Free Courses", items: ["StatQuest Statistics Essentials", "Google Advanced Data Analytics course", "Khan Academy Hypothesis Testing"] },
      { cat: "Documentation & Manuals", items: ["Seaborn chart gallery", "Statsmodels regression models", "PostgreSQL database guides"] },
      { cat: "Git & Kaggle Repositories", items: ["Plotly interactive dashboards Git", "Kaggle Store Sales time series datasets", "A/B Testing significance calculator"] }
    ],
    "Software Engineer": [
      { cat: "YouTube & Free Courses", items: ["Abdul Bari Algorithms Course", "NeetCode 150 explainer videos", "Harvard CS50 Computer Science Foundations"] },
      { cat: "Documentation & Manuals", items: ["PostgreSQL queries guides", "MDN Web REST API guidelines", "Redis caching documentation"] },
      { cat: "Git & Kaggle Repositories", items: ["System Design Primer repository", "LeetCode Solutions Git", "Docker microservice templates"] }
    ]
  };

  const activeRes = resourcesDB[track] || resourcesDB["Machine Learning Engineer"];
  
  container.innerHTML = '';
  activeRes.forEach(sec => {
    const card = document.createElement('div');
    card.className = "roadmap-node-card";
    
    let listHTML = '';
    sec.items.forEach(item => {
      listHTML += `<li>🔗 <a href="${getResourceURL(item)}" target="_blank" rel="noopener noreferrer">${item}</a></li>`;
    });

    card.innerHTML = `
      <h3>${sec.cat}</h3>
      <ul class="node-resources-list mt-3">
        ${listHTML}
      </ul>
    `;
    container.appendChild(card);
  });
};


// ==========================================
// MAIN UI BINDINGS SYNC
// ==========================================
const updateUI = () => {
  if (!state.profile) return;
  
  const career = state.profile.career;
  const level = state.profile.level;
  const hours = state.profile.hours;
  const style = state.profile.style;
  const name = state.profile.name || "Protégé";

  // Header avatar
  const firstLetters = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  document.getElementById('avatar-letter').textContent = firstLetters;
  document.getElementById('user-badge-role').textContent = name;
  document.getElementById('user-badge-level').textContent = career;

  // Dashboard values
  document.getElementById('dash-goal-title').textContent = career;
  document.getElementById('dash-study-hours').textContent = `${hours} Hours / Week`;
  document.getElementById('dash-readiness-level').textContent = level;
  document.getElementById('top-bar-greeting').textContent = `Welcome back, ${name}`;

  // Focus Checklist & Recommendation sync based on track
  const focusTitle = document.getElementById('dash-focus-title');
  const focusDesc = document.getElementById('dash-focus-desc');
  const focusChecklist = document.getElementById('dash-focus-checklist');
  const actionTitle = document.getElementById('dash-action-title');
  const actionDesc = document.getElementById('dash-action-desc');

  if (career.includes("Machine Learning") || career.includes("AI")) {
    focusTitle.textContent = "Data Wrangling & Vector Operations in NumPy";
    focusDesc.textContent = "Study matrix properties, dot products, singular value transformations (SVD), and array slicing commands in NumPy.";
    
    focusChecklist.innerHTML = `
      <li class="checked">✓ Python variables, lists & loops</li>
      <li class="current">◉ NumPy Matrix dot products & SVD</li>
      <li class="upcoming">○ Pandas DataFrame querying methods</li>
      <li class="upcoming">○ Linear regression model training</li>
    `;
    
    actionTitle.textContent = "Complete 5 Pandas DataFrame Filtering Exercises";
    actionDesc.textContent = "Get comfortable with query functions and row-slicing indicators (.loc vs .iloc).";
  } else if (career.includes("Software")) {
    focusTitle.textContent = "Data Structures & Recursion Stack Trace";
    focusDesc.textContent = "Evaluate recursion calls, big-O complexity profiles, call stacks, stack overflows, and depth-first searches.";
    
    focusChecklist.innerHTML = `
      <li class="checked">✓ Object Oriented principles (OOP)</li>
      <li class="current">◉ Recursion & call stack limits</li>
      <li class="upcoming">○ DFS/BFS binary tree traversals</li>
      <li class="upcoming">○ RESTful CRUD operations</li>
    `;
    
    actionTitle.textContent = "Solve 3 Binary Tree DFS Traversal Puzzles";
    actionDesc.textContent = "Trace recursive calls and return metrics for maximum tree depth.";
  } else {
    focusTitle.textContent = "General Syntax & Local Layout Config";
    focusDesc.textContent = "Set up your folder structure, virtual environments, Git staging commits, and basic loops.";
    
    focusChecklist.innerHTML = `
      <li class="checked">✓ CLI command structures</li>
      <li class="current">◉ Syntax loops and dictionary loops</li>
      <li class="upcoming">○ API queries and JSON parsing</li>
      <li class="upcoming">○ Database Normalization schemas</li>
    `;
    
    actionTitle.textContent = "Set up local virtual environment repository";
    actionDesc.textContent = "Create an active working workspace and write down a starter requirements.txt file.";
  }

  // Today Action complete button helper
  const completeActionBtn = document.getElementById('btn-dash-action-complete');
  const todayString = new Date().toDateString();
  
  if (state.planner.dailyCompletedDates.includes(todayString)) {
    completeActionBtn.disabled = true;
    completeActionBtn.textContent = "Action Completed ✓";
  } else {
    completeActionBtn.disabled = false;
    completeActionBtn.textContent = "Complete Task";
  }

  // Update visual sub-systems
  updateTrackerUI();
};


// ==========================================
// APP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initNavigation();
  initOnboardingWizard();
  initResumeReview();
  initInterviewPrep();
  initAccountabilityCoach();

  // Bind Dashboard complete action button directly to study planner target completion
  document.getElementById('btn-dash-action-complete').addEventListener('click', () => {
    const plannerCompleteBtn = document.getElementById('btn-planner-complete-day');
    if (plannerCompleteBtn) {
      plannerCompleteBtn.click();
      updateUI();
    }
  });

  // Top Bar Dates
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('top-bar-date').textContent = new Date().toLocaleDateString('en-US', options);
});
