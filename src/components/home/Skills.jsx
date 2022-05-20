import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import './style.min.css';
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, languages, databases, backend, blockchain, devops }) {
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
    <Jumbotron ref={skillsTabRef} fluid className="m-0" id="skills"  style={{minHeight:"100vh", maxHeight:"100vh", backgroundColor:"#F6F1EC"}}>
      <Container className="p-5 center-div-native-skills">
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
            eventKey="backend"
            title="Backend"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={backend} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="blockchain"
            title="Blockchain"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={blockchain} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="devops"
            title="Devops"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={devops} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
