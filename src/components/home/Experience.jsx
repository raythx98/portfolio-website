import React, { useState, useEffect, useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
 return (
	 <Jumbotron fluid id="experience" className="bg-light m-0">
        <h2 className="display-4 pb-5 text-center">Experiences</h2>
		<Container className="p-7">
			 <VerticalTimeline>

				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="May 2022 - August 2022"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Dec 2021 - Feb 2022"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="May 2021 - August 2021"

					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
					contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
					date="August 2019 - May 2023"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<SchoolIcon />}
				  >
					<h3 className="vertical-timeline-element-title">B.Comp (Honors) in Computer Science
					</h3><h4 className="vertical-timeline-element-subtitle">National Univeristy of Singapore</h4>					
					<p>
					 Graduated with distinction.
					</p>
				  </VerticalTimelineElement>


				  <VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					icon={<StarIcon />}
				  />
			</VerticalTimeline>
		</Container>
	</Jumbotron>

)
};

export default Experience;