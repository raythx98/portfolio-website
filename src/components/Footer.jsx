import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center element-font-color footer">
      <Container>
        {props.children}
        <i className="fas fa-code footer-object" /> with <i className="fas fa-heart footer-object" /> by{" "}
        <a
          className="badge badge-dark footer-badge"
          rel="noopener"
          href="https://github.com/raythx98"
          aria-label="My GitHub"
        >
          Ray Toh
        </a>{" "}
        using <i className="fab fa-react footer-object" />
        <p>
          <small className="text-muted">
            Project code is open source and forked from Hashir Shoaib.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
