import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Lucas Chen",
  initials: "BJ",
  location: "Richmond, BC",
  locationLink: "https://www.google.com/maps/place/Richmond,+BC",
  about:
    "3rd year Computer Science Student at Simon Fraser University",
  summary:
    "As a 3rd year Computer Science Student, I have successfully taken multiple courses focused on algorithms, data structures, and UI design. I am proficient in languages like Python, Java, and C++, allowing me to create various types of projects. I enjoy learning and always jump at the chance to dive into new challenges. I find participating in team projects rewarding as it allows me to collaborate with others, resulting projects where it is the combination of everyone's idea.",
  avatarUrl: "https://avatars.githubusercontent.com/u/55813316?v=4",
  personalWebsiteUrl:'',
  contact: {
    email: "lca162@sfu.ca",
    tel: "7788857317",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lukas046",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lucaschen46/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Simon Fraser University",
      degree: "Bachelor's Degree in Computing Science",
      start: "2021",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Mountain Madness 2023",
      badges: [],
      link: "https://github.com/lukas046/TransliterationLlama",
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2023",
      description:
        "Adaptability and creativity were demonstrated during a hackathon through the development of an interactive Discord Bot using OpenAI APIs. Implemented a dynamic emoji generator, injecting an element of fun and intrigue into user interactions. Additionally, the DALL·E API was harnessed to craft personalized images based off user prompts, showcasing not only technical proficiency but also a commitment to user-centric design.",
    },
    {
      company: "Game of Apps",
      link: "https://gameofapps.org/",
      badges: [],
      title: "Full Stack Developer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        "Developed an iOS application within the dynamic framework of an agile environment with the use of SwiftUI and XCTest. Deliberately focused on achieving an optimal user interface design, the development process seamlessly blended aesthetics with robust functionality."
    },
  ],
  skills: [
    "Python",
    "C",
    "C++",
    "Java",
    "SQL",
    "JavaScript",
    "x86/RISC-V",
  ],
  projects: [
    {
      title: "Yelp Database Management System",
      techStack: [
        "SQL",
        "Python",
        "Pyodbc",
        "SQL Server Management Studio",
      ],
      description: "Interactive database using Python and SQL to retreive specific user requests.",
      logo: ConsultlyLogo,
    },
    {
      title: "Hauntower 2D Game",
      techStack: ["Java", "JavaSprint", "JUnit", "Git"],
      description:
        "Interactive 2D Game with objectives, and bonuses.",
      logo: MonitoLogo,
    },
    {
      title: "Tip Calculator App",
      techStack: ["Swift", "XCTest"],
      description:
        "Tip calculating app for multiple diners.",
      logo: JarockiMeLogo,
    },
    {
      title: "RISC-V Emulator",
      techStack: ["C++", "RISC-V"],
      description:
        "• Emulated RISC-V instructions using C++ by recreating machine code format.",
      logo: Minimal,
    },
    {
      title: "Even Odd Graphical Game",
      techStack: ["Python", "Matplotlib"],
      description:
        "Created an interactive game for users to play against the software by creating multiple levels.",
    },

  ],
} as const;
