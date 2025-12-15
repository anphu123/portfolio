import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "HUỲNH MAI AN PHÚ",
  role: " Mobile Developer (Flutter/Dart, Android Kotlin)",
  summary: "Mobile Developer specializing in Flutter/Dart and Android Kotlin. Experience building e-commerce, trade-in, HR/attendance apps; integrating REST APIs, Firebase, Supabase, FPT eKYC SDK, and Payoo payment SDK. Comfortable working in Scrum, doing basic code review, multi-flavor builds, and focusing on performance, stability, and UX.",
  contact: {
    phone: "0817 433 226",
    email: "anphu221002@gmail.com",
    address: "114/10 Bùi Quang Là, Phường 12, Quận Gò Vấp, Thành Phố Hồ Chí Minh",
    github: "github.com/anphu123",
    linkedin: "linkedin.com/in/an-phú-21b305272",
  },
  resumeUrl: "https://drive.google.com/file/d/1pCyhzFJf_jS3lurOrI-rDyRsAM1I-9XB/view?usp=drive_link", 
  avatarUrl: "https://github.com/anphu123.png",
  skills: [
    {
      category: "Languages",
      items: ["Dart", "Kotlin", "Java (Android)", "Flutter"]
    },
    {
      category: "Mobile",
      items: ["Flutter (cross-platform)", "Android (Kotlin/Java)", "Native Plugin (MethodChannel)"]
    },
    {
      category: "SDK & Integration",
      items: ["Firebase (Auth, Crashlytics, FCM)", "Supabase/REST", "FPT eKYC SDK", "Payoo Payment SDK"]
    },
    {
      category: "Storage",
      items: ["Isar", "Hive", "SQLite"]
    },
    {
      category: "Tools",
      items: ["Android Studio", "Git/GitHub", "Figma", "Adobe Photoshop/Illustrator", "Microsoft Office"]
    },
    {
      category: "Methodologies",
      items: ["Agile/Scrum", "Basic CI/CD (GitHub Actions)", "Gradle/AGP multi-flavor"]
    }
  ],
  experience: [
    {
      role: "Mobile Developer",
      company: "Toyar Inc Viet Nam",
      period: "May 2025 – Present",
      description: [
        "Develop core features for 2Hand FidoBox (trade-in & marketplace) using Flutter/Dart.",
        "Implement catalog → brand → model, product detail, cart & checkout, vouchers, store pickup, order tracking, and customer support modules.",
        "Integrate REST APIs with Dio, Supabase backend, Firebase (Auth/Crashlytics/FCM), offline-first storage (Isar/Hive) and SWR-style caching.",
        "Build 12-step device diagnostics flow (Wi-Fi, Bluetooth, GPS, biometrics, touch grid, cameras, volume keys, speaker/mic, vibration, earpiece) with Kotlin native plugin for sensors/NFC/Bluetooth/thermal and IMEI scan.",
        "Integrate FPT eKYC SDK for identity verification in trade-in/user onboarding flow.",
        "Integrate Payoo Payment SDK for online payment in checkout flow (order payment, transaction status).",
        "Optimize performance (pagination, lazy loading, skeleton/shimmer, memoized selectors), improve TTI, and stabilize build/release (AGP/Gradle/NDK, APK/AAB shrink).",
        "Work closely with Product/Backend/QA in Scrum (planning, review, retro) and maintain technical docs."
      ]
    },
    {
      role: "Mobile Developer",
      company: "Lean Solutions (Giải pháp tinh gọn)",
      period: "Feb 2025 – May 2025",
      description: [
        "Collaborated with team to deliver features for a business mobile app using Flutter & GetX.",
        "Built data display screens, forms, and complex user flows with responsive UI for Android & iOS.",
        "Used GetX for state management, routing, and performance optimization.",
        "Participated in manual testing, bug fixing, and suggested UX improvements."
      ]
    },
    {
      role: "Mobile Developer Intern",
      company: "FPT Polytechnic College Practical Workshop",
      period: "Dec 2024 – Jan 2025",
      description: [
        "Supported development of a mobile application: UI implementation, feature building, and basic testing.",
        "Worked with team using Google Meet, Zalo, and shared docs for task tracking."
      ]
    },
  ],
  education: {
    school: "FPT Polytechnic College",
    major: "Mobile Programming",
    period: "Jan 2020 – Jan 2023",
    gpa: "7.6",
    details: [
      "Focused on Mobile Programming with Flutter/Dart and Android Kotlin.",
      "Completed coursework in OOP, Data Structures, REST APIs, Firebase, UI/UX, and Agile/Scrum.",
      "Built several apps including an e-commerce prototype and a device-diagnostics mini app."
    ]
  },
  projects: [
    {
      name: "2HAND FIDOBOX (Trade-in & Marketplace)",
      company: "Toyar Inc",
      period: "May 2025 – Oct 2025",
      techStack: "Flutter (Dart), GetX, Dio, Supabase/REST, Firebase (Auth/Crashlytics/FCM), Isar/Hive, Kotlin native plugin (MethodChannel), Google Maps Flutter, Geolocator, Camera, Image Picker, Local Auth, GitHub Actions, Gradle/AGP (multi-flavor)",
      features: [
        "Catalog → brand → model, PDP, cart & checkout, voucher, store pickup, order tracking, support.",
        "12-step device diagnostics (Wi-Fi, Bluetooth, GPS, biometrics, touch grid, camera, volume keys, speaker/mic, vibration, earpiece) + IMEI scan & external verification API.",
        "Trade-in local queue with offline-first sync, retry/backoff, conflict resolution by timestamp/ETag.",
        "Notifications (FCM), skeleton/shimmer, lazy load, fly-to-cart; crash reporting & logs.",
        "FPT eKYC SDK: identity verification for users/devices during trade-in.",
        "Payoo Payment SDK: secure payment, transaction tracking in checkout."
      ],
      responsibilities: [
        "Implement UI + business logic, design local cache/DB, integrate APIs & SDKs.",
        "Write test cases (unit/integration/manual), optimize performance and UX.",
        "Support CI/build pipeline and maintain documentation."
      ]
    },
    {
      name: "ATTENDANCE AND HUMAN RESOURCE MANAGEMENT APP",
      company: "Lean Solutions",
      period: "Mar 2025 – May 2025",
      techStack: "Flutter, GetX, Dio, SQLite, Firebase, fl_chart, Google Maps Flutter, Geolocator, Geocoding, Image Picker, Flutter Image Editor",
      features: [
        "Check-in/check-out with GPS location and photo capture for verification.",
        "Employee management (profile, job assignment, filter by area/department).",
        "Analytics & reporting: attendance/revenue visualized by day/week/month with interactive charts.",
        "Responsive layout (flutter_screenutil), shimmer effects, snapping sheet, SVG illustrations."
      ],
      responsibilities: [
        "Lead UI/UX design in Figma and implement core attendance features.",
        "Integrate location & camera, build charts and filtering logic, structure codebase (MVC + feature-based).",
        "Participate in testing, code reviews, and documentation."
      ]
    },
    {
      name: "QUOTE PULSE (FLUTTER)",
      period: "Jan 2025 – Feb 2025",
      techStack: "Flutter, Isar",
      features: [
        "Browse/search quotes, save to collections, edit/manage saved quotes, share to social apps.",
        "Add custom quotes, Toast notifications for interactions."
      ],
      responsibilities: [
        "Design UI, implement core features (search, save, share, CRUD), manage local database."
      ]
    }
  ]
};