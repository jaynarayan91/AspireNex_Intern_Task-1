import React from 'react';
import Fade from 'react-reveal/Fade';

const ProjectCard = ({ image, name, description, live,  repo, toggle }) => {

    const checkLink = (link) => {
        if(link.length>0){
            return true
        }else{
            return false
        }
    }

    return (
    <Fade bottom duration={1000} delay={200}>
        <div className={toggle ? "project-card darkmode" : "project-card"}>
                <div className="project-img">
                    <img src={image} alt="project img"/>
                </div>
            <div className="project-content">
                <div className="links">
                    { checkLink(live) ? <a href={live} target="_blank" rel="noreferrer">
                    <i className="fas fa-desktop"></i>
                        <b>Live</b></a>:null}
                    { checkLink(repo) ? <a href={repo} target="_blank" rel="noreferrer">
                    <i className="fab fa-github-alt"></i>
                        <b>Repo</b></a>:null}
                </div>
                <div className="project-details">
                    <h2>{name}</h2>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
    )
}

export default ProjectCard;