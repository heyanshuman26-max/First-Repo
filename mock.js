// Mock data for the portfolio page
var personal = {
  name: "Anshuman Sharma",
  firstName: "Anshuman",
  lastName: "Sharma",
  role: "Frontend Developer",
  tagline: "Building clean, responsive web experiences with modern tools.",
  location: "Indirapuram, Ghaziabad",
  email: "heyanshuman26@gmail.com",
  availability: "Available for freelance — Now",
  about: [
    "I'm a frontend developer passionate about building clean, user-friendly interfaces that just work.",
    "I enjoy turning ideas into real products — whether it's a landing page or a full web app, I care about the details that make the experience feel right.",
    "Currently exploring the intersection of frontend development and AI, integrating smart features into everyday web experiences."
  ],
  stats: [
    { label: "Years Building", value: "01+" },
    { label: "Projects Shipped", value: "1+" },
    { label: "GitHub Repos", value: "2+" },
    { label: "Coffee Consumed", value: "∞" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/heyanshuman26-max", handle: "@heyanshuman26-max" },
    { label: "Email", href: "mailto:heyanshuman26@gmail.com", handle: "heyanshuman26@gmail.com" }
  ]
};

var skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 }
    ]
  },
  {
    title: "AI & Tools",
    items: [
      { name: "AI Tools (ChatGPT, Copilot)", level: 80 },
      { name: "Basic AI APIs", level: 65 },
      { name: "Prompt Engineering", level: 70 }
    ]
  },
  {
    title: "Tooling",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Figma (Basic)", level: 60 }
    ]
  }
];

var marqueeStack = [
  "HTML", "CSS", "JavaScript", "React",
  "Git", "GitHub", "AI APIs", "Prompt Engineering",
  "ChatGPT", "Figma", "VS Code", "REST APIs"
];

var projects = [
  
  {
    id: "p5",
    title: "Dharohar Performing Arts",
    category: "Dance",
    year: "2026",
    summary: "a fasinating website for a local dance academy, showcasing their vibrant classes and performances.",
    description: "Crafted a visually stunning, user-friendly site with React and Tailwind CSS, integrating dynamic content to highlight their unique offerings and vibrant community.",
    tech: ["React", "Tailwind CSS", "Netlify CMS"],
    link: "https://dharohar-school.netlify.app",
    color: "emerald"
  }
];

var experience = [
  {
    company: "Self-Initiated Projects",
    role: "Frontend Developer",
    period: "2024 — Present",
    location: "Indirapuram, Ghaziabad",
    bullets: [
      "Built and shipped personal web projects using HTML, CSS, JavaScript, and React.",
      "Integrated AI APIs and tools into web apps to explore smart, interactive user experiences.",
      "Actively learning modern frontend workflows, Git best practices, and UI/UX fundamentals."
    ]
  }
];

var services = [
  {
    title: "Frontend Development",
    description: "Clean, responsive websites and web apps built with React, HTML, CSS & JavaScript."
  },
  {
    title: "AI Integration",
    description: "Adding smart features to your web projects using AI APIs and modern AI tools."
  },
  {
    title: "Landing Pages",
    description: "Fast, good-looking landing pages that make a great first impression."
  },
  {
    title: "UI Implementation",
    description: "Turning Figma designs or ideas into pixel-perfect, working interfaces."
  }
];

window.personal = personal;
window.skillGroups = skillGroups;
window.marqueeStack = marqueeStack;
window.projects = projects;
window.experience = experience;
window.services = services;