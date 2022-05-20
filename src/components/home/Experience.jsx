import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
 return (
	 <Jumbotron fluid id="experience" className="m-0" style={{
		minHeight: "100vh", backgroundColor:"#F6F1EC"
	}}>
        <h2 className="display-4 pb-5 text-center" style={{color:"#5E5946"}}>Experiences</h2>
		<Container className="p-7">
			 <VerticalTimeline>

				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#AE887B', color: '#F6F1EC' }}
					contentArrowStyle={{ borderRight: '7px solid  #AE887B' }}
					date="May 2022 - August 2022"
					iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Agile Software Engineer Internship</h3>
					<h4 className="vertical-timeline-element-subtitle">DBS Bank, Singapore</h4>
					<p>
                    Golang, MariaDB, Redis, Elasticsearch, Kubernetes, OpenShift, Apache, Kafka
					</p>
				  </VerticalTimelineElement>

				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#D9BFB1', color: '#5E5946' }}
					contentArrowStyle={{ borderRight: '7px solid  #D9BFB1' }}
					date="Dec 2021 - Feb 2022"
					iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Backend Engineer Internship</h3>
					<h4 className="vertical-timeline-element-subtitle">Reluvate Technologies, Singapore</h4>
					<p>
                    Django, Python, React.js, RESTful APIs, UAT, AWS EC2, AWS RDS, AWS S3
					</p>
				  </VerticalTimelineElement>

				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#AE887B', color: '#F6F1EC' }}
					contentArrowStyle={{ borderRight: '7px solid  #AE887B' }}
					date="May 2021 - August 2021"

					iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
					icon={<WorkIcon />}
				  >
					<h3 className="text-align vertical-timeline-element-title">Machine Learning Engineer Internship</h3>
					<h4 className="vertical-timeline-element-subtitle">Defence Science & Technology Agency, Singapore</h4>
					<p>
                    Aritificial Intelligence, Deep Reinforcement Learning, Unity
					</p>
				  </VerticalTimelineElement>

				   <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: '#D9BFB1', color: '#5E5946' }}
					contentArrowStyle={{ borderRight: '7px solid  #D9BFB1' }}
					date="August 2019 - May 2023"
					iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
					icon={<SchoolIcon />}
				  >
					<h3 className="vertical-timeline-element-title">B.Comp (Honors) in Computer Science
					</h3><h4 className="vertical-timeline-element-subtitle">National Univeristy of Singapore</h4>					
					<p>
					 Graduated with distinction.
					</p>
				  </VerticalTimelineElement>

			</VerticalTimeline>
		</Container>
	</Jumbotron>

)
};

export default Experience;