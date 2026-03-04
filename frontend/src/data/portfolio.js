export const personalInfo = {
    name: "Rishabh Chaudhary",
    title: "Full Stack Web Developer",
    tagline: "I build fast, scalable and modern web applications.",
    email: "rishabhchaudhary058@gmail.com",
    phone: "+91 6396784178",
    location: "Greater Noida, India",
    linkedin: "https://www.linkedin.com/in/rishabh-chaudhary-4b9099282/",
    github: "https://github.com/rishabh0078",
    resumeLink: "/resume.pdf",
    availableForWork: true,
};

export const skills = {
    languages: ["Java", "JavaScript", "Python"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Docker"],
    concepts: [
        "Data Structures",
        "Algorithms",
        "OOPs",
        "DBMS",
        "OS",
        "RESTful APIs",
    ],
};

export const experience = [
    {
        id: 1,
        company: "Napps Technology",
        role: "Software Developer Intern",
        type: "Remote",
        duration: "Sep 2025 – Dec 2025",
        description: [
            "Contributed to SilverPos Restaurant Management System by building and maintaining frontend features using React.js and Tailwind CSS.",
            "Collaborated with senior developers, gaining hands-on experience in Docker, Git, and GitHub workflows for efficient code deployment and version control.",
            "Worked on bug fixing, UI improvements, and component optimization to improve user experience and system performance.",
            "Gained practical knowledge handling real-world production-level code in a team-based development environment.",
        ],
        tech: ["React.js", "Tailwind CSS", "Docker", "Git"],
    },
];

export const projects = [
    {
        id: 1,
        title: "E-Commerce Application",
        description:
            "A responsive full-stack e-commerce platform with modern UI, product management, cart system, and secure user authentication.",
        longDescription: [
            "Built a responsive e-commerce application with modern UI and seamless user experience.",
            "Integrated RESTful APIs for product, cart, and user management.",
            "Implemented secure backend logic and structured database schema.",
            "Focused on clean code architecture optimized for both mobile and desktop.",
        ],
        tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
        github: "https://github.com/rishabh0078/Ecommerce-application",
        live: "",
        featured: true,
        number: "01",
    },
    {
        id: 2,
        title: "AI Financial Management App",
        description:
            "An AI-powered financial management application to track income, expenses, and budgets with Google Gemini AI insights.",
        longDescription: [
            "Built an AI-Assisted Financial management application to manage income, expenses, and budgets.",
            "Integrated Google Gemini API for AI-powered financial insights and recommendations.",
            "Designed responsive and user-friendly interfaces using reusable React components.",
            "Deployed on Vercel ensuring fast, reliable, and global access.",
        ],
        tech: ["React.js", "Express.js", "MongoDB", "Gemini API"],
        github: "https://github.com/rishabh0078/Finance-Management-application",
        live: "https://vercel.app",
        featured: true,
        number: "02",
    },
];

export const education = [
    {
        id: 1,
        institution: "Galgotias University",
        degree: "B.Tech in Computer Science Engineering",
        specialization: "Specialization in Cyber Security",
        duration: "Oct 2022 – Jun 2026",
        location: "Greater Noida",
        grade: null,
    },
    {
        id: 2,
        institution: "Ever Green Public School",
        degree: "PCM — CBSE Board",
        specialization: null,
        duration: "Completed 2022",
        location: null,
        grade: "Class XII: 80.8% · Class X: 83%",
    },
];

export const certificates = [
    { id: 1, title: "Introduction to MERN Stack" },
    { id: 2, title: "CCNA: Introduction to Networks" },
    { id: 3, title: "Oracle Java Foundation Certification" },
];

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
