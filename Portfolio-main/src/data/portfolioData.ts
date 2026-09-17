import { Project, ExperienceItem, EducationItem, SkillCategory, Certification, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'Rohith Pandiarajan',
  roleTitle: 'Generative AI & Data Engineer',
  rolesList: [
    'Generative AI Engineer',
    'Agentic AI & LangGraph Developer',
    'RAG Systems Engineer',
    'Data Engineer & BI Developer',
  ],
  tagline: 'Generative AI & Data Engineer building agentic workflows, RAG pipelines, and enterprise analytics that hold up in production.',
  email: 'rohithkrishna98p@gmail.com',
  phone: '+91 90956 94095',
  location: 'Chennai, India',
  coordinates: '13.0827° N, 80.2707° E',
  currentStatus: 'Senior Software Engineer @ Data Aces',
  currentRole: 'Senior Software Engineer @ Data Aces',
  experienceYears: '4+ Years Experience',
  github: '',
  githubHandle: '',
  linkedin: 'https://www.linkedin.com/in/rohith-pandiarajan',
  linkedinHandle: 'in/rohith-pandiarajan',
  medium: '',
  mediumHandle: '',
  bio: `I am a Generative AI and Data Engineer based in Chennai. I specialize in building agentic AI systems with LangGraph, RAG and Graph RAG pipelines, LLM fine-tuning, and enterprise data engineering and BI reporting for pharmaceutical and enterprise clients.`,
  quickHighlights: [
    { label: 'Agentic AI', value: 'LangGraph & CrewAI', icon: '🤖' },
    { label: 'RAG & LLMs', value: 'Advanced RAG & Fine-Tuning', icon: '🧠' },
    { label: 'Backend', value: 'Python, Django & FastAPI', icon: '⚡' },
    { label: 'Data & BI', value: 'Snowflake, ETL & Power BI', icon: '📊' }
  ],
  corePillars: [
    {
      title: 'Practical Agentic AI',
      description: 'Building reliable multi-agent workflows with LangGraph — human-in-the-loop checkpoints, structured outputs, and evidence-based decisioning.',
      icon: '🤖'
    },
    {
      title: 'Retrieval & LLM Systems',
      description: 'Designing RAG and Graph RAG pipelines, fine-tuning open-source and hosted LLMs, and benchmarking models for accuracy and hallucination reduction.',
      icon: '🧠'
    },
    {
      title: 'Data Engineering & BI',
      description: 'Building ETL/ELT pipelines, star-schema data models, and Power BI/Tableau reporting for enterprise and pharmaceutical clients.',
      icon: '📊'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'mdm-dcr-automation',
    title: 'Agentic MDM DCR Automation',
    tagline: 'Agentic AI Automation for Healthcare Master Data Management',
    category: 'AI & RAG Systems',
    stack: ['Python', 'LangGraph', 'Azure OpenAI', 'Snowflake', 'MCP', 'FastAPI'],
    metrics: [
      {
        label: 'Workflow',
        value: 'Graph-Based',
        numValue: 1,
        suffix: '',
        description: 'Multi-agent orchestration with conditional routing and human review'
      }
    ],
    bullets: [
      'Built an agentic system that automates healthcare provider Master Data Management change requests — account and address changes — replacing manual review with graph-based, evidence-backed decisioning.',
      'Evaluated MAF, CrewAI, and LangGraph, then migrated the full workflow into a modular LangGraph architecture with reusable nodes and subgraphs.',
      'Combined enterprise data (Snowflake TRX, territory, sales hierarchy) with public web evidence, including a similarity-based address scoring engine.'
    ],
    highlights: [
      'Orchestrator graph with conditional routing between Name Change and Address Change workflows',
      'Structured Azure OpenAI outputs for verification and recommendations',
      'Human-in-the-loop interrupt points for low-confidence decisions',
      'CLI and FastAPI execution modes with observability and retry handling'
    ],
    architectureOverview: 'An orchestrator graph routes each data change request through conditional paths, pulling enterprise data from Snowflake and public web evidence, scoring similarity, and pausing at human review checkpoints before resuming to a final decision.',
    flowSteps: [
      { title: 'DCR Intake', description: 'Receives account or address change requests for processing.', tech: 'FastAPI', badge: '01' },
      { title: 'Orchestrator Routing', description: 'Routes requests through conditional Name Change or Address Change subgraphs.', tech: 'LangGraph', badge: '02' },
      { title: 'Evidence & Scoring', description: 'Gathers Snowflake and public web evidence, scores address similarity.', tech: 'Snowflake & Azure OpenAI', badge: '03' },
      { title: 'Human Review & Decision', description: 'Pauses low-confidence cases for review, then resumes to final update.', tech: 'Human-in-the-Loop', badge: '04' }
    ],
    gradient: 'from-violet-600/20 via-indigo-600/10 to-cyan-500/20',
    featured: true
  },
  {
    id: 'ai-insights',
    title: 'AI Insights',
    tagline: 'Agentic AI & Intelligent Analytics Platform',
    category: 'AI & RAG Systems',
    stack: ['Python', 'Text-to-SQL', 'Agentic AI', 'Multi-DB Routing'],
    metrics: [
      {
        label: 'Query Type',
        value: 'Natural Language',
        numValue: 1,
        suffix: '',
        description: 'Converts natural-language questions into live charts from enterprise databases'
      }
    ],
    bullets: [
      'Built text-to-SQL workflows converting user questions into optimized queries for automated retrieval and analysis.',
      'Implemented agentic orchestration to route tasks — query interpretation, SQL generation, database selection — to the right agent.',
      'Added retry and fallback logic and dynamic, context-aware visualization generation for query results.'
    ],
    highlights: [
      'Text-to-SQL query generation from natural language',
      'Agentic task routing across interpretation, generation, and DB selection',
      'Retry and fallback logic for reliability',
      'Dynamic, context-aware chart generation'
    ],
    architectureOverview: 'User questions are interpreted by an agent, converted into optimized SQL through a text-to-SQL workflow, routed to the correct database, and rendered as dynamic visualizations with retry and fallback handling.',
    flowSteps: [
      { title: 'Query Interpretation', description: 'Parses the natural-language question and identifies intent.', tech: 'Agentic AI', badge: '01' },
      { title: 'SQL Generation', description: 'Converts intent into an optimized SQL query.', tech: 'Text-to-SQL', badge: '02' },
      { title: 'Database Routing', description: 'Selects and queries the correct enterprise database.', tech: 'Multi-DB Routing', badge: '03' },
      { title: 'Visualization', description: 'Generates a context-aware chart from the query results.', tech: 'Dynamic Visualization', badge: '04' }
    ],
    gradient: 'from-cyan-600/20 via-teal-600/10 to-emerald-500/20',
    featured: true
  },
  {
    id: 'ace-etl-bleubird',
    title: 'Bleubird — AceETL Platform',
    tagline: 'Cloud Data Ingestion & Orchestrated ETL/ELT Pipelines',
    category: 'Data Engineering & ETL',
    stack: ['Prefect', 'Airbyte', 'Snowflake', 'AWS S3', 'MySQL', 'Dremio', 'Keycloak', 'Playwright'],
    metrics: [
      {
        label: 'Pipeline Type',
        value: 'Orchestrated',
        numValue: 1,
        suffix: '',
        description: 'End-to-end ELT flows across S3, SFTP, MySQL, and Snowflake'
      }
    ],
    bullets: [
      'Built AceETL pipelines with Prefect for orchestration and Airbyte for ingestion across S3-to-S3, SFTP-to-Snowflake, and MySQL-to-Data Lake flows.',
      'Used LLM-based log analysis for automated root-cause summaries and faster debugging.',
      'Implemented Keycloak RBAC and built Playwright test suites covering UI, runtime variables, and transformation node behavior.'
    ],
    highlights: [
      'End-to-end ETL/ELT pipelines connecting S3, SFTP, MySQL, Snowflake, and Dremio Data Lake',
      'LLM-based log analysis for automated root-cause summaries',
      'Keycloak role-based access control',
      'Playwright test suites for UI and transformation node validation'
    ],
    architectureOverview: 'Prefect orchestrates Airbyte-based ingestion across multiple sources into Snowflake and Dremio Data Lake, with LLM-assisted log analysis for debugging and Keycloak-governed access.',
    flowSteps: [
      { title: 'Ingestion', description: 'Airbyte pulls data from S3, SFTP, and MySQL sources.', tech: 'Airbyte', badge: '01' },
      { title: 'Orchestration', description: 'Prefect schedules and monitors pipeline runs.', tech: 'Prefect', badge: '02' },
      { title: 'Loading', description: 'Loads transformed data into Snowflake and Dremio Data Lake.', tech: 'Snowflake & Dremio', badge: '03' },
      { title: 'Debugging & Access', description: 'LLM-based log analysis and Keycloak RBAC secure the platform.', tech: 'LLMs & Keycloak', badge: '04' }
    ],
    gradient: 'from-emerald-600/20 via-teal-600/10 to-cyan-500/20',
    featured: true
  },
  {
    id: 'leo-pharma-hcp',
    title: 'Leo Pharma HCP Segmentation',
    tagline: 'Enterprise Power BI Reporting for Prescriber Targeting',
    category: 'Pharma Analytics & Data Engineering',
    stack: ['Power BI', 'DAX', 'SQL', 'Row-Level Security'],
    metrics: [
      {
        label: 'Scale',
        value: '50M+ Records',
        numValue: 1,
        suffix: '',
        description: 'Reporting across 100+ pharmaceutical tables'
      }
    ],
    bullets: [
      'Built star and snowflake schema data models, advanced DAX measures, and KPI logic for decision-making.',
      'Implemented row-level security and governed deployment through Power BI Service production workspaces.',
      'Configured automated refresh pipelines for reliable, near-real-time reporting.'
    ],
    highlights: [
      'Star and snowflake schema data modeling across 100+ tables',
      'Advanced DAX measures and KPI logic',
      'Row-level security for governed access',
      'Automated refresh pipelines for near-real-time reporting'
    ],
    architectureOverview: 'Pharmaceutical data is modeled into star and snowflake schemas, exposed through DAX measures, and governed with row-level security in production Power BI Service workspaces.',
    flowSteps: [
      { title: 'Data Modeling', description: 'Builds star and snowflake schemas from 100+ source tables.', tech: 'SQL & Power BI', badge: '01' },
      { title: 'DAX & KPIs', description: 'Creates advanced DAX measures and KPI logic.', tech: 'DAX', badge: '02' },
      { title: 'Governance', description: 'Applies row-level security across production workspaces.', tech: 'Power BI Service', badge: '03' },
      { title: 'Automated Refresh', description: 'Schedules refresh pipelines for near-real-time reporting.', tech: 'Power BI', badge: '04' }
    ],
    gradient: 'from-cyan-600/20 via-teal-600/10 to-emerald-500/20',
    featured: true
  },
  {
    id: 'aceai-chatbot',
    title: 'Chatbot Using AceAI',
    tagline: 'Enterprise RAG Chatbot for Clinical & Enterprise Query Understanding',
    category: 'AI & RAG Systems',
    stack: ['RAG', 'Graph RAG', 'Hugging Face', 'Django', 'AWS EC2', 'n8n'],
    metrics: [
      {
        label: 'Retrieval',
        value: 'Hybrid',
        numValue: 1,
        suffix: '',
        description: 'RAG, Graph RAG, and Sentence Window Retrieval combined'
      }
    ],
    bullets: [
      'Combined RAG, Graph RAG, and Sentence Window Retrieval, fine-tuning LLMs from Hugging Face and Azure AI Foundry for domain accuracy.',
      'Built ingestion pipelines for PDF, DOCX, TXT, and CSV with semantic chunking and embedding generation for long-context retrieval.',
      'Benchmarked Mistral, Falcon, LLaMA, and WizardLM for inference quality and hallucination reduction, tracked in MLflow and DeepEval.'
    ],
    highlights: [
      'RAG, Graph RAG, and Sentence Window Retrieval combined for accuracy',
      'Multi-format ingestion with semantic chunking',
      'LLM benchmarking across Mistral, Falcon, LLaMA, and WizardLM',
      'Agentic workflows in n8n connecting chatbot, vector databases, and inference pipelines'
    ],
    architectureOverview: 'Documents are ingested and chunked, embedded into a vector database, and retrieved through a hybrid RAG and Graph RAG pipeline, orchestrated with n8n agentic workflows and served through Django APIs on AWS EC2.',
    flowSteps: [
      { title: 'Ingestion & Chunking', description: 'Parses PDF, DOCX, TXT, and CSV into semantic chunks.', tech: 'Python', badge: '01' },
      { title: 'Embedding & Indexing', description: 'Generates embeddings for long-context retrieval.', tech: 'Hugging Face', badge: '02' },
      { title: 'Hybrid Retrieval', description: 'Combines RAG, Graph RAG, and Sentence Window Retrieval.', tech: 'LangChain-style Pipelines', badge: '03' },
      { title: 'Serving & Orchestration', description: 'Serves responses via Django APIs orchestrated with n8n on AWS EC2.', tech: 'Django & n8n', badge: '04' }
    ],
    gradient: 'from-amber-600/20 via-rose-600/10 to-violet-500/20',
    featured: true
  },
  {
    id: 'resume-builder',
    title: 'AI Resume Builder',
    tagline: 'Internal AI-Powered Resume Generation Platform',
    category: 'AI & RAG Systems',
    stack: ['Django REST Framework', 'LLMs', 'PostgreSQL'],
    metrics: [
      {
        label: 'Function',
        value: 'Generative',
        numValue: 1,
        suffix: '',
        description: 'LLM-driven content generation and rephrasing'
      }
    ],
    bullets: [
      'Built RESTful APIs in Django REST Framework to automate resume creation and content generation.',
      'Integrated LLMs for dynamic content generation, rephrasing, and prompt-driven refinement, backed by PostgreSQL.'
    ],
    highlights: [
      'RESTful APIs for automated resume generation',
      'LLM-driven content rephrasing and refinement',
      'PostgreSQL-backed data persistence'
    ],
    architectureOverview: 'A Django REST Framework backend exposes APIs that call an LLM for dynamic content generation and rephrasing, with PostgreSQL storing user and resume data.',
    flowSteps: [
      { title: 'Input Collection', description: 'Collects user resume details via REST APIs.', tech: 'Django REST Framework', badge: '01' },
      { title: 'LLM Generation', description: 'Generates and rephrases resume content dynamically.', tech: 'LLMs', badge: '02' },
      { title: 'Refinement', description: 'Applies prompt-driven refinement to improve output quality.', tech: 'Prompt Engineering', badge: '03' },
      { title: 'Persistence', description: 'Stores generated resumes and user data.', tech: 'PostgreSQL', badge: '04' }
    ],
    gradient: 'from-cyan-600/20 via-teal-600/10 to-emerald-500/20',
    featured: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'data-aces',
    role: 'Senior Software Engineer',
    company: 'Data Aces',
    location: 'Chennai, India',
    period: '2023 – Present',
    statusChip: 'Current Role',
    summary: 'Building agentic AI systems, RAG platforms, ETL pipelines, and enterprise BI reporting across healthcare and pharma clients.',
    responsibilities: [
      {
        point: 'Building an agentic MDM Data Change Request automation system in LangGraph with human-in-the-loop review and evidence-based decisioning.',
        tags: ['LangGraph', 'Azure OpenAI', 'Snowflake', 'MCP']
      },
      {
        point: 'Developing an AI Insights analytics platform that converts natural-language questions into SQL queries and dynamic visualizations.',
        tags: ['Text-to-SQL', 'Agentic AI', 'Cortex Agent']
      },
      {
        point: 'Built AceETL pipelines with Prefect and Airbyte connecting AWS S3, SFTP, MySQL, Snowflake, and Dremio Data Lake.',
        tags: ['Prefect', 'Airbyte', 'Snowflake', 'Keycloak']
      },
      {
        point: 'Delivered enterprise Power BI reporting across 100+ pharmaceutical tables and 50M+ records for Leo Pharma HCP segmentation.',
        tags: ['Power BI', 'DAX', 'SQL', 'RLS']
      },
      {
        point: 'Built an enterprise RAG chatbot combining RAG, Graph RAG, and Sentence Window Retrieval, fine-tuning LLMs for domain accuracy.',
        tags: ['RAG', 'Graph RAG', 'Hugging Face', 'Django']
      }
    ],
    techStack: [
      'Python', 'LangGraph', 'Azure OpenAI', 'Snowflake', 'MCP', 'FastAPI',
      'Django', 'RAG', 'Hugging Face', 'Power BI', 'DAX', 'AWS EC2', 'n8n'
    ],
    keyWins: [
      'Built production agentic MDM automation system with LangGraph orchestration',
      'Shipped natural-language-to-SQL analytics platform with dynamic visualization',
      'Engineered end-to-end ETL/ELT pipelines across five data sources',
      'Delivered enterprise Power BI reporting across 50M+ pharmaceutical records'
    ]
  },
  {
    id: 'mcw',
    role: 'Software Engineer',
    company: 'MCW',
    location: 'Chennai, India',
    period: '2022 – 2023',
    summary: 'Built data quality platforms, AI classification systems, and BI reporting for enterprise and pharmaceutical clients.',
    responsibilities: [
      {
        point: 'Built ExpertSense, a data quality validation platform integrating Soda for automated checks across L1–L3 and curated layers.',
        tags: ['Soda', 'Power BI', 'Playwright']
      },
      {
        point: 'Built an AI content classification system (Kaitongo) using NLP and LLM pipelines.',
        tags: ['BERT', 'NLP', 'CUDA']
      },
      {
        point: 'Built interactive Tableau dashboards for pharmaceutical managed markets and prescriber analytics.',
        tags: ['Tableau', 'BI Reporting']
      },
      {
        point: 'Delivered SSRS and Power BI reporting on complex SQL for KEMET Electronics enterprise analytics.',
        tags: ['SSRS', 'Power BI', 'SQL']
      }
    ],
    techStack: ['Sodacore', 'Power BI', 'Playwright', 'BERT','Tableau', 'SSRS', 'SQL'],
    keyWins: [
      'Built 300+ visualization Power BI dashboard for data quality trend analysis',
      'Benchmarked GPT-J-6B, Dolly v2, and GPT-4 for contextual classification',
      'Delivered pharma managed markets and enterprise BI reporting platforms'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'mba',
    degree: "Master's in Business Administration — Operations Management",
    institution: 'Bharathidasan University',
    location: 'India',
    period: '2021',
    score: '',
    scoreLabel: '',
    coursework: [
      'Operations Management',
      'Business Strategy',
      'Analytics for Decision-Making'
    ]
  },
  {
    id: 'be-mech',
    degree: "Bachelor's in Mechanical Engineering",
    institution: 'Anna University',
    location: 'India',
    period: '2019',
    score: '',
    scoreLabel: '',
    coursework: [
      'Engineering Fundamentals',
      'Production & Manufacturing',
      'Quality Systems'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Core programming languages',
    skills: [
      { name: 'Python', level: 'Expert', highlight: true, description: 'Backend APIs, AI pipelines, agentic workflows', percentage: 95 },
      { name: 'SQL', level: 'Expert', highlight: true, description: 'Queries, joins, star/snowflake schema modeling', percentage: 92 }
    ]
  },
  {
    category: 'AI & Agentic Systems',
    description: 'LLM agents, RAG, and tool orchestration',
    skills: [
      { name: 'LangGraph', level: 'Expert', highlight: true, description: 'Multi-agent orchestration & human-in-the-loop workflows', percentage: 95 },
      { name: 'Advanced RAG', level: 'Expert', highlight: true, description: 'RAG, Graph RAG & Sentence Window Retrieval', percentage: 95 },
      { name: 'CrewAI', level: 'Advanced', highlight: true, description: 'Multi-agent framework evaluation & workflows', percentage: 85 },
      { name: 'Fine Tuning', level: 'Advanced', highlight: true, description: 'Hugging Face & Azure AI Foundry model fine-tuning', percentage: 88 },
      { name: 'Prompt Engineering', level: 'Expert', description: 'Structured outputs & agentic prompt design', percentage: 92 },
      { name: 'LangSmith', level: 'Advanced', description: 'LLM tracing & observability', percentage: 85 },
      { name: 'MLflow', level: 'Advanced', description: 'Experiment tracking & model logging', percentage: 86 },
      { name: 'NLP', level: 'Advanced', description: 'Classification, embeddings & text pipelines', percentage: 87 }
    ]
  },
  {
    category: 'Frameworks & Backend',
    description: 'Web and API frameworks',
    skills: [
      { name: 'Django', level: 'Expert', highlight: true, description: 'ORM, authentication, scalable APIs', percentage: 92 },
      { name: 'FastAPI', level: 'Advanced', highlight: true, description: 'Async APIs for agentic execution modes', percentage: 86 }
    ]
  },
  {
    category: 'Databases',
    description: 'Relational, analytical, and vector data stores',
    skills: [
      { name: 'Snowflake', level: 'Expert', highlight: true, description: 'Cloud data warehousing & analytics', percentage: 92 },
      { name: 'PostgreSQL', level: 'Advanced', highlight: true, description: 'Relational data modeling', percentage: 88 },
      { name: 'Cassandra', level: 'Proficient', description: 'Wide-column NoSQL data modeling', percentage: 78 },
      { name: 'Vector Databases', level: 'Advanced', highlight: true, description: 'Embedding storage & semantic retrieval', percentage: 87 },
      { name: 'Dremio', level: 'Advanced', highlight: true, description: 'Data lake querying & AI architecture', percentage: 85 }
    ]
  },
  {
    category: 'Cloud, Data & DevOps',
    description: 'Cloud infrastructure, data pipelines, and version control',
    skills: [
      { name: 'AWS', level: 'Advanced', highlight: true, description: 'EC2, S3 & cloud deployment', percentage: 87 },
      { name: 'Azure AI', level: 'Advanced', highlight: true, description: 'Azure OpenAI & AI Foundry', percentage: 88 },
      { name: 'ETL Pipelines', level: 'Expert', highlight: true, description: 'Prefect, Airbyte & orchestrated data flows', percentage: 90 },
      { name: 'Git', level: 'Expert', description: 'Version control & repository management', percentage: 92 },
      { name: 'CI/CD', level: 'Advanced', description: 'Automated build & deployment pipelines', percentage: 84 },
      { name: 'Linux', level: 'Advanced', description: 'Server administration & scripting', percentage: 85 }
    ]
  },
  {
    category: 'Analytics & Testing',
    description: 'BI reporting and quality assurance tooling',
    skills: [
      { name: 'Power BI', level: 'Expert', highlight: true, description: 'DAX, RLS & governed enterprise reporting', percentage: 93 },
      { name: 'Playwright', level: 'Advanced', highlight: true, description: 'UI & API automation testing', percentage: 85 },
      { name: 'Automation & API Testing', level: 'Advanced', description: 'End-to-end test suite development', percentage: 84 },
      { name: 'Team Management', level: 'Advanced', description: 'Cross-functional collaboration & delivery', percentage: 85 }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'dremio-ai-architect',
    title: 'Dremio Verified AI Architect',
    issuer: 'Dremio',
    issueDate: '2025',
    badgeType: 'Data',
    skillsLearned: ['Data Lake Architecture', 'AI-Ready Data Design', 'Dremio Platform']
  },
  {
    id: 'dremio-ai-agents',
    title: 'Dremio Powered AI Agents',
    issuer: 'Dremio',
    issueDate: '2025',
    badgeType: 'Data',
    skillsLearned: ['Agentic Data Access', 'AI Agent Integration', 'Dremio Platform']
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Coursera',
    issueDate: '2023',
    badgeType: 'API',
    skillsLearned: ['Prompt Design', 'LLM Interaction Patterns', 'Structured Prompting']
  },
  {
    id: 'snowflake-fundamentals',
    title: 'Snowflake Hands-on Essential Fundamentals Workshop',
    issuer: 'Snowflake',
    issueDate: '2021',
    badgeType: 'Data',
    skillsLearned: ['Cloud Data Warehousing', 'Snowflake Architecture', 'SQL on Snowflake']
  },
  {
    id: 'cassandra-development',
    title: 'Apache Cassandra Development Course',
    issuer: 'DataStax Academy',
    issueDate: '2021',
    badgeType: 'Data',
    skillsLearned: ['NoSQL Data Modeling', 'Cassandra Architecture', 'Wide-Column Design']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'production-agentic-ai',
    title: 'Shipped Production Agentic AI Systems',
    organization: 'Data Aces',
    period: '2023 – Present',
    description: 'Designed and deployed multiple agentic AI and RAG platforms into real enterprise and healthcare environments, from architecture evaluation through production rollout.',
    badgeText: '8 Production Platforms Shipped'
  }
];

export const TIMELINE_JOURNEY = [
  {
    year: '2019',
    title: "Bachelor's in Mechanical Engineering",
    institution: 'Anna University',
    badge: 'Graduate',
    narrative: 'Built a foundation in engineering fundamentals, production systems, and quality processes.',
    accentColor: '#F59E0B'
  },
  {
    year: '2019 – 2021',
    title: 'Graduate Engineering Trainee',
    institution: 'LG Balakrishnan & Bros Pvt. Ltd., Coimbatore',
    badge: 'Manufacturing Operations',
    narrative: 'Supported production monitoring and process improvement across plant operations, coordinating quality and safety standards.',
    accentColor: '#22D3EE'
  },
  {
    year: '2021',
    title: "Master's in Business Administration — Operations Management",
    institution: 'Bharathidasan University',
    badge: 'Postgraduate',
    narrative: 'Transitioned into operations and analytics thinking, setting up the shift into data and software engineering.',
    accentColor: '#7C3AED'
  },
  {
    year: '2022 – 2023',
    title: 'Software Engineer',
    institution: 'MCW, Chennai',
    badge: 'Data Analyst & BI',
    narrative: 'Built data quality platforms, AI classification systems, and Power BI/Tableau reporting for enterprise and pharma clients.',
    accentColor: '#22D3EE'
  },
  {
    year: '2023 – Present',
    title: 'Senior Software Engineer',
    institution: 'Data Aces, Chennai',
    badge: 'Current Role',
    narrative: 'Building production agentic AI systems with LangGraph, RAG platforms, ETL pipelines, and enterprise BI reporting across healthcare and pharma.',
    accentColor: '#7C3AED'
  }
];
