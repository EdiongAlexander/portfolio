import React from "react";


const Projects = () => {
    return (
        <div className="projects">
            <h3>PROJECTS</h3>
            <div className="images">
                <div className="image" >
                    <img src="image (2).png" alt="fylo homepage" />
                    <div className="year-container">
                        <p className="year">2021</p>
                    </div>
                    <p><a href="https://eager-clarke-6d296f.netlify.app/"  className="p-links">FYLO HOMEPAGE</a></p>
                </div>

                <div className="image">
                    <img src="image (3).png" alt="Edconnect-weekly" />
                    <div className="year-container">
                        <p className="year">2021</p>
                    </div>
                    <p><a href="https://ediong-project-explorer.herokuapp.com/"  className="p-links">PROJECT EXPLORER</a></p>
                </div>

                <div className="image">
                    <img src="image (3).png" alt="Edconnect-weekly" />
                    <div className="year-container">
                        <p className="year">2021</p>
                    </div>
                    <p><a href="https://ediong-project-explorer.herokuapp.com/"  className="p-links">PROJECT EXPLORER</a></p>
                </div>

            </div>
        </div>
    )
}

export default Projects;