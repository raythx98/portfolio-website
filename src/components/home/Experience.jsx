import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
	return (
		<Jumbotron fluid id="experience" className="m-0" style={{
			backgroundColor: "#F9F4EF"
		}}>
			<h2 className="display-4 pb-5 text-center" style={{ color: "#5E5946" }}>Experiences</h2>
			<Container className="p-7">
				<VerticalTimeline>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: '#AE887B', color: '#F6F1EC' }}
						contentArrowStyle={{ borderRight: '7px solid  #AE887B' }}
						date="Aug 2022 - Present"
						iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
						icon={<WorkIcon />}
					>
						<h3 className="vertical-timeline-element-title">Graduate Tutor</h3>
						<h4 className="vertical-timeline-element-subtitle pt-1">Part-time</h4>
						<h4 className="vertical-timeline-element-subtitle pt-1">National University of Singapore</h4>
						<p>
							Programming Methodology, Microarchitecture
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: '#D9BFB1', color: '#5E5946' }}
						contentArrowStyle={{ borderRight: '7px solid  #D9BFB1' }}
						date="Aug 2022 - Dec 2022"
						iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
						icon={<WorkIcon />}
					>
						<h3 className="vertical-timeline-element-title">Software Engineer</h3>
						<h4 className="vertical-timeline-element-subtitle pt-1">Full-Time</h4>
						<h4 className="vertical-timeline-element-subtitle pt-1">Carousell, Singapore</h4>
						<p>
							Go, PostgreSQL, Redis, Elasticsearch, gRPC, Kafka, Docker, Kubernetes, GCP
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						contentStyle={{ background: '#AE887B', color: '#F6F1EC' }}
						contentArrowStyle={{ borderRight: '7px solid  #AE887B' }}
						date="August 2019 - August 2022"
						iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
						icon={<SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">B.Comp (Honors) in Computer Science</h3>
						<h4 className="vertical-timeline-element-subtitle pt-1">Undergraduate Student</h4>
						<h4 className="vertical-timeline-element-subtitle pt-1">National University of Singapore</h4>
						<p>
							Graduated with distinction.
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: '#D9BFB1', color: '#5E5946' }}
						contentArrowStyle={{ borderRight: '7px solid  #D9BFB1' }}
						date="May 2022 - August 2022"
						iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
						icon={<WorkIcon />}
					>
						<h3 className="vertical-timeline-element-title">Software Engineer</h3>
						<h4 className="vertical-timeline-element-subtitle pt-1">Internship</h4>
						<h4 className="vertical-timeline-element-subtitle pt-1">DBS Bank, Singapore</h4>
						<p>
							Go, MariaDB, Redis, Elasticsearch, Kubernetes, OpenShift, Kafka
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: '#AE887B', color: '#F6F1EC' }}
						contentArrowStyle={{ borderRight: '7px solid  #AE887B' }}
						date="Dec 2021 - Feb 2022"
						iconStyle={{ background: '#5E5946', color: '#F6F1EC' }}
						icon={<WorkIcon />}
					>
						<h3 className="vertical-timeline-element-title">Software Engineer</h3>
						<h4 className="vertical-timeline-element-subtitle pt-1">Internship</h4>
						<h4 className="vertical-timeline-element-subtitle pt-1">Reluvate Technologies, Singapore</h4>
						<p>
							Python, Django, React.js, AWS, Nginx, RESTful APIs, UAT
						</p>
					</VerticalTimelineElement>

				</VerticalTimeline>
			</Container>
		</Jumbotron>

	)
};

export default Experience;