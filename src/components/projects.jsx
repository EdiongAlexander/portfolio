import React from "react";


const Projects = () => {
    return (
        <div className="projects">
            <h3>PROJECTS</h3>
            <div className="images">
                <div className="image" >
                    <img src="image-2.png" alt="fylo homepage" />
                    {/* <div className="year-container">
                        <p className="year">CSS</p>
                    </div> */}
                    <p><a href="https://eager-clarke-6d296f.netlify.app/" target="blank" className="p-links">FYLO HOMEPAGE</a></p>
                </div>

                <div className="image">
                    <img src="weather-app.jpg" alt="Weather-App" />
                    {/* <div className="year-container">
                        <p className="year">React</p>
                    </div> */}
                    <p><a href="https://weather-app-ediong-alexanders-projects.vercel.app/" target="blank" className="p-links">WEATHER APP</a></p>
                </div>

                <div className="image">
                    <img src="food-zero.png" alt="food-zero" />
                    {/* <div className="year-container">
                        <p className="year">React</p>
                    </div> */}
                    <p><a href="https://food-zero-restaurant.vercel.app/" target="blank" className="p-links">FOOD ZERO</a></p>
                </div>

            </div>
        </div>
    )
}

export default Projects;