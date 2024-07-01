import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const Footer = ({ toggle }) => {
    return(
        <div id="footer" className={toggle ? "footer darkmode" : "footer"}>
            <Fade bottom duration={600} delay={200}>
                <p>Designed and Created by Jay Narayan </p>
                <p>Built with React + CSS </p>
                <p><a className="portfolio-repo" href="https://github.com/jaynarayan91/portfolio-website" target="_blank" rel="noreferrer">View Source Code</a></p>
                <p className="email"><a href="mailto:yushiys95@gmail.com" rel="noreferrer">sharma95084@gmail.com</a></p>
            </Fade>
            <Bounce bottom cascade duration={800}>
            <ul className="footer-icon">
                <li><a href="https://www.linkedin.com/in/jay-narayan-704977234/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/its_jay_sharma0732/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://medium.com/@sharma95084" target="_blank" rel="noreferrer"><i className="fab fa-medium-m"></i></a></li>
                <li><a href="https://github.com/jaynarayan91" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
            </ul>
            </Bounce>
        </div>
    )
} 

export default Footer;