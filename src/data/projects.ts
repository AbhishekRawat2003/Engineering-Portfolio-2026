export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: string;
  shortDescription: string;

  overview: string;
  problem: string;

  heroImage?: string;

  metrics?: {
    value: string;
    label: string;
  }[];

  approach: string[];

  architecture: {
    title: string;
    description: string;
  }[];

  architectureImage?: string;

  decisions: {
    title: string;
    description: string;
  }[];

  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
  }[];

  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];

  solution: string;

  learnings: string[];

  improvements: string[];

  tech: string[];

  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "flight-operations-intelligence",

    title: "Flight Operations Intelligence",

    category: "Machine Learning / Data Analytics",

    year: "2026",

    status: "In Progress",

    shortDescription:
      "An aviation analytics and machine learning system for exploring flight delays, operational risk and delay probability.",

    heroImage: "/images/projects/flight/hero.png",

    metrics: [
      { value: "3", label: "ML models compared" },
      { value: "54.1%", label: "Delayed-flight recall" },
      { value: "5+", label: "Operational KPI groups" },
      { value: "E2E", label: "Analytics pipeline" }
    ],

    architectureImage: "/images/projects/flight/architecture.png",

    screenshots: [
      {
        src: "/images/projects/flight/dashboard.png",
        alt: "Flight Operations Intelligence dashboard",
        caption: "Operational overview with delay KPIs and airline performance."
      },
      {
        src: "/images/projects/flight/routes.png",
        alt: "Flight route intelligence view",
        caption: "Route-level delay and reliability analysis."
      },
      {
        src: "/images/projects/flight/predictor.png",
        alt: "Flight delay prediction interface",
        caption: "Machine-learning based delay probability predictor."
      }
    ],


    overview:
      "Flight Operations Intelligence is an end-to-end aviation analytics project that transforms raw flight records into operational insights. It analyses airline reliability, route performance, airport delay risk and delay causes while also using machine learning to estimate the probability of a flight arriving late.",

    problem:
      "Raw aviation datasets contain large amounts of operational information, but individual flight records do not directly explain which airlines, airports or routes are unreliable. I wanted to build a system that could convert this data into understandable operational metrics while also exploring whether delays could be predicted before departure.",

    approach: [
      "Inspect and clean the raw flight dataset.",
      "Engineer useful temporal, route and operational features.",
      "Define operational KPIs for delays and severe delays.",
      "Analyse airline, airport and route reliability.",
      "Build a custom airport operational risk score.",
      "Train multiple classification models for delay prediction.",
      "Compare models using metrics appropriate for an imbalanced dataset.",
      "Expose the analytics and predictions through an interactive Streamlit dashboard."
    ],

    architecture: [
      {
        title: "Data Layer",
        description:
          "Stores the raw flight dataset and provides the source information for analytics and machine learning."
      },
      {
        title: "Processing Layer",
        description:
          "Cleans flight records, handles missing delay data and generates features including routes, departure time categories and calendar features."
      },
      {
        title: "Analytics Layer",
        description:
          "Calculates operational KPIs, airline performance, route reliability, delay causes and airport operational risk."
      },
      {
        title: "Machine Learning Layer",
        description:
          "Trains and evaluates Logistic Regression, Random Forest and Hist Gradient Boosting models before persisting the selected model."
      },
      {
        title: "Presentation Layer",
        description:
          "A Streamlit dashboard exposes operational insights, visualisations and an interactive flight-delay predictor."
      }
    ],

    decisions: [
      {
        title: "Prioritising recall over raw accuracy",
        description:
          "The dataset is imbalanced, so a model could achieve high accuracy while failing to detect delayed flights. Recall, F1 and ROC-AUC therefore carry more importance during evaluation."
      },
      {
        title: "Preventing data leakage",
        description:
          "Information only available after a flight has operated, such as arrival delay and recorded delay causes, is excluded from prediction features."
      },
      {
        title: "Using multiple reliability metrics",
        description:
          "Airline and route performance is evaluated using delay rate, severe-delay rate, average delay, median delay and other metrics rather than relying on a single average."
      },
      {
        title: "Custom airport risk score",
        description:
          "Delay rate, severe-delay rate and average departure delay are normalised and combined into one relative operational-risk score."
      }
    ],

    challenges: [
      {
        title: "Imbalanced classification data",
        problem:
          "Most flights in the sample are not delayed, meaning accuracy alone gives a misleading view of model performance.",
        solution:
          "I compared precision, recall, F1 and ROC-AUC and gave greater importance to detecting actual delayed flights."
      },
      {
        title: "Avoiding target leakage",
        problem:
          "Some flight columns reveal information that would only exist after the flight has already been delayed.",
        solution:
          "I restricted model input to information that would realistically be available before departure."
      },
      {
        title: "Comparing airports fairly",
        problem:
          "Operational metrics use different scales, making them difficult to combine directly.",
        solution:
          "I normalised the metrics before calculating the weighted Airport Operational Risk Score."
      },
      {
        title: "Keeping the project maintainable",
        problem:
          "Combining analytics, preprocessing, machine learning and dashboard logic in one script would quickly become difficult to maintain.",
        solution:
          "I separated cleaning, analysis, visualisation, model training, SQL and dashboard responsibilities."
      }
    ],

    solution:
      "The final system provides a reusable pipeline that converts flight data into operational intelligence. Users can examine airline reliability, risky airports, delayed routes, delay causes and monthly trends while also using a machine learning model to estimate delay probability before departure.",

    learnings: [
      "Designing an end-to-end machine learning workflow.",
      "Why accuracy can be misleading with imbalanced datasets.",
      "Preventing data leakage in predictive models.",
      "Feature engineering from real-world operational data.",
      "Comparing machine learning models using multiple metrics.",
      "Building custom analytical scoring systems.",
      "Separating analytics, modelling and presentation layers.",
      "Turning model output into an interactive application."
    ],

    improvements: [
      "Train using a significantly larger flight dataset.",
      "Perform hyperparameter tuning and cross-validation.",
      "Add weather and airport congestion data.",
      "Improve probability calibration.",
      "Introduce model and data monitoring.",
      "Store larger datasets in a production database.",
      "Deploy the Streamlit dashboard publicly.",
      "Track model performance across different time periods."
    ],

    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Matplotlib",
      "SQL",
      "Joblib"
    ],

    github:
      "https://github.com/AbhishekRawat2003/flight-operations-intelligence",

    demo: ""
  },

  {
    slug: "college-erp-management",

    title: "EduMa — College ERP",

    category: "Full Stack / Backend",

    year: "2026",

    status: "In Progress",

    shortDescription:
      "A role-based college ERP for managing academic structures, students, faculty, attendance, results and administrative workflows.",

    heroImage: "/images/projects/erp/hero.png",

    metrics: [
      { value: "3", label: "Primary user roles" },
      { value: "5+", label: "Academic domain layers" },
      { value: "RBAC", label: "Role-based access" },
      { value: "E2E", label: "College workflow coverage" }
    ],

    architectureImage: "/images/projects/erp/architecture.png",

    screenshots: [
      {
        src: "/images/projects/erp/admin-dashboard.png",
        alt: "EduMa administrator dashboard",
        caption: "Administrative overview of academic and institutional data."
      },
      {
        src: "/images/projects/erp/staff-dashboard.png",
        alt: "EduMa staff dashboard",
        caption: "Faculty workflows for allocated subjects, attendance and results."
      },
      {
        src: "/images/projects/erp/student-dashboard.png",
        alt: "EduMa student dashboard",
        caption: "Student-facing view for attendance, results and requests."
      }
    ],


    overview:
      "EduMa is a full-stack College ERP Management System designed to centralise academic and administrative workflows. It provides separate portals for administrators, faculty and students while maintaining a structured academic model covering programs, branches, semesters, subjects and academic sessions.",

    problem:
      "Academic institutions often manage student records, attendance, marks, faculty assignments, leave requests and other workflows through disconnected spreadsheets or independent systems. The goal was to bring these workflows into a single structured platform with clear role-based access.",

    approach: [
      "Identify the main actors: administrators, faculty and students.",
      "Model the academic hierarchy before implementing application features.",
      "Create a central authentication system with role-aware routing.",
      "Separate workflows according to user permissions.",
      "Connect students and faculty through subject allocations and academic sessions.",
      "Build attendance, examination, leave and feedback workflows.",
      "Create role-specific dashboards instead of exposing the entire system to every user.",
      "Add generated test data to validate the academic relationships."
    ],

    architecture: [
      {
        title: "Authentication Layer",
        description:
          "A custom Django authentication backend supports email-based login and identifies whether the authenticated user is an administrator, staff member or student."
      },
      {
        title: "Academic Domain Layer",
        description:
          "Programs, branches, semesters, subjects and sessions form the main academic hierarchy used throughout the ERP."
      },
      {
        title: "Role-Based Application Layer",
        description:
          "Admin, staff and student workflows are separated into dedicated Django views and templates."
      },
      {
        title: "Operational Layer",
        description:
          "Attendance, results, subject allocation, leave requests, feedback and library-related records operate on top of the core academic models."
      },
      {
        title: "Persistence Layer",
        description:
          "Django ORM manages relational data with SQLite during development and PostgreSQL support for deployment."
      }
    ],

    decisions: [
      {
        title: "Program → Branch → Semester → Subject",
        description:
          "The academic structure is modelled explicitly so the same system can represent different degrees, diploma programs, specialisations and semester structures."
      },
      {
        title: "Role-specific portals",
        description:
          "Instead of building one dashboard with conditional elements everywhere, each major role receives workflows appropriate to its responsibilities."
      },
      {
        title: "Email-based authentication",
        description:
          "Authentication uses email addresses rather than depending on traditional usernames, providing a more natural identity model for institutional users."
      },
      {
        title: "Subject allocation as a relationship",
        description:
          "Faculty members are assigned to subjects for specific academic sessions instead of permanently embedding a teacher inside the subject model."
      }
    ],

    challenges: [
      {
        title: "Academic data modelling",
        problem:
          "Students, subjects, semesters, branches and sessions are strongly related and poorly designed relationships would make future features difficult.",
        solution:
          "I built the application around a structured academic hierarchy and separate relationship models such as subject allocation."
      },
      {
        title: "Role-based access",
        problem:
          "Administrators, faculty and students need access to different data and actions.",
        solution:
          "I separated role-specific routes, views and templates and used the authenticated user's type to direct them to the correct portal."
      },
      {
        title: "Attendance modelling",
        problem:
          "Attendance needs to represent both a class session and the status of individual students.",
        solution:
          "Attendance sessions and per-student attendance reports are represented separately."
      },
      {
        title: "Creating realistic test data",
        problem:
          "Testing relationships manually across programs, semesters, subjects, faculty and students becomes slow as the system grows.",
        solution:
          "A Django management command was added to generate structured test data automatically."
      }
    ],

    solution:
      "EduMa provides a central role-based ERP where administrators can configure academic structures and manage institutional data, faculty can manage attendance and examination results for assigned subjects, and students can access their own academic information and submit requests.",

    learnings: [
      "Designing relational domain models before writing application features.",
      "Building role-based access control.",
      "Working with Django ORM relationships.",
      "Designing academic workflows across multiple entities.",
      "Implementing custom authentication.",
      "Separating application responsibilities by user role.",
      "Generating realistic seed data.",
      "Designing software that can grow beyond basic CRUD."
    ],

    improvements: [
      "Move production deployments fully to PostgreSQL.",
      "Introduce more granular permissions beyond the three main roles.",
      "Add multi-campus and multi-department support.",
      "Create timetable and examination scheduling modules.",
      "Add notifications and institutional announcements.",
      "Expose selected functionality through APIs.",
      "Add stronger automated test coverage.",
      "Introduce audit logs for administrative changes."
    ],

    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Chart.js",
      "Gunicorn"
    ],

    github:
      "https://github.com/AbhishekRawat2003/College-ERP-Management",

    demo: ""
  },

  {
    slug: "dsa-problem-solving",

    title: "DSA Problem-Solving Portfolio",

    category: "Algorithms / C++",

    year: "2026",

    status: "Active",

    shortDescription:
      "A structured collection of algorithmic problems organised around reusable DSA patterns, complexity and interview-oriented problem solving.",

    heroImage: "/images/projects/dsa/hero.png",

    metrics: [
      { value: "C++17", label: "Primary language" },
      { value: "15+", label: "DSA topic groups" },
      { value: "3", label: "Problem platforms" },
      { value: "O(n)", label: "Complexity-first thinking" }
    ],

    architectureImage: "/images/projects/dsa/architecture.png",

    screenshots: [
      {
        src: "/images/projects/dsa/repository.png",
        alt: "DSA repository structure",
        caption: "Topic-based organisation for algorithmic revision and practice."
      },
      {
        src: "/images/projects/dsa/problem-index.png",
        alt: "DSA problem index",
        caption: "Problems indexed by pattern, approach and difficulty."
      },
      {
        src: "/images/projects/dsa/code.png",
        alt: "C++ algorithm implementation",
        caption: "Example implementation focused on readable and efficient C++."
      }
    ],


    overview:
      "The DSA repository documents my progression through Data Structures and Algorithms using C++. Instead of treating each coding problem as an isolated solution, the repository groups problems around reusable patterns such as two pointers, sliding window, binary search, dynamic programming, graphs, heaps and prefix sums.",

    problem:
      "Solving coding problems randomly makes revision difficult and encourages memorising individual solutions rather than recognising reusable patterns. I wanted a structured system where solved problems could become a long-term reference for algorithmic techniques.",

    approach: [
      "Study one data structure or algorithmic pattern at a time.",
      "Solve problems across multiple difficulty levels.",
      "Identify the underlying pattern before implementing the solution.",
      "Prefer improved and optimal approaches over brute-force solutions.",
      "Organise solutions by topic rather than by platform.",
      "Document the approach and complexity where useful.",
      "Revisit similar problems to strengthen pattern recognition."
    ],

    architecture: [
      {
        title: "Topic-Based Organisation",
        description:
          "Solutions are grouped into directories such as arrays, binary search, graphs, dynamic programming, heaps, linked lists and two pointers."
      },
      {
        title: "Problem Implementations",
        description:
          "Each source file contains a C++ implementation of an individual algorithmic problem or concept."
      },
      {
        title: "Pattern Index",
        description:
          "The README acts as an index connecting individual problems to techniques, difficulty and problem sources."
      }
    ],

    decisions: [
      {
        title: "Organise by pattern",
        description:
          "Problems are grouped around algorithmic ideas so reviewing one directory reinforces a reusable problem-solving technique."
      },
      {
        title: "Use C++17",
        description:
          "C++ provides direct access to common competitive-programming and interview data structures through the STL while keeping algorithm implementation explicit."
      },
      {
        title: "Mix multiple problem platforms",
        description:
          "Problems are taken from LeetCode, GeeksforGeeks and Code360 so the repository focuses on concepts rather than one platform."
      }
    ],

    challenges: [
      {
        title: "Recognising patterns",
        problem:
          "Different problems can look unrelated even when they are solved with the same underlying technique.",
        solution:
          "I organised problems around patterns and repeatedly solved variations of the same technique."
      },
      {
        title: "Moving beyond brute force",
        problem:
          "A correct solution is not always efficient enough for larger constraints.",
        solution:
          "I compared approaches and focused on reducing time or space complexity where possible."
      },
      {
        title: "Keeping practice organised",
        problem:
          "As the number of solved problems increased, finding and revising earlier solutions became difficult.",
        solution:
          "I separated solutions by DSA topic and maintained a central README index."
      }
    ],

    solution:
      "The result is a growing algorithmic reference organised around problem-solving patterns rather than a flat collection of answers. It acts both as a record of progress and as a structured revision system for technical interviews.",

    learnings: [
      "Recognising recurring algorithmic patterns.",
      "Analysing time and space complexity.",
      "Choosing appropriate data structures.",
      "Writing cleaner C++ implementations.",
      "Using the C++ Standard Template Library.",
      "Translating problem constraints into algorithm choices.",
      "Debugging edge cases.",
      "Improving solutions beyond brute-force approaches."
    ],

    improvements: [
      "Add complexity analysis consistently to every solution.",
      "Document brute-force and optimal approaches side by side.",
      "Increase graph and dynamic programming coverage.",
      "Add reusable templates for common patterns.",
      "Add automated compilation checks through GitHub Actions.",
      "Include revision notes for frequently used patterns."
    ],

    tech: [
      "C++",
      "C++17",
      "STL",
      "Data Structures",
      "Algorithms",
      "LeetCode",
      "GeeksforGeeks",
      "Code360"
    ],

    github: "https://github.com/AbhishekRawat2003/DSA",

    demo: ""
  },

  {
    slug: "kitabnote",

    title: "KitabNote",

    category: "Full Stack / Collaboration",

    year: "2026",

    status: "Adapted / Extended",

    shortDescription:
      "A collaborative note-management platform with authentication, sharing, search, profiles and real-time synchronisation.",

    heroImage: "/images/projects/kitabnote/hero.png",

    metrics: [
      { value: "2", label: "Application services" },
      { value: "JWT", label: "Authentication" },
      { value: "GraphQL", label: "API interface" },
      { value: "CI/CD", label: "Deployment workflow" }
    ],

    architectureImage: "/images/projects/kitabnote/architecture.png",

    screenshots: [
      {
        src: "/images/projects/kitabnote/notes.png",
        alt: "KitabNote notes interface",
        caption: "Main note-management interface."
      },
      {
        src: "/images/projects/kitabnote/profile.png",
        alt: "KitabNote profile interface",
        caption: "User profile and account management."
      },
      {
        src: "/images/projects/kitabnote/collaboration.png",
        alt: "KitabNote collaboration interface",
        caption: "Sharing and collaborative note workflows."
      }
    ],


    overview:
      "KitabNote is a full-stack collaborative note-taking application built around a React frontend, NestJS backend and Supabase-powered data layer. The application provides authenticated note management, sharing, user profiles, search and collaborative workflows.",

    problem:
      "Traditional local note applications make information easy to capture but difficult to share and synchronise between users. The application explores how note management, authentication and collaborative functionality can be combined within one full-stack system.",

    approach: [
      "Separate frontend and backend responsibilities.",
      "Build a component-based React user interface.",
      "Expose application functionality through a structured NestJS backend.",
      "Implement authentication using JWT and Passport.",
      "Use Supabase as the application's backend data service.",
      "Organise backend functionality around authentication, notes and profiles.",
      "Containerise the application for repeatable deployment.",
      "Add API documentation and automated deployment infrastructure."
    ],

    architecture: [
      {
        title: "Frontend",
        description:
          "React, TypeScript, Vite and Material UI provide the browser interface, routing, reusable components and responsive user experience."
      },
      {
        title: "Application API",
        description:
          "NestJS provides the backend application layer with separate modules for authentication, notes and user profiles."
      },
      {
        title: "Authentication",
        description:
          "JWT, Passport and bcrypt support authentication, protected operations and password handling."
      },
      {
        title: "Data Layer",
        description:
          "Supabase provides persistent application data and synchronisation capabilities."
      },
      {
        title: "API Interfaces",
        description:
          "GraphQL and Swagger tooling provide structured API interaction and documentation."
      },
      {
        title: "Deployment Layer",
        description:
          "Docker, Docker Compose, Kubernetes configuration and Jenkins CI/CD infrastructure support deployment workflows."
      }
    ],

    decisions: [
      {
        title: "Frontend and backend separation",
        description:
          "The user interface and application API are maintained as separate applications, allowing each side to evolve independently."
      },
      {
        title: "Modular NestJS backend",
        description:
          "Authentication, notes, profiles and Supabase integration are separated into backend modules rather than being placed in a single application file."
      },
      {
        title: "Token-based authentication",
        description:
          "JWT and Passport provide a stateless authentication mechanism suitable for a separate frontend and backend."
      },
      {
        title: "Containerised deployment",
        description:
          "Docker provides a consistent runtime for both frontend and backend services and makes deployment environments easier to reproduce."
      }
    ],

    challenges: [
      {
        title: "Synchronising multiple clients",
        problem:
          "Collaborative notes need changes to remain consistent between users and devices.",
        solution:
          "The application uses Supabase-backed synchronisation rather than treating notes as isolated browser state."
      },
      {
        title: "Authentication across separate applications",
        problem:
          "The React frontend and NestJS backend need a secure mechanism for identifying authenticated requests.",
        solution:
          "Authentication is handled using JWT, Passport and protected backend functionality."
      },
      {
        title: "Managing a larger codebase",
        problem:
          "Authentication, notes, profiles, frontend UI and deployment concerns can quickly become tightly coupled.",
        solution:
          "The repository separates frontend and backend applications and further divides backend functionality into dedicated modules."
      },
      {
        title: "Repeatable deployment",
        problem:
          "Running multiple services manually creates environment-specific deployment problems.",
        solution:
          "Docker and Docker Compose define repeatable frontend and backend service environments."
      }
    ],

    solution:
      "The application combines an authenticated React interface with a modular NestJS backend and Supabase data services to provide searchable, shareable and synchronised notes within a single collaborative platform.",

    learnings: [
      "Working with a separated frontend and backend architecture.",
      "React and TypeScript application structure.",
      "Modular backend development with NestJS.",
      "JWT-based authentication.",
      "GraphQL and API documentation.",
      "Supabase integration.",
      "Containerising multi-service applications.",
      "Understanding CI/CD and deployment infrastructure."
    ],

    improvements: [
      "Clearly document original upstream code and personal contributions.",
      "Improve collaborative conflict handling.",
      "Add note version history.",
      "Add fine-grained sharing permissions.",
      "Expand automated frontend and backend testing.",
      "Improve observability and application logging.",
      "Harden production secrets and environment configuration.",
      "Improve offline editing and synchronisation."
    ],

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "NestJS",
      "Node.js",
      "Supabase",
      "GraphQL",
      "JWT",
      "Passport",
      "Swagger",
      "Docker",
      "Kubernetes",
      "Jenkins"
    ],

    github:
      "https://github.com/AbhishekRawat2003/KitabNote-Note-taking-Application",

    demo: ""
  }
];