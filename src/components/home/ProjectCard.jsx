import React  from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import './style.min.css';

const ProjectCard = ({ value }) => {
  const {
    element,
    imgLink,
    name,
    description,
    languages,
    repo_url,
    demo_url,
  } = value;
  return (
    <Col md={6}>
      <Card className={`card shadow-lg mb-5 rounded color-element${element}`}>
        <Card.Img
          src={imgLink}
          className="card-img-top"
          alt="..."
        ></Card.Img>
        <Card.Body className="ml-3 mr-3 mb-3">
          <Card.Title as="h4" style={{color:"#5E5946"}}>{name || <Skeleton />} </Card.Title>
          <Card.Text style={{color:"#5E5946"}}>
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </Card.Text>

          <hr />
          {languages.length ? (
            <Language languages={languages} element = {element} />
          ) : (
            <Skeleton count={3} />
          )}
          {!repo_url && !demo_url ? <Skeleton count={2} /> : null}
          {repo_url ? <RepoCardButtons repo_url={repo_url} /> : null}
          {demo_url ? <DemoCardButtons demo_url={demo_url} /> : null}
        </Card.Body>
      </Card>
    </Col>
  );
};

const RepoCardButtons = ({ repo_url }) => {
  return (
    <>
      <a 
        href={repo_url} 
        target=" _blank" 
        className="btn btn-outline-secondary mr-3 mt-3"
      >
        <i className="fab fa-github" /> Project Repo
      </a>
    </>
  );
};

const DemoCardButtons = ({ demo_url }) => {
  return (
    <>
      <a 
        href={demo_url} 
        target=" _blank" 
        className="btn btn-outline-secondary mt-3"
      >
        <i className="fab fa-github" /> View
      </a>
    </>
  );
};

const Language = ({ languages, element }) => {

  return (
    <div>
      {languages.length
        ? languages.map((language) => (
            <a
              key={language} 
              className={`badge badge-light card-link element${element}`}
              href={`https://www.google.com/search?q=${language}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language}
            </a>
          ))
        : "No code required."}
    </div>
  );
};

export default ProjectCard;
