export const siteConfig = {
  name: "Mohamed Aziz Krouna",
  title: "Computer Engineering student",
  description: "aaaaaaaaaaa",
  accentColor: "#0586a3",
  social: {
    email: "mailto:azizkrouna2@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamed-aziz-krouna/",
    github: "https://github.com/Azizkr20",
  },
  aboutMe:
    "I am a 3rd-year Computer Engineering student originally from Tunisia, now based in Istanbul. My passion lies in full-stack development, where I enjoy bridging the gap between clean front-end design and robust back-end logic. Beyond my technical studies, I work as a part-time English teacher, which has sharpened my communication and leadership skills. I am currently seeking an internship where I can apply my experience to solve real-world problems.",
  skills: ["Javascript", "React", "Node.js","Express.js","MongoDB"," Passport.js", "Python","Django","PostgreSQL","Odoo","Cloudinary"],
  projects: [
    {
      name: "TunCamp | Map-Integrated Tunisian Campsite Finder & Safety Platform | Lead Full-Stack Developer",
      description:
        "A full-stack web application that serves as an interactive platform for discovering Tunisian campsites. Built with a Node.js/Express.js backend and a responsive UI, it integrates Map APIs for real-time navigation and campsite location. Features a community-driven safety rating system, user reviews, and secure authentication to help outdoor enthusiasts find and share secure locations.",
      link: "https://github.com/Azizkr20/TunCamp",
      skills: ["JavaScript","Node.js", "Express.js", "MongoDB", "Mapping APIs", "UI/UX Design"],
    },
    {
      name: "HopeToHire | ATS-Optimized Job Portal & CV Scanner | Front-End Architect & Developer",
      description:
        "Co-developed a next-generation Applicant Tracking System (ATS) job portal. Engineered the responsive front-end architecture and built an automated CV scanning feature to parse, analyze, and validate candidate resume compatibility in real time.",
      link: "https://github.com/AlaFellah/hop2hire",
      skills: ["JavaScript","Django", "PostgreSQL", "Team Collaboration"],
    },
    {
      name: "The Book Corner",
      description:
      "A comprehensive library management system featuring a drag-and-drop Odoo frontend and a robust Python/PostgreSQL backend for seamless book tracking and user management.",
      link: "#", // Replace with your GitHub link if you have one
      skills: ["Python", "Odoo", "PostgreSQL"],
    },
  ],
  experience: [
    {
      company: "Taurus Defense Competition",
      title: "Lead Software Programmer",
      dateRange: "Competition Cycle 2024/2025",
      bullets: [
      "Engineered the core logic and central algorithms for the competition entry, ensuring system stability during high-pressure live trials.",
      "Integrated custom software with hardware components in collaboration with the mechanical engineering team under strict technical constraints.",
      "Optimized system performance to handle real-time data processing and hardware response triggers."
  ],
    },
    {
      company: "English Time Şirinevler",
      title: "English Language Instructor",
      dateRange: "2024 — Present",
      bullets: [
      "Translated complex language concepts into actionable lessons for diverse student groups, enhancing their public speaking and presentation abilities.",
      "Managed schedules and curriculum development for large classes, demonstrating professional maturity and high-level time management.",
      "Facilitated cross-cultural communication in an educational environment, leveraging fluency in Arabic, French, and English."
  ],
    },
  ],
  education: [
    {
      school: "Istanbul Beykent University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2023 — Present",
      achievements: [
        "Completed 500+ hours of coursework [Object-Oriented Programming, Data Structure And Algorithms, Data Base Management Systems, Mobile Application Programming, ...]",
        "Leadership & Personal Growth",
        "Consistently applied problem-solving skills across C, Python, and SQL environments."
      ],
    },
  ],
};
