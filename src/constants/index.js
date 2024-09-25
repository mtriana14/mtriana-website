import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

// Updated HERO_CONTENT with corrected string syntax
export const HERO_CONTENT = `- Aspiring full stack developer passionate about creating efficient, user-friendly and accessible applications.`;
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "PostgreSQL"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "PayPal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "SQLite"],
  },
];

export const PROJECTS = [
  {
    title: "Website Portfolio",
    image: project3, // Replace with the correct image variable if needed
    description:
      "Showcases skills and projects in a user-friendly interface.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "JavaScript"],
  },
  {
    title: "Chrome Extension",
    image: project1, // Replace with the correct image variable if needed
    description:
      "A Chrome extension with file upload functionality and persistent user data.",
    technologies: ["HTML", "JavaScript", "CSS", "Chrome Extension API"],
  },
  {
    title: "Tic-Tac-Toe Game",
    image: project2, // Replace with the correct image variable if needed
    description:
      "A concise tic-tac-toe game developed using Python and Kivy GUI.",
    technologies: ["Python", "Kivy GUI"],
  },
];


export const CONTACT = {
  address: "Newark, NJ ",
  email: "mt582@njit.edu",
};
