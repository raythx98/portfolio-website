import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  return (
    <footer className="mt-auto py-5 text-center element-font-color footer" style={{fontSize:"1.3rem",  backgroundColor: "#F5F5F5"}}>
      <Container>
        {props.children}
        <i className="fas fa-code footer-object"/> with <i className="fas fa-heart footer-object" /> by{" "}
        <a
          className="badge footer-badge"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/raythx98"
          aria-label="My GitHub"
        >
          Ray Toh
        </a>{" "}
        using <i className="fab fa-react footer-object" style={{fontSize:"1.5rem"}}/>
        <p>
          <small style={{fontWeight:"lighter", fontSize:"0.7rem", color: "#AE887B"}}>
            Project code is open source and forked from Hashir Shoaib.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
