import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  metaverse,
  shirt,
  calculator,
  ef,
  fcc,
  ibm,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Certifications", //"Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "System Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front End Development Libraries",
    company_name: "FreeCodeCamp.org",
    icon: fcc,
    iconBg: "#383E56",
    date: "May 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Mastering React.js and Associated Tools for Web Application Development.",
      "Responsive Design Implementation for Seamless User Experience Across Devices.",
      "User-Centric Approach: Aligning Development with User Needs and Experiences.",
    ],
  },
  {
    title: "C2 English Certificate",
    company_name: "Education First",
    icon: ef,
    iconBg: "#383E56", //"#E6DEDD",
    date: "Jun 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Fluent in both English and Spanish.",
      "Effectively Communicating Complex Technical Concepts in English, fostering clear and concise discussions.",
      "Demonstrating Proficient English Language Skills for Engaging Presentations and Client Interactions.",
    ],
  },
  {
    title: "IBM Data Science Specialization",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#383E56",
    date: "Jun 2021",
    points: [
      "Proficient in Utilizing Python, for Data Collection, Analysis, and Visualization in various projects.",
      "Applying Machine Learning Algorithms and Statistical Modeling techniques for predictive analysis and data-driven decision-making.",
      "Mastering Data Cleaning, Preprocessing, and Feature Engineering to derive meaningful insights from complex datasets.",
      "Effectively Communicating Data Findings through compelling visualizations and reports to facilitate informed business strategies.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Metaversus",
    description:
      "A single Page website based on the metaverse that uses framer motion and tailwind css ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/ridabelaco/Metaversus",
    website_link: "https://metaversus-cyan.vercel.app",
  },
  {
    name: "Shirt designer",
    description:
      "Web application that enables users to customize a 3d shirt, choose the color of the shirt or upload a logo and download the final design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/ridabelaco/shirt_designer",
    website_link: "https://design-shirt-0wbk.onrender.com",
  },
  {
    name: "Calculator",
    description:
      "A simple online Calculator using several react hooks to work seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: calculator,
    source_code_link: "https://github.com/ridabelaco/Online_Calculator",
    website_link: "https://online-calculator.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };