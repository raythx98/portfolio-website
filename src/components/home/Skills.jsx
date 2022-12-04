import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import './style.min.css';
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, languages, databases, technologies, frameworks }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="m-0" id="skills"  style={{backgroundColor:"#F6F1EC"}}>
      <Container className="p-5">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center" style={{color:"#5E5946"}}>
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="languages"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="languages"
            title="Languages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={languages} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="databases"
            title="Databases"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={databases} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="technologies"
            title="Technologies"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={technologies} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="frameworks"
            title="Frameworks"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={frameworks} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
