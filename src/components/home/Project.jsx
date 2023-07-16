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
    imgLink: require("../../assets/img/portfolio.png"),
    name: "Portfolio Website",
    description: "Built a mobile reactive webpage to showcase my projects and achievements. Acquired and managed a domain name and leveraged on Github Pages as a web hosting tool.",
    languages: ["React.js", "Bootstrap", "Material-UI","gh-pages"],
    repo_url: "https://github.com/raythx98/react-portfolio-website",
    demo_url: "https://raythx.com",
  },
  { 
    element: 2,
    imgLink: require("../../assets/img/url-shortener.jpeg"),
    name: "URL Shortener",
    description: "Full stack web application with multiple functionalities such as custom domain & validity durations. Servers are hosted on AWS EC2 instances and reverse proxying is setup using Nginx.",
    languages: ["MySQL", "Express.js", "React.js", "Node.js", "AWS", "Nginx"],
    repo_url: "https://github.com/raythx98/url-shortener",
    demo_url: "http://url.raythx.com",
  },
  { 
    element: 2,
    imgLink: require("../../assets/img/blog.jpeg"),
    name: "Blog Site",
    description: "Static blog site built using Gatsby to document my programming journey and other thoughts. Serves as a reference when updating old projects, as well as a knowledge base for like-minded people.",
    languages: ["React.js", "GraphQL", "Gatsby", "gh-pages"],
    repo_url: "https://github.com/raythx98/personal-blog",
    demo_url: "https://blog.raythx.com",
  },
  { 
    element: 1,
    imgLink: require("../../assets/img/java-app.png"),
    name: "Java App Dev",
    description: "CANdidates is a powerful contact management application optimised for job recruiters; a brownfield project based on Address Book. Done as part of NUS software engineering coursework, CS2103T.",
    languages: ["Java", "JavaFX", "Travis CI", "JUnit5"],
    repo_url: "https://github.com/raythx98/Java-Address-Book#candidates",
    demo_url: "https://raythx98.github.io/Java-Address-Book/",
  },
];

const Project = ({ heading, username, length, specfic }) => {
  
  return (
    <Jumbotron fluid id="projects" className="m-0" style={{backgroundColor:"#F9F4EF"}}>
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
