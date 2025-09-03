// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's


// Project Section Logo's
import githubdetLogo from './assets/work_logo/portfolio.png';
import brainwaveLogo from './assets/work_logo/brainwave.png';
import movierecLogo from './assets/work_logo/ecommerce.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Wesalvator",
      date: "June 2025 - August 2025",
      desc: "Worked as a Frontend Developer Intern, developing responsive landing pages from scratch using React.js, Tailwind CSS, and Material UI. Collaborated with the backend team to integrate REST APIs for dynamic data rendering and improved functionality. Built reusable modular components to enhance development speed and maintainability, while ensuring cross-browser compatibility, mobile-first design, fast loading speed, and SEO-friendly structure.",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "JavaScript",
        "Figma",
      ],
    },
    {
      id: 2,
      img: agcLogo,
      role: "Software Engineer Fellow",
      company: "Headstarter AI",
      date: "July 2024 - September 2024",
      desc: "Worked as a Software Engineer Fellow at Headstarter AI, where I built and deployed full-stack projects using the MERN stack (MongoDB, Express.js, React.js, Node.js). Gained hands-on experience in designing scalable frontend interfaces, developing RESTful APIs, and managing databases. Collaborated with peers and mentors to deliver production-ready applications.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "MongoDB",
        "Material UI",
        "Node.js"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      school: "Smt. Indira Gandhi College of Engineering 2022 -2026 ",
      date: "2022 - 2026",
      grade: "8.30 CGPA",
      desc: "Specializing in Human-Computer Interaction and Web Technologies, with a strong focus on accessible, user-centric design and seamless digital experiences.",
      degree: "Bachelor of Computer Science and Engineering (AI & ML)",
    },
    {
      id: 2,
      school: "RCT PMM Rotary, Mumbai",
      date: "2020 - 2022",
      desc: "I completed my class 12 education from RCT PMM Rotary, Mumbai, under the state board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Higher Secondary Education (11th - 12th Science)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI-Powered Portfolio Tracker ",
      description:
        "Developed a responsive Investment Tracking Web Application using React.js, allowing users to plan and monitor investments by age group and risk profile. Integrated Gemini API and real-time financial data sources to display live cryptocurrency and stock market trends with dynamic charts. Built an interactive Investment Plan Calculator that generates personalized portfolio suggestions based on user inputs. Enhanced user experience with Tailwind CSS and intuitive data visualizations for seamless performance across devices.",
      image: githubdetLogo,
      tags: ["JavaScript", "React JS", "API", "Tailwind CSS", "Material UI"],
      github: "https://github.com/rohitrathod25/Investment_Planner#",
    },
    {
      id: 1,
      title: "BrainWave",
      description:
        " Designed and developed a modern, responsive AI-based UI featuring sections like Hero, Features, Services, Pricing, and Roadmap. Implemented advanced design elements such as parallax animations, glassmorphism, gradients, and bento grids to deliver a sleek, interactive experience. Built reusable React components optimized for performance and ensured seamless compatibility across devices.",
      image: brainwaveLogo,
      tags: ["React JS", "JavaScript", "Tailwind CSS", "Material UI"],
      github: "https://github.com/rohitrathod25/InvestWise",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "Built a React-based web application to streamline the online shopping experience with an intuitive and responsive UI. Developed a secure backend using Node.js and Express.js for efficient data handling and integrated Stripe Payment Gateway for fast, reliable transactions. Implemented user authentication with Auth0 to ensure data security and seamless login.",
      image: movierecLogo,
      tags: ["React JS", "API", "JavaScript", "Tailwind CSS", "Material UI"],
      github: "https://github.com/rohitrathod25/Ecommerce_Website......",
    },
    
  ];  