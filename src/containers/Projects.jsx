import React from 'react';
import Slide from 'react-reveal/Slide'
import ProjectCard from '../components/ProjectCard'
import Fotoset from '../images/fotoset.png'
import Travelatr from '../images/travelatr.png'
import QuickPix from '../images/quickpix.png'
import SpaceBuddies from '../images/spacebuddies.png'
import Portfolio from '../images/portfolio.png'
import DisneyPlusClone from '../images/disneyclone.png'
import AmazonClone from '../images/amazonclone.png'

const Projects = ({ toggle }) => {
    return (
    <div id="projects" className={toggle ? "projectspage darkmode" : "projectspage"}>
            <Slide left duration={800}>
                <h1>TECHNICAL PROJECTS</h1>
            </Slide>
        <div className="projectscontainer">
                <ProjectCard 
                    name={"Fotoset"}
                    image={Fotoset}
                    tags={["React", "Redux", "MySQL", "JWT", "HTML", "CSS", "Maps JavaScript API", "Places API", "Geocoding API", "Yahoo Weather API", "EmailJS"]}
                    description={"A photo sharing application with camera setting information, include map search, and weather search."}
                    frontend="https://github.com/jaynarayan91/Fotoset-Frontend"
                    backend="https://github.com/jaynarayan91/Fotoset-Backend"
                    live="https://fotoset.netlify.app/"
                    repo=""
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Travelatr"}
                    image={Travelatr}
                    tags={["React", "Rails", "PostgreSQL", "JWT", "HTML", "CSS", "Places API", "Skyscanner API"]}
                    description={"A travel information website provides latest travel destination recommendations, including facts, and flights search."}
                    frontend="https://github.com/jaynarayan91/Travelatr-Frontend"
                    backend="https://github.com/jaynarayan91/Travelatr-Backend"
                    live="https://travelatr.netlify.app/"
                    repo=""
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Amazon Clone"}
                    image={AmazonClone}
                    tags={["React", "React Context API", "Firebase", "Stripe", "Material-UI", "HTML", "CSS"]}
                    description={"This is an Amazon Clone that implemented the Stripe payment processor."}
                    frontend="https://github.com/jaynarayan91/Amazon-Clone/tree/main/src"
                    backend="https://github.com/jaynarayan91/Amazon-Clone/tree/main/functions"
                    live="https://e-commerce-store-app.web.app/"
                    repo=""
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Disney+ Clone"}
                    image={DisneyPlusClone}
                    tags={["React", "Redux", "Firebase", "Styled-Components", "HTML", "CSS"]}
                    description={"This is a Disney+ Clone that allows user to sign in with Google account and see all the movies' details."}
                    frontend="https://github.com/jaynarayan91/Disney-Plus-Clone"
                    backend="https://github.com/jaynarayan91/Disney-Plus-Clone/blob/main/src/firebase.js"
                    live="https://disney-plus-clone-app-e706d.web.app/"
                    repo=""
                    toggle={toggle}
                    />
                <ProjectCard 
                    name={"Space Buddies"}
                    image={SpaceBuddies}
                    tags={["Ruby", "SQLite3"]}
                    description={"The encylopedia for space pets! A Ruby CLI application that allows user to sign in or sign up and meet some intergalactic friends!"}
                    frontend=""
                    backend=""
                    live=""
                    video=""
                    repo="https://github.com/jaynarayan91/project-1"
                    toggle={toggle}
                />
                <ProjectCard 
                    name={"Portfolio Website"}
                    image={Portfolio}
                    tags={["React", "HTML", "CSS", "EmailJS"]}
                    description={"This is my portfolio website. Built with React and Vanilla CSS."}
                    frontend=""
                    backend=""
                    live=""
                    video=""
                    repo="https://github.com/jaynarayan91/portfolio-website"
                    toggle={toggle}
                />
        </div>
    </div>
    )
}

export default Projects;