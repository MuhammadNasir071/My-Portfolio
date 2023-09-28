import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  jquery,
  laravel,
  mysql,
  postman,
  git,
  restapi,
  docker,
  trz,
  itech,
  devsol,
  gifter,
  alhamd,
  palsome,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Laravel Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "BootStrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Rest APIs",
    icon: restapi,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Jr. PHP Developer",
    company_name: "iTech",
    icon: itech,
    iconBg: "#383E56",
    date: "May 2021 - Oct 2021",
    points: [
      "Ill be involved in building web applications using the Laravel PHP framework.",
      "This includes implementing the backend logic, handling database operations, and integrating with frontend components.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Laravel Developer & Rest APIs",
    company_name: "TRZ Technologies",
    icon: trz,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2022",
    points: [
      "Developing and maintaining web applications using Php/Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing RESTful endpoints, handling authentication and authorization, and ensuring API security.",
    ],
  },
  {
    title: "Laravel & React Developer",
    company_name: "Developify Solution",
    icon: devsol,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Responsible for developing APIs (Application Programming Interfaces) using Laravel's built-in API tools.",
      "As a Laravel developer, optimize the application's performance by identifying and addressing performance bottlenecks.",
      "Develop reusable UI components, manage state, handle data fetching, optimize performance, and ensure code quality in React web applications.",
      "I worked with MySQL or PostgreSQL, to design and create database schemas, write optimized SQL queries, and handle data migration and manipulation. Laravel's ORM tool, Eloquent, will be used for efficient database management.",
    ],
  },
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
    name: "Gift Poke",
    description:
      "An eCommerce admin panel is a web interface for managing an online store. It enables tasks such as adding products, updating prices, processing orders, and monitoring website performance.",
    tags: [
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Rest APIs",
        color: "pink-text-gradient",
      },
      {
        name: "Boostrap",
        color: "red-text-gradient",
      },
      {
        name: "JQuery",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
    ],
    image: gifter,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
  {
    name: "Alhamd Traders",
    description:
      "An eCommerce website enables online shopping, allowing customers to browse, select, and purchase products or services, with features like shopping carts, secure payments, and product listings.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Html & CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Boostrap",
        color: "red-text-gradient",
      },
      {
        name: "JQuery & AJAX",
        color: "yellow-text-gradient",
      },
    ],
    image: alhamd,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
  {
    name: "Palsome",
    description:
      "This website social media platform, o  ffering profile creation, social connections, status updates, media sharing, and a news feed for user interactions, potentially raising legal questions. Same as Facebook",
    tags: [
      {
        name: "PHP/Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Rest APIs",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      },
      {
        name: "JQuery & AJAX",
        color: "yellow-text-gradient",
      },
    ],
    image: palsome,
    source_code_link: "https://github.com/MuhammadNasir071?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
