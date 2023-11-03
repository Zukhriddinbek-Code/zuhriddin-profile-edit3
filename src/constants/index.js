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
  jobit,
  tripguide,
  next,
  udemy,
  jonas,
  sejong,
  bankist,
  car_rent,
  foodOrder,
  spot,
  pig,
  mapty,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "project",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "next",
    icon: next,
  },
];

const education = [
  {
    title: "Computer Science",
    company_name: "Sejong Univ",
    icon: sejong,
    iconBg: "#ffffff",
    date: "September 2019 - December 2023(expected)",
    points: [
      "Studied all fundamentals of computer science.",
      "With professional professors, I was able to develop and study different programming languages: C, C++, JAVA, Advanced C, and many more.",
      "Studied computer networks and how internet actually works.",
      "With students developed real world projects and participated actively in coding festivals.",
    ],
  },
  {
    title: "React - The Complete Guide",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "One of best selling courses in Udemy Platform with professional teaching experience.",
      "Dived into the React World into every basic part of it, from React hooks to advanced redux/toolkit, React Router.",
      "Developed different projects to practice my React skills.",
      "In this course, I was able to study Next JS, it is popular for server-side rendering and simplified routing.",
    ],
  },
  {
    title: "The Complete JavaScript",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "May 2022 - Nov 2022",
    points: [
      "JavaScript from zero to expert level course and it is all about JavaScript itself.",
      "Studied all aspects of JavaScript world from scratch.",
      "To practice what I learned, I did a Mapty project with Vanilla JavaScript",
      "Through projects, I studied OOP(classes), External Libraries, Promises, Async/Await, sending XMLHttpRequests, AJAX and many more.",
    ],
  },
  {
    title: "Web Design",
    company_name: "Jonas Schmedtmann",
    icon: jonas,
    iconBg: "#ffffff",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Web Designing and its impacts on UX UI.",
      "Beautiful Typography, Colors, Images, Spacing and Layout.",
      "Practiced all this designing techniques and seen the impact on User Experience.",
      "One more Educational background and skill and was very fun to learn.",
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
const tra = 1;
const projects = [
  {
    name: "Car Rent App",
    description:
      "This very simple car rental web app was great chance to practice Next.js 13 App Router and Server side Rendering, Implemented Advanced Search Functionality, Create Filtering Capabilities, Optimizing Metadata and SEO.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: car_rent,
    source_code_link: "https://github.com/Zukhriddinbek-Code/car_showcase_next",
    liveWeb: "https://car-rent-showcase1.vercel.app/",
  },
  {
    name: "Spotify Clone Music App",
    description:
      "A Music Web App(Spotify Clone) With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spot,
    source_code_link:
      "https://github.com/Zukhriddinbek-Code/spotify-clone-mus-app",
    liveWeb: "https://zuhriddin-spotify-project.netlify.app",
  },
  {
    name: "Mapty App",
    description:
      "A Mapty Web App with a side bar, huge map and geolocation. User can log their workouts on the map and save it, log form for workouts and many more.",
    tags: [
      {
        name: "Vanilla-JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Async/Await",
        color: "green-text-gradient",
      },
      {
        name: "AJAX",
        color: "red-text-gradient",
      },
      {
        name: "XMLHttpRequest",
        color: "pink-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/Zukhriddinbek-Code/mapty-zuhriddin",
    liveWeb: "https://maptyy-app-js.netlify.app/",
  },
  {
    name: "Food Order App",
    description:
      "Very Simple React Food Order App, food data is fetched from firebase and adding food to cart and posting to a firebase data storage.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "dataFetching",
        color: "pink-text-gradient",
      },
      {
        name: "postRequest",
        color: "red-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: foodOrder,
    source_code_link:
      "https://github.com/Zukhriddinbek-Code/simpleReact-food-order",
    liveWeb: "https://simple-food-order.netlify.app/",
  },
];

// export { services, technologies, experiences, testimonials, projects };
export { services, technologies, education, testimonials, projects };
