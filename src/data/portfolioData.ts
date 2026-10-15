import { Project, ExperienceItem, SkillCategory, EngineeringPillar, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Amee Nimavat",
  role: "Senior React Native Developer",
  experienceYears: "3.5+",
  location: "Surat, Gujarat, India",
  workPreference: "Remote · Open to opportunities",
  availabilityStatus: "Open to Remote Opportunities",
  email: "ameenimavat17@gmail.com",
  phone: "+91 83202 19094",
  phoneFormatted: "+91 83202 19094",
  linkedin: "https://www.linkedin.com/in/ameenimavat/",
  headline: "Building Reliable Mobile Experiences That People Love.",
  subheadline: "I’m Amee Nimavat, a React Native Developer with 3.5+ years of experience building cross-platform mobile applications for iOS and Android. I turn complex requirements into reliable, user-friendly mobile experiences.",
  specialties: ["React Native", "TypeScript", "Expo", "Firebase", "Offline-First Apps"],
  aboutIntro: "I’m a React Native developer who enjoys solving real product problems through thoughtful mobile engineering. My experience spans expense tracking, employee management, social platforms, dating applications, and transport solutions. I work across the development lifecycle—from implementing features and integrating APIs to debugging, improving reliability, and preparing applications for release. I also have experience coordinating development tasks and collaborating with backend teams.",
  aboutHighlights: [
    { title: "3.5+ Years Mobile Experience", desc: "Specialized in production React Native development for iOS and Android." },
    { title: "iOS & Android Cross-Platform", desc: "Unified codebases with platform-specific native fine-tuning." },
    { title: "Offline-First & Background Sync", desc: "SQLite storage, Zustand caching, and resilient queue sync." },
    { title: "API & Firebase Integrations", desc: "Auth, Firestore, FCM push notifications, Crashlytics, and Remote Config." },
    { title: "End-to-End Feature Ownership", desc: "From technical planning and UI implementation to store deployment." }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracking App",
    subtitle: "AI Voice Entry, Offline Caching & Android Widgets",
    category: "Fintech & Productivity",
    tags: ["React Native", "Expo", "TypeScript", "Zustand", "Voice AI", "Android Widgets"],
    overview: "A modern, offline-first mobile expense tracker designed for rapid transaction logging on the go. Features instantaneous offline caching, natural language voice entry, receipt scanning, and interactive home-screen widgets.",
    myRole: "Lead React Native Developer (ScriptJet Services)",
    contributions: [
      "Led end-to-end mobile architecture and development using React Native, Expo, and TypeScript.",
      "Engineered an offline-first data caching system with Zustand, ensuring zero latency when recording expenses.",
      "Delivered AI-powered voice expense entry allowing users to log complex transactions via conversational voice input.",
      "Built camera-based receipt scanning pipeline for automated expense itemization.",
      "Created native Android home-screen widgets for 1-tap quick expense logging directly from the home screen.",
      "Coordinated technical decisions, state architecture, and milestone delivery."
    ],
    techStack: {
      core: ["React Native", "Expo", "TypeScript"],
      stateAndData: ["Zustand", "Local Caching", "Offline Storage"],
      integrations: ["AI Voice Recognition", "Camera OCR Receipt Scanner", "Android Native Widgets"]
    },
    conceptualType: "expense",
    accentColor: "#f08a5d"
  },
  {
    id: "employee-management",
    title: "Shipping Employee Management App",
    subtitle: "Offline-First SQLite Architecture & Project Intelligence",
    category: "Enterprise & Logistics",
    tags: ["React Native", "SQLite", "Background Sync", "RBAC", "Workforce Analytics"],
    overview: "An enterprise mobile application built for maritime and shipping workforce operations where remote or spotty connectivity at sea and docks is standard. Delivers automatic background data sync and operational intelligence.",
    myRole: "Senior React Native Developer (ScriptJet Services)",
    contributions: [
      "Designed and implemented an offline-first SQLite data layer ensuring full operational continuity without internet.",
      "Engineered automated background synchronization that seamlessly queues and syncs database changes when network restores.",
      "Built comprehensive role-based and feature-based access control (RBAC) ensuring granular permission security.",
      "Developed project intelligence analytics dashboards tracking project readiness, operational bottlenecks, rework frequencies, and crew performance.",
      "Optimized query performance and local table schemas for snappy mobile data manipulation."
    ],
    techStack: {
      core: ["React Native", "TypeScript", "SQLite Native Layer"],
      stateAndData: ["Offline-first SQLite", "Background Sync Queues", "Conflict Resolution"],
      integrations: ["RBAC Permission Engine", "Project Intelligence Analytics", "Enterprise REST APIs"]
    },
    conceptualType: "employee",
    accentColor: "#e27d50"
  },
  {
    id: "dating-app",
    title: "Dating App",
    subtitle: "Real-Time Chat, WebRTC Voice Calling & Monetization",
    category: "Social & Lifestyle",
    tags: ["React Native", "WebRTC", "Firebase", "FCM", "AdMob", "RevoPush"],
    overview: "A high-engagement dating application featuring smooth swiping, real-time messaging, low-latency WebRTC voice calling, granular privacy controls, and dynamic in-app monetization.",
    myRole: "Senior React Native Developer (Tagline Infotech)",
    contributions: [
      "Collaborated closely with backend engineers to architect and build real-time chat and low-latency WebRTC voice calling.",
      "Integrated seamless Google Authentication and secure user onboarding flows.",
      "Implemented Firebase Cloud Messaging (FCM) for instant notification delivery for match alerts and incoming calls.",
      "Configured Firebase Crashlytics and Analytics to monitor crash-free sessions and user engagement metrics.",
      "Integrated Google AdMob banner and interstitial ad placements balanced with optimal UX.",
      "Deployed OTA updates with RevoPush, enabling fast hotfixes and Remote Config toggles without waiting for app store reviews."
    ],
    techStack: {
      core: ["React Native", "JavaScript / TypeScript"],
      stateAndData: ["Redux / Context", "REST APIs", "Socket.io"],
      integrations: ["WebRTC Voice Calling", "Google Auth", "Firebase (FCM, Crashlytics, Remote Config)", "AdMob", "RevoPush OTA"]
    },
    conceptualType: "dating",
    accentColor: "#f7a37e"
  },
  {
    id: "feudr-platform",
    title: "Feudr Social Platform",
    subtitle: "Tournaments, Team Creation & Real-Time Interaction",
    category: "Gaming & Community",
    tags: ["React Native", "WebRTC", "Deep Linking", "Social Graph", "Tournaments"],
    overview: "An interactive social gaming and community platform centered around competitive team tournaments, social networking, dynamic leaderboards, and live interactive communication.",
    myRole: "Senior React Native Developer (BigBrainy Infotech)",
    contributions: [
      "Architected core social platform modules: team formation, bracketed tournament structures, and match scoreboards.",
      "Developed interactive friend and follow engagement flows and user profile customization.",
      "Configured native deep linking schemas for seamless user onboarding, tournament invites, and cross-channel promotion.",
      "Integrated WebRTC to facilitate low-latency real-time voice and live-streaming communication features for gaming rooms."
    ],
    techStack: {
      core: ["React Native", "TypeScript"],
      stateAndData: ["Redux", "REST APIs", "WebSocket"],
      integrations: ["WebRTC Audio/Streaming", "Deep Linking (iOS Universal Links & Android App Links)", "Social Graph"]
    },
    conceptualType: "social",
    accentColor: "#d96b3f"
  },
  {
    id: "smarthaul-transport",
    title: "SmartHaul Transport App",
    subtitle: "Built from Scratch: Transport & Ticketing Workflows",
    category: "Logistics & Transport",
    tags: ["React Native", "REST APIs", "Firebase Auth", "Ticketing Workflow"],
    overview: "A transport logistics application designed to streamline ticketing, vehicle tracking, and passenger check-ins for regional transport services.",
    myRole: "React Native Developer (Exelance IT)",
    contributions: [
      "Engineered the entire mobile user interface from scratch using responsive React Native component architecture.",
      "Integrated secure Firebase authentication workflows for driver and passenger personas.",
      "Connected REST API endpoints for real-time ticket validations, route listings, and trip status updates.",
      "Built clean, intuitive forms and validation logic handling offline error states gracefully."
    ],
    techStack: {
      core: ["React Native", "JavaScript"],
      stateAndData: ["React Context API", "AsyncStorage", "RESTful Services"],
      integrations: ["Firebase Authentication", "Barcode / Ticket Verification", "Map APIs"]
    },
    conceptualType: "transport",
    accentColor: "#b4441f"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "scriptjet",
    company: "ScriptJet Services",
    role: "Senior React Native Developer (Lead)",
    period: "Jan 2026 – Present",
    badge: "Current Role · Tech Lead",
    subProjects: [
      {
        name: "Expense Tracking App",
        points: [
          "Led end-to-end development using React Native, Expo, and TypeScript.",
          "Built offline support and data caching with Zustand.",
          "Delivered AI-powered voice expense entry, receipt scanning, and Android home-screen widgets.",
          "Coordinated technical decisions and development tasks across the mobile lifecycle."
        ]
      },
      {
        name: "Shipping Employee Management App",
        points: [
          "Implemented role- and feature-based access control (RBAC).",
          "Built an offline-first SQLite data layer with automatic background synchronization.",
          "Developed project intelligence analytics for readiness, bottlenecks, rework, and workforce performance."
        ]
      }
    ],
    techTags: ["React Native", "Expo", "TypeScript", "Zustand", "SQLite", "Background Sync", "Android Widgets", "Voice AI"]
  },
  {
    id: "tagline",
    company: "Tagline Infotech",
    role: "Senior React Native Developer",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Developed real-time chat and WebRTC voice calling in close collaboration with backend engineers.",
      "Integrated Google Authentication and optimized the user onboarding and verification flow.",
      "Implemented Firebase Cloud Messaging (FCM), Firebase Analytics, Crashlytics, and Remote Config for live feature toggling.",
      "Integrated Google AdMob monetization strategies and configured RevoPush OTA updates for fast hotfix deployments."
    ],
    techTags: ["React Native", "WebRTC", "Google Auth", "AdMob", "FCM", "Crashlytics", "Remote Config", "RevoPush"]
  },
  {
    id: "bigbrainy",
    company: "BigBrainy Infotech",
    role: "Senior React Native Developer",
    period: "Jan 2025 – Aug 2025",
    bullets: [
      "Built dynamic social platform features including team creation, tournament matchmaking, friend/follow flows, and profile management.",
      "Integrated deep linking schemas across iOS and Android for frictionless invite links and campaign attribution.",
      "Implemented WebRTC protocols for low-latency real-time voice and live-streaming communication features."
    ],
    techTags: ["React Native", "WebRTC", "Deep Linking", "Redux", "REST APIs", "Socket.io"]
  },
  {
    id: "exelance",
    company: "Exelance IT",
    role: "React Native Developer",
    period: "May 2023 – Dec 2024",
    bullets: [
      "Built SmartHaul's UI from scratch and integrated REST APIs and Firebase authentication.",
      "Fixed critical bugs and improved SQLite database performance in Prestartr.",
      "Implemented employee-update validation logic, audit handling, and Firebase storage fixes in PMS."
    ],
    techTags: ["React Native", "SQLite", "REST APIs", "Firebase Auth", "Firebase Storage", "Performance Optimization"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "mobile",
    name: "Mobile Development",
    description: "Core cross-platform engineering, tooling, and runtime environments.",
    icon: "Smartphone",
    skills: [
      "React Native",
      "Expo",
      "Expo Dev Client",
      "EAS Build",
      "JavaScript",
      "TypeScript",
      "React Hooks"
    ]
  },
  {
    id: "state-ui",
    name: "State Management & UI",
    description: "Predictable application state, client caches, and responsive styling.",
    icon: "Layout",
    skills: [
      "Redux",
      "Zustand",
      "React Context API",
      "Tailwind CSS"
    ]
  },
  {
    id: "backend-data",
    name: "Backend & Data",
    description: "Data persistence, cloud infrastructure, and push services.",
    icon: "Database",
    skills: [
      "REST APIs",
      "Firebase Authentication",
      "Firestore",
      "Firebase Cloud Messaging (FCM)",
      "Analytics",
      "Crashlytics",
      "Remote Config",
      "SQLite",
      "Socket.io"
    ]
  },
  {
    id: "realtime",
    name: "Real-Time & Integrations",
    description: "Low-latency voice protocols, authentication, and ad monetization.",
    icon: "Radio",
    skills: [
      "WebRTC Voice Calling",
      "Google Authentication",
      "Google AdMob"
    ]
  },
  {
    id: "release-tools",
    name: "Build, Release & Tools",
    description: "Native IDEs, continuous delivery pipelines, and agile workflows.",
    icon: "Cpu",
    skills: [
      "Xcode",
      "Android Studio",
      "App Store & Google Play Deployment",
      "OTA Updates with RevoPush",
      "Fastlane",
      "CI/CD",
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "ClickUp",
      "Agile Methodology",
      "QA & Testing"
    ]
  }
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: "offline-first",
    title: "Offline-First Mobile Experiences",
    description: "Mobile apps should never freeze or fail simply because a user walked into an elevator, tunnel, or offshore vessel. I treat local persistence as the primary source of truth.",
    approach: [
      "Local storage architectures with SQLite and Zustand local state caching",
      "Optimistic UI updates with instant user feedback before network confirmation",
      "Graceful degradation when offline with zero application crashes"
    ],
    badge: "Resilience",
    icon: "WifiOff"
  },
  {
    id: "sync",
    title: "Reliable Data Synchronization",
    description: "Managing two-way sync across sporadic network conditions requires robust queueing and conflict mitigation strategies.",
    approach: [
      "Automated background synchronization workers running non-blocking background jobs",
      "Transactional mutation queues that persist pending changes until network acknowledges",
      "Idempotent API design and client-side conflict resolution rules"
    ],
    badge: "Architecture",
    icon: "RefreshCw"
  },
  {
    id: "firebase-api",
    title: "API & Firebase Integration",
    description: "Deep integration with modern cloud primitives and typed REST endpoints for seamless identity, messaging, and remote telemetry.",
    approach: [
      "Full Firebase suite integration: Authentication, Firestore, FCM Push, and Remote Config",
      "Crashlytics telemetry monitoring for proactive bug isolation and crash diagnostics",
      "Strict TypeScript API contracts preventing runtime deserialization surprises"
    ],
    badge: "Cloud & APIs",
    icon: "Cloud"
  },
  {
    id: "real-time",
    title: "Real-Time Communication",
    description: "Delivering instant peer-to-peer audio and low-latency messaging for live social, dating, and community platforms.",
    approach: [
      "WebRTC peer connection management for crystal-clear real-time voice calling",
      "Socket.io and WebSocket state synchronizers for instant room updates",
      "Audio session lifecycle management ensuring smooth transitions with system calls"
    ],
    badge: "Low Latency",
    icon: "Zap"
  },
  {
    id: "performance",
    title: "Debugging & Performance Optimization",
    description: "Eliminating dropped frames, memory leaks, and unresponsive UI threads to maintain smooth 60 FPS interactions.",
    approach: [
      "Systematic profiling to detect unnecessary re-renders in deep component hierarchies",
      "SQLite query optimization and selective index design for local datasets",
      "Native crash investigation and resolution across both iOS and Android runtimes"
    ],
    badge: "Quality",
    icon: "Activity"
  },
  {
    id: "ownership",
    title: "Feature Ownership & Collaboration",
    description: "Bridging product vision, backend engineering, and QA into shipped, high-reliability mobile releases.",
    approach: [
      "Guiding mobile architecture from wireframe to store release",
      "Direct collaboration with backend teams on contract design and edge cases",
      "Coordinating sprints, documentation, and agile release schedules"
    ],
    badge: "Leadership",
    icon: "Users"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Information Technology (M.Sc. IT)",
    institution: "Saurashtra University",
    period: "2024 – 2026",
    status: "Enrolled (2024 – 2026)",
    highlights: [
      "Advanced studies in distributed systems, mobile application architecture, and software engineering methodologies."
    ]
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Saurashtra University",
    period: "2021 – 2024",
    status: "Completed",
    highlights: [
      "Foundational computer science, object-oriented programming, database management systems, and web technologies."
    ]
  }
];
