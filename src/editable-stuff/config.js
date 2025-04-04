// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // gradientColors: "#AE887B, #C3C1AB, #F0DED0, #D9BFB1, #5E5946",
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f", 
  // #ecf0f1, 
  firstName: "Ray Toh",
  middleName: "",
  lastName: "H. X.",
  message: "Software Engineer | Large-Scale Systems | Low-Level Optimizations",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/raythx98",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/raythx98/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ray.thx/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/raythx/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/ray.png"),
  imageSize: 375,
  message:
    "I am a passionate software engineer specializing in large-scale microservices and low-level optimizations." ,
  message2:
    "Driven by a desire to build robust and scalable systems, I am particularly drawn to the realm of large-scale microservices. I am captivated by the intricacies involved in architecting and developing software that can seamlessly handle massive workloads while maintaining high availability and fault tolerance. ",
  message3:
    "My passion extends to the realm of low-level optimization. I thrive on the challenge of analyzing and fine-tuning code to squeeze out every ounce of performance. It brings me great satisfaction to meticulously optimize algorithms, data structures, and system interactions.",
  resume: require("../assets/Ray Toh CV.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "raythx98", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/ray.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/ray.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "C++", value: 90 },
    { name: "Go", value: 85 },
    { name: "Python", value: 85 },
    { name: "C#", value: 80 },
  ],
  databases: [
    { name: "PostgreSQL", value: 90 },
    { name: "MySQL", value: 90 },
    { name: "Redis", value: 80 },
    { name: "Elasticsearch", value: 80 },
    { name: "MongoDB", value: 70 },
  ],
  technologies: [
    { name: "Git", value: 90 },
    { name: "AWS", value: 90 },
    { name: "Docker", value: 85 },
    { name: "Kubernetes", value: 80 },
    { name: "Kafka", value: 80 },
    { name: "Solace", value: 80 },
    { name: "gRPC", value: 80 },
    { name: "Google Cloud", value: 75 },
  ],
  frameworks: [
    { name: ".Net 6.0", value: 90 },
    { name: "Gin (Go HTTP)", value: 90 },
    { name: "Gorm (Go ORM)", value: 90 },
    { name: "Golang-migrate (Database Migration)", value: 90 },
    { name: "React.js", value: 80 },
    { name: "Node.js", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
  "I am actively seeking exciting full-time Software Engineering opportunities within tech companies or trading firms! If you happen to come across any open positions, have inquiries to make, or simply want to connect and say hello, please don't hesitate to reach out to me via email at",
  email: "raythx98@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    // {
    //   role: 'Software Engineer',// Here Add Company Name
    //   companylogo: require('../assets/img/dell.png'),
    //   date: 'June 2018 – Present',
    // },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
