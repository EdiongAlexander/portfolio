import React from "react";
import { Card } from 'react-bootstrap'

const About = () => {
    return (
        <div className="second">
            <div className="about">
                <h3>ABOUT ME</h3>
            </div>
            <div className="flex">
                <div className="pic">
                <img src="IMG-20210323-WA0002.jpg" alt="profile" />
                <div className="p-icons">
                <i class="devicon-react-original colored"></i>
                <i class="devicon-mongodb-plain colored"></i>
                <i class="devicon-nodejs-plain colored"></i>
                </div>
                </div>
                <Card>
                    <Card.Header style={{paddingTop: 0, paddingBottom: 0}}>
                    <span
                      className="iconify dot"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                   
                    <span
                      className="iconify dot"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                   
                    <span
                      className="iconify dot"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                    </Card.Header>
                    <Card.Body>
                        <h3>Hi :)</h3>
                        <p>I'm Ediong Alexander. I am a frontend developer. I currently work with ReactJS framework. I can say i'm very passionate about web development and i'm also a good team player</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default About;