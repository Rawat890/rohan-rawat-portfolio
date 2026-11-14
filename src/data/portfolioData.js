import profileAvatar from '../assets/profile-avatar.svg'
import nexachatImg from '../assets/project-nexachat.svg'
import creationsImg from '../assets/project-creations.svg'
import quickchatImg from '../assets/project-quickchat.svg'
import mobileSuiteImg from '../assets/project-production-mobile.svg'

export const personalInfo = {
  name: 'Rohan Rawat',
  brandLogo: 'Rohan.dev',
  roles: [
    'Full-Stack Developer',
    'MERN Stack Developer',
    'Mobile App Developer',
  ],
  tagline:
    'I build fast, scalable web applications and cross-platform iOS & Android apps from zero to production—combining clean React/React Native interfaces with reliable Node.js, Express, MongoDB, and LLM-powered backends.',
  location: 'Mohali / Hoshiarpur, Punjab, India',
  email: 'rohanrawat7508@gmail.com',
  phone: '+91-7696364981',
  github: 'https://github.com/Rawat890',
  linkedin: 'https://www.linkedin.com/in/rohan-rawat', // Update with your exact LinkedIn handle
  avatar: profileAvatar,
  resumeFile: '/Rohan_Rawat_Resume.pdf',
  stats: [
    { label: 'Production Experience', value: '1+ Year' },
    { label: 'Apps Shipped (iOS & Android)', value: '3+ Live' },
    { label: 'MCA Postgraduate Score', value: '81.50%' },
    { label: 'University Rank', value: 'Rank 1' },
  ],
}

export const aboutData = {
  heading: 'Engineering End-to-End Digital Products With Precision',
  paragraphs: [
    "I'm a Full-Stack, MERN, and Mobile Software Developer with over a year of hands-on professional experience shipping cross-platform mobile applications and full-stack web platforms.",
    'At Diligentic Infotech, I owned features from UI architecture to App Store and Play Store releases—building with React Native, Expo, Firebase, Redux Toolkit, and REST APIs while leading code reviews and mentoring teammates.',
    'Beyond mobile engineering, I build end-to-end web products using React.js, Next.js, Node.js, Express, MongoDB, and PostgreSQL, integrating real-time Socket.IO messaging, payment gateways (Razorpay & Stripe), and secure LLM inference APIs.',
  ],
  highlights: [
    {
      title: 'Full-Stack Web & MERN',
      description: 'Responsive React & Next.js clients backed by secure Node.js, Express, MongoDB, and PostgreSQL APIs.',
    },
    {
      title: 'Cross-Platform Mobile',
      description: 'Production-grade iOS & Android apps built with React Native CLI, Expo Router, Maps, and native SDKs.',
    },
    {
      title: 'AI & Real-Time Systems',
      description: 'LLM API integrations (Groq), persistent chat sessions, and low-latency Socket.IO communication.',
    },
  ],
}

export const skillCategories = [
  {
    title: 'Frontend & Web',
    badge: 'UI / UX',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Flexbox & Responsive UI',
    ],
  },
  {
    title: 'Mobile Development',
    badge: 'iOS & Android',
    skills: [
      'React Native',
      'Expo & Expo Router',
      'NativeWind',
      'react-native-maps',
      'Expo Location',
      'Cross-Platform Builds',
    ],
  },
  {
    title: 'Backend & AI Integration',
    badge: 'APIs & LLMs',
    skills: [
      'Node.js',
      'Express.js',
      'REST API Design',
      'LLM API Integration (Groq)',
      'Socket.IO (Real-Time)',
      'JWT & Clerk Auth',
    ],
  },
  {
    title: 'Databases & State',
    badge: 'Data Layer',
    skills: [
      'MongoDB (Mongoose)',
      'PostgreSQL (Neon + Drizzle)',
      'Firebase Firestore',
      'Firebase Realtime DB',
      'Redux Toolkit',
      'Zustand & Context API',
    ],
  },
  {
    title: 'Payments, Tools & DevOps',
    badge: 'Production',
    skills: [
      'Razorpay & Stripe',
      'Git & GitHub',
      'Docker (Basics)',
      'Vercel & Render',
      'Sentry Monitoring',
      'Swagger / Android Studio / Xcode',
    ],
  },
]

export const experienceData = [
  {
    role: 'Associate Software Engineer (React Native Developer)',
    company: 'Diligentic Infotech',
    location: 'Hoshiarpur, Punjab, India',
    period: 'May 2025 – April 2026',
    type: 'Full-Time',
    responsibilities: [
      'Shipped 3+ production mobile applications across iOS and Android using React Native CLI and Expo on schedule every sprint.',
      'Integrated Firebase Authentication, Cloud Firestore, and Realtime Database across multiple client products.',
      'Led peer code reviews, enforced clean Git workflows, and authored technical onboarding documentation that reduced ramp-up time for new hires.',
      'Upgraded React Native and core native dependencies to latest stable releases, resolving breaking changes across iOS and Android builds.',
    ],
    tech: ['React Native', 'Expo', 'Firebase', 'Redux Toolkit', 'Git', 'REST APIs'],
  },
  {
    role: 'React Native Developer Intern',
    company: 'Diligentic Infotech',
    location: 'Hoshiarpur, Punjab, India',
    period: 'January 2025 – April 2025',
    type: 'Internship',
    responsibilities: [
      'Contributed to live production mobile features for Android and iOS under senior engineer mentorship, independently delivering 3+ reusable UI components within the first 60 days.',
      'Integrated Firebase Authentication and Firestore and consumed RESTful APIs via Axios in live environments with active users.',
      'Participated in daily Agile/Scrum stand-ups, sprint reviews, and retrospectives while managing feature branches and pull requests on GitHub.',
    ],
    tech: ['React Native', 'JavaScript', 'Axios', 'Firebase Auth', 'Agile/Scrum'],
  },
  {
    role: 'Defence Services Examination Preparation',
    company: 'Career Sabbatical (AFCAT & CDS SSB)',
    location: 'India',
    period: 'May 2026 – June 2026',
    type: 'Personal Milestone',
    responsibilities: [
      'Dedicated focused preparation toward Indian Armed Forces officer selection examinations (AFCAT and CDS SSB interview process), strengthening leadership, analytical reasoning, and discipline.',
    ],
    tech: ['Leadership', 'Problem Solving', 'Discipline'],
  },
]

export const projectsData = [
  {
    id: 'nexachat',
    title: 'NexaChat — AI Chatbot Assistant',
    category: 'Full-Stack / MERN + LLM',
    featured: true,
    image: nexachatImg,
    shortDescription:
      'End-to-end full-stack AI conversational web app powered by the MERN stack and Groq LLM inference with persistent chat history.',
    fullDescription:
      'Built an end-to-end AI chatbot platform featuring a responsive React client hosted on Vercel and a Node.js/Express + MongoDB backend deployed on Render. Integrated the Groq API through secure server-side REST endpoints to deliver fast, context-aware LLM responses while keeping API keys protected off the client.',
    features: [
      'Secure server-side Groq LLM API proxy keeping credentials hidden from the browser',
      'Persistent MongoDB chat history & session management to revisit past conversations',
      'Responsive desktop & mobile chat interface with real-time loading indicators',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq LLM API', 'Vercel & Render'],
    githubUrl: 'https://github.com/Rawat890',
    liveUrl: 'https://nexaChat.vercel.app',
  },
  {
    id: 'creations',
    title: 'Creations — Community Platform for Builders',
    category: 'Full-Stack Web',
    featured: true,
    image: creationsImg,
    shortDescription:
      'Modern creator showcase platform where builders publish apps and AI tools, discover launches, and exchange community feedback.',
    fullDescription:
      'Full-stack community launchpad built with Next.js 16 (App Router) and React 19, styled with Tailwind CSS and accessible UI primitives. Features Clerk authentication for creator profiles and a serverless Neon PostgreSQL database managed via Drizzle ORM.',
    features: [
      'Creator authentication & profile management powered by Clerk',
      'Type-safe relational schema and migrations with Drizzle ORM on Neon PostgreSQL',
      'Responsive product discovery feed with clean card layouts and instant feedback',
    ],
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Clerk Auth', 'Drizzle ORM', 'Neon PostgreSQL'],
    githubUrl: 'https://github.com/Rawat890',
    liveUrl: 'https://products-website-nextjs.vercel.app',
  },
  {
    id: 'quick-chat',
    title: 'Quick-Chat — Cross-Platform Real-Time Messaging',
    category: 'Mobile & Web / Real-Time',
    featured: true,
    image: quickchatImg,
    shortDescription:
      'Cross-platform Android, iOS, and Web real-time messaging app powered by Expo Router, Socket.IO, Clerk, and Zustand.',
    fullDescription:
      'Engineered a unified real-time chat application running seamlessly on Android, iOS, and Web from a single Expo Router codebase. Secured user sessions with Clerk and encrypted native token storage via expo-secure-store, paired with live bi-directional messaging via Socket.IO.',
    features: [
      'Instant bi-directional messaging & live presence via socket.io-client',
      'Encrypted token persistence using Clerk + expo-secure-store',
      'Lightweight global state with Zustand, NativeWind styling, and Sentry monitoring',
    ],
    tech: ['React Native', 'Expo Router', 'Socket.IO', 'Clerk', 'Zustand', 'NativeWind', 'Sentry'],
    githubUrl: 'https://github.com/Rawat890',
    liveUrl: 'https://github.com/Rawat890',
  },
  {
    id: 'production-mobile-apps',
    title: 'Production Mobile Apps Suite (iOS & Android)',
    category: 'Mobile Development',
    featured: false,
    image: mobileSuiteImg,
    shortDescription:
      'Commercial cross-platform mobile applications shipped to production featuring live maps, Firebase sync, and Razorpay/Stripe payments.',
    fullDescription:
      'Delivered 3+ commercial mobile apps during tenure at Diligentic Infotech. Implemented real-time geolocation tracking with react-native-maps, secure payment workflows with Razorpay and Stripe, and cloud data synchronization using Firebase.',
    features: [
      'Live location tracking and custom map markers with react-native-maps & expo-location',
      'End-to-end payment checkout integration using Razorpay and Stripe SDKs',
      'Production crash monitoring, Redux Toolkit state management, and Play Store/App Store builds',
    ],
    tech: ['React Native CLI', 'Firebase', 'Redux Toolkit', 'Razorpay', 'Stripe', 'Google Maps'],
    githubUrl: 'https://github.com/Rawat890',
    liveUrl: 'https://github.com/Rawat890',
  },
]

export const educationData = [
  {
    degree: 'Master of Computer Applications (M.C.A.)',
    institution: 'Panjab University — Dept. of Computer Science & Applications',
    period: '2023 – 2025',
    score: '81.50%',
    achievement: 'Rank 1 — MCA 1st Semester',
  },
  {
    degree: 'Bachelor of Computer Applications (B.C.A.)',
    institution: 'Government College, Hoshiarpur',
    period: '2020 – 2023',
    score: '85.02%',
    achievement: 'Rank 1 — BCA 1st Year',
  },
  {
    degree: 'Class 12 (Senior Secondary — CBSE)',
    institution: 'St. Soldier Divine Public School, Hoshiarpur',
    period: '2020',
    score: '87.20%',
    achievement: 'First Division with Distinction',
  },
  {
    degree: 'Class 10 (Matriculation — CBSE)',
    institution: 'St. Soldier Divine Public School, Hoshiarpur',
    period: '2018',
    score: '85.33%',
    achievement: 'First Division with Distinction',
  },
]

export const servicesData = [
  {
    title: 'Full-Stack Web Development',
    description:
      'Custom, SEO-friendly, and responsive web applications built with React.js, Next.js, Node.js, Express, and MongoDB/PostgreSQL.',
    deliverables: ['MERN & Next.js Web Apps', 'Admin Dashboards', 'Responsive UI Architecture'],
    icon: 'Globe',
  },
  {
    title: 'Cross-Platform Mobile App Development',
    description:
      'High-performance iOS and Android applications from a single React Native / Expo codebase with native maps, push notifications, and store deployment.',
    deliverables: ['iOS & Android Apps', 'Maps & Geolocation', 'App Store & Play Store Releases'],
    icon: 'Smartphone',
  },
  {
    title: 'Backend APIs, Payments & AI Integration',
    description:
      'Secure REST APIs, real-time Socket.IO chat systems, Razorpay/Stripe payment gateways, and custom LLM (Groq/OpenAI) chatbot integrations.',
    deliverables: ['REST & Socket.IO Backends', 'Razorpay & Stripe Checkout', 'AI / LLM Assistants'],
    icon: 'Cpu',
  },
]

export const achievementsData = [
  {
    title: 'University Rank 1 — MCA 1st Semester',
    issuer: 'Panjab University (Dept. of Computer Science & Applications)',
    year: '2023',
    description: 'Secured 1st rank across the cohort in Master of Computer Applications postgraduate studies (81.50% overall).',
  },
  {
    title: 'College Rank 1 — BCA 1st Year',
    issuer: 'Government College, Hoshiarpur',
    year: '2021',
    description: 'Achieved 1st rank in Bachelor of Computer Applications 1st year, graduating with 85.02% aggregate.',
  },
  {
    title: 'Node.js Certification: Mastering Fundamentals',
    issuer: 'Scaler Topics',
    year: '2024',
    description: 'Certified in Node.js architecture, asynchronous event loop, REST API design, and backend best practices.',
  },
  {
    title: 'React Certification: Mastering Fundamentals',
    issuer: 'Scaler Topics',
    year: '2024',
    description: 'Certified in component-driven React architecture, hooks, state management, and performance optimization.',
  },
  {
    title: 'Data Entry Operations Certification (93.14 / 100)',
    issuer: 'National Certification (MS Office Suite)',
    year: 'May 2021',
    description: 'Scored 93.14% proficiency across Microsoft Word, Microsoft Excel, and Microsoft PowerPoint.',
  },
]
