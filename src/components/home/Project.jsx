import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const dummyProjectsArr = [
  {
    element: 1,
    name: null,
    description: null,
    svn_url: null,
    stargazers_count: null,
    languages_url: null,
    pushed_at: null,
  },
  {
    element: 2,
    name: null,
    description: null,
    svn_url: null,
    stargazers_count: null,
    languages_url: null,
    pushed_at: null,
  },
];

const projectsArray = [
  { 
    element: 1,
    imgLink: require("../../assets/img/dell.png"),
    name: "Portfolio Website",
    description: "Built a mobile reactive webpage to showcase my projects and achievements. Acquired and managed a domain name and leveraged on Github Pages as a web hosting tool",
    languages: ["React", "Bootstrap", "Material-UI", "SEO","gh-pages"],
    repo_url: "https://github.com/raythx98/react-portfolio-website",
    demo_url: "https://raythx.com",
  },
  { 
    element: 2,
    imgLink: require("../../assets/img/dell.png"),
    name: "Telegram Bot",
    description: "Developed a telegram bot using serverless architecture to send daily quirky messages to and family and friends. This is done asynchronously using serverless.",
    languages: ["Python", "Mongo DB", "AWS Lambdas", "Serverless", "Node.js"],
    repo_url: "https://github.com/raythx98/My-Quirky-Bot",
    demo_url: "https://github.com/raythx98/My-Quirky-Bot#telegram-bot",
  },
  { 
    element: 2,
    imgLink: require("../../assets/img/dell.png"),
    name: "E-Commerce App",
    description: "Developed a full-stack serverless web application using based on the MERN-AWS stack. Implemented CRUD operations on node.js using JWT Authentication with SHA-256 encryption",
    languages: ["JavaScript", "Mongo DB", "Express", "React", "Node.js", "Redux", "AWS EC2"],
    repo_url: "https://github.com/raythx98/e-commerce",
    demo_url: "https://github.com/raythx98/e-commerce#e-commerce",
  },
  { 
    element: 1,
    imgLink: require("../../assets/img/dell.png"),
    name: "Java App Development",
    description: "CANdidates is a powerful contact management application optimised for job recruiters; a brownfield project based on Address Book. Done as part of software engineering coursework, NUS CS2103T Software Engineering.",
    languages: ["Java", "JavaFX", "Travis CI", "JUnit5"],
    repo_url: "https://github.com/raythx98/Java-Address-Book#candidates",
    demo_url: "https://raythx98.github.io/Java-Address-Book/",
  },
];

const Project = ({ heading, username, length, specfic }) => {
  
  return (
    <Jumbotron fluid id="projects" className="m-0" style={{minHeight:"100vh", backgroundColor:"#F6F1EC"}}>
      <Container className="">
        <h2 className="display-4 pb-5 text-center" style={{color:"#5E5946"}}>{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
