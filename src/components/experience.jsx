import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge'



const Experience = () => {
    return (
        <div className="experience">
            <div className="large" >
                <p>EXPERIENCE</p>
            </div>

            <div className="vertical">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date='2023-Present'
                        iconStyle={{
                            paddingTop: "0.6em",
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<i className="devicon-react-original experience-icon"></i>}
                    >
                        <div style={{ textAlign: "left", marginBottom: "4px" }}>
                            <Badge pill className="main-badge mr-2 mb-2">ReactJs</Badge>
                        </div>

                        <h3 style={{ textAlign: "left" }} className="vertical-timeline-element-title">Frontend Developer (Intern)</h3>
                        <h4 style={{ textAlign: "left" }} className="vertical-timeline-element-subtitle">SkillGarage</h4>
                        <div style={{ textAlign: "left", marginTop: "15px" }}>
                            <Badge pill className="experience-badge mr-2 mb-2">HTML</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">CSS</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">Tailwind</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">JavaScript</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">React</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">Redux</Badge>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date='2021-2022'
                        iconStyle={{
                            paddingTop: "0.6em",
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<i className="devicon-react-original experience-icon"></i>}
                    >
                        <div style={{ textAlign: "left", marginBottom: "4px" }}>
                            <Badge pill className="main-badge mr-2 mb-2">ReactJs</Badge>
                        </div>

                        <h3 style={{ textAlign: "left" }} className="vertical-timeline-element-title">Fullstack Development (Student)</h3>
                        <h4 style={{ textAlign: "left" }} className="vertical-timeline-element-subtitle">Edconnect.ng</h4>
                        <div style={{ textAlign: "left", marginTop: "15px" }}>
                            <Badge pill className="experience-badge mr-2 mb-2">HTML</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">CSS</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">JavaScript</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">React</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">NodeJs</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">Mongoose</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">Jest</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">Express</Badge>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date='Feb - Mar 2021'
                        iconStyle={{
                            paddingTop: "0.6em",
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<i className="devicon-javascript-plain experience-icon"></i>}
                    >
                        <div style={{ textAlign: "left", marginBottom: "4px" }}>
                            <Badge pill className="main-badge mr-2 mb-2">JavaScript</Badge>
                        </div>

                        <h3 style={{ textAlign: "left" }} className="vertical-timeline-element-title">Web Development (Student)</h3>
                        <h4 style={{ textAlign: "left" }} className="vertical-timeline-element-subtitle">Zuri internship</h4>
                        <div style={{ textAlign: "left", marginTop: "15px" }}>
                            <Badge pill className="experience-badge mr-2 mb-2">HTML</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">CSS</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">JavaScript</Badge>
                            <Badge pill className="experience-badge mr-2 mb-2">Bootstrap</Badge>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{
                        paddingTop: "0.6em",
                        background: "#AE944F",
                        color: "#fff",
                        textAlign: "center",
                    }}
                    icon={<i className="devicon-react-original mt-2 experience-icon"></i>}
                >
                   
                </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience;