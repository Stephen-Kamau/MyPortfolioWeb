// Portfolio content / data
window.PORTFOLIO_DATA = {
  name: "Stephen Kamau",
  role: "Data & ML Engineer",
  location: "Nairobi, Kenya",
  email: "stiveckamash@gmail.com",
  phone: "+254 798 355 947",
  github: "https://github.com/Stephen-Kamau",
  linkedin: "https://www.linkedin.com/in/stiveckamash/",
  status: "Open for freelance ML & data projects · remote-friendly",

  // services I offer
  services: [
    {
      id: "01",
      title: "End-to-end Data Pipelines",
      summary:
        "Airflow, dbt, Snowflake. Ingestion to delivery, with quality gates, lineage, and SLA-backed monitoring. Regulated-industry ready.",
      tools: ["Airflow", "dbt", "Snowflake", "Spark", "Python"],
    },
    {
      id: "02",
      title: "ML Deployment & MLOps",
      summary:
        "Production ML on AWS SageMaker, Lambda, and EKS. Containerised inference, CI/CD, drift monitoring, and on-call playbooks.",
      tools: ["SageMaker", "Lambda", "EKS", "Docker", "GitHub Actions"],
    },
    {
      id: "03",
      title: "LLM Integration & RAG",
      summary:
        "LangChain + RAG over your private corpus. Document intelligence, structured extraction, and AI features that ship to real users.",
      tools: ["LangChain", "RAG", "OpenAI", "BERT", "PyTorch"],
    },
    {
      id: "04",
      title: "Chatbots & Conversational AI",
      summary:
        "Customer-facing and internal assistants. Function-calling agents, retrieval, evals, guardrails, and analytics on every conversation.",
      tools: ["LangGraph", "Vector DBs", "OpenAI", "FastAPI", "Streamlit"],
    },
    {
      id: "05",
      title: "Classical ML & Forecasting",
      summary:
        "Scikit-learn, XGBoost, time-series. When the right answer is a well-tuned tree model and not a 70B-parameter one, I'll tell you.",
      tools: ["XGBoost", "Scikit-learn", "PyTorch", "Statsmodels", "Pandas"],
    },
    {
      id: "06",
      title: "BI & Decision Surfaces",
      summary:
        "Metabase, Looker, Streamlit. KPI frameworks and exec dashboards that turn pipeline output into decisions someone actually makes.",
      tools: ["Metabase", "Looker", "Streamlit", "SQL", "dbt"],
    },
  ],

  // selected work — projects from Machine-Learning-Based-Projects
  projects: [
    {
      id: "P-001",
      year: "2024",
      title: "Flipkart Reviews. Sentiment Analysis with BERT, RoBERTa & XGBoost",
      client: "Open source · Scraping + NLP + Transformers",
      summary:
        "Scraped 12k+ Flipkart product reviews with BeautifulSoup, auto-labelled sentiment with VADER, then trained and compared Logistic Regression, XGBoost, RoBERTa, and BERT. BERT hit 0.876 accuracy and 0.895 F1, the cleanest of the four.",
      stack: ["BERT", "RoBERTa", "XGBoost", "BeautifulSoup", "VADER", "Python"],
      visual: "sentiment",
      link: "https://github.com/Stephen-Kamau/Flipkart_Scraping_and_sentiment_analysis",
    },
    {
      id: "P-002",
      year: "2024",
      title: "Bias Audit. Gender Classification across Age & Race",
      client: "Open source · UTKFace · Fairness in ML",
      summary:
        "Investigated demographic bias in gender-classification models on the UTKFace dataset. Trained CNN, ResNet, Random Forest, and SVM, then broke F1 and Cohen's Kappa down by age bracket and race to surface where each model fails. SVM and RF were the most balanced; CNN failed across the board.",
      stack: ["ResNet", "CNN", "Random Forest", "SVM", "UTKFace", "PyTorch"],
      visual: "bias",
      link: "https://github.com/Stephen-Kamau/Impact-of-Age-and-Race-on-Gender-Classification-Using-Facial-Data",
    },
    {
      id: "P-003",
      year: "2024",
      title: "App Analyser. No-Code ML Studio",
      client: "Open source · Streamlit application",
      summary:
        "A Streamlit app that lets non-engineers upload a dataset, explore it, pick a target, run encoding + vectorisation, train and compare classifiers or regressors, and export the winning model with a ready-to-paste API snippet. Democratises ML for analysts and domain experts.",
      stack: ["Streamlit", "Scikit-learn", "Pandas", "Plotly", "Python"],
      visual: "studio",
      link: "https://github.com/Stephen-Kamau/App-Analyser-A-No-Code-Machine-Learning-App-with-Streamlit",
    },
    {
      id: "P-004",
      year: "2023",
      title: "Walmart Product Recommender. Nearest-Neighbour API",
      client: "Open source · ML + Flask REST API",
      summary:
        "Content-based recommender trained on ~30k Walmart products. Cleans + vectorises titles, specs, and manufacturer fields, reduces dimensionality, then serves top-K nearest-neighbour matches through a Flask REST API + lightweight web UI.",
      stack: ["Scikit-learn", "Nearest Neighbours", "Flask", "TF-IDF", "Pandas"],
      visual: "recommender",
      link: "https://github.com/Stephen-Kamau/Enhancing-Customer-Shopping-Experience-with-ML-Based-Recommender-System",
    },
  ],

  // experience timeline
  experience: [
    {
      role: "Data Scientist & ML Engineer",
      company: "Prospect33",
      context: "AI-powered data intelligence for top-tier U.S. financial institutions.",
      period: "Jan 2024 to Present",
      bullets: [
        "Built LLM agents for end-to-end automation. Document triage, structured extraction, and analyst-style summarisation across legal and financial corpora.",
        "Designed transaction anomaly-detection models that flag suspicious patterns in real time, with explanations attached for compliance review.",
        "Architected end-to-end Airflow / dbt / Snowflake pipelines for a regulated U.S. banking client.",
        "Deployed and monitored ML + LLM services on SageMaker, Lambda, and EKS with CloudWatch SLA alerting.",
        "Built OCR + LLM extraction pipelines on Lambda that removed 80% of manual data-entry workload.",
        "Integrated LangChain + RAG for AI-driven analytics in a compliance-sensitive environment.",
        "Led migration of Python / FastAPI prototypes into Java Spring Boot microservices.",
      ],
    },
    {
      role: "Data & Backend Engineer",
      company: "Fleet Logistics",
      context: "Fleet management and delivery optimisation across East Africa.",
      period: "Apr 2023 to Jan 2024",
      bullets: [
        "Designed PostgreSQL data pipelines powering route optimisation. Delivered 30% faster deliveries.",
        "Integrated the analytics platform with 5+ external client systems via REST.",
        "Automated reporting with Metabase, eliminating hours of weekly manual processing.",
        "Reduced system downtime by 95% through monitoring, RCA, and infra improvements.",
      ],
    },
    {
      role: "Machine Learning Engineer (Part-time)",
      company: "Neural Labs Africa",
      context: "MedTech computer-vision platform screening medical images across X-ray, CT, and MRI modalities.",
      period: "Apr 2022 to Dec 2023",
      bullets: [
        "Built FastAPI + Docker inference services on EC2 / SageMaker for clinical imaging.",
        "Implemented Docker / K8s / GitHub Actions CI/CD. Cut deployment workload by 80%.",
        "Used Spark + HDFS for distributed preprocessing of large medical imaging datasets.",
        "Set up Prometheus + Grafana for model & infra health monitoring.",
        "Led migration of ML infrastructure from DigitalOcean to AWS.",
      ],
    },
  ],

  // tech stack categories — kept tight
  stack: [
    {
      cat: "Data & ETL",
      items: ["Apache Airflow", "dbt", "Snowflake", "PySpark", "PostgreSQL"],
    },
    {
      cat: "Classical ML",
      items: ["PyTorch", "Scikit-learn", "XGBoost", "BERT", "Pandas"],
    },
    {
      cat: "LLMs & GenAI",
      items: ["LangChain", "LangGraph", "RAG pipelines", "OpenAI / Anthropic APIs", "Vector DBs (Pinecone · FAISS)", "LLM evals (Ragas · DeepEval)"],
    },
    {
      cat: "Cloud & MLOps",
      items: ["AWS (SageMaker · Lambda · EKS · S3)", "Docker", "Kubernetes", "GitHub Actions"],
    },
    {
      cat: "BI & Monitoring",
      items: ["Metabase", "Streamlit", "Looker", "Grafana", "CloudWatch"],
    },
  ],

  recognition: [
    "Zindi. Mental Health Prediction for Kenyan Universities",
    "MachineHack. Electronics Price Prediction",
    "DataCamp Data Engineer Certification",
    "BSc Computer Science, Multimedia University of Kenya (2022)",
  ],

  marquee: [
    "Airflow", "dbt", "Snowflake", "PyTorch", "LangChain",
    "AWS SageMaker", "EKS", "Lambda", "Spark", "Docker",
    "Kubernetes", "PostgreSQL", "FastAPI", "Streamlit", "Metabase",
  ],
};
