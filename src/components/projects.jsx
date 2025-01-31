import React from "react";
import { Fylo, MyrtleLab, WeatherApp } from "../images";


const Projects = () => {
    return (
        <div className="projects">
            <h3>PROJECTS</h3>
            <div className="images">
                <div className="image" >
                    <img src={Fylo} alt="fylo homepage" />
                    {/* <div className="year-container">
                        <p className="year">CSS</p>
                    </div> */}
                    <p><a href="https://eager-clarke-6d296f.netlify.app/" target="blank" className="p-links">FYLO HOMEPAGE</a></p>
                </div>

                <div className="image">
                    <img src={WeatherApp} alt="Weather-App" />
                    {/* <div className="year-container">
                        <p className="year">React</p>
                    </div> */}
                    <p><a href="https://weather-app-ediong-alexanders-projects.vercel.app/" target="blank" className="p-links">WEATHER APP</a></p>
                </div>

                <div className="image">
                    <img src={MyrtleLab} alt="myrtlelab" />
                    {/* <div className="year-container">
                        <p className="year">React</p>
                    </div> */}
                    <p><a href="https://myrtle-lab.vercel.app/" target="blank" className="p-links">MYRTLE LAB</a></p>
                </div>

            </div>
        </div>
    )
}

export default Projects;