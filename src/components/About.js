import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        Hi! I'm Andrew Charnovich, a passionate DevOps Engineer with hands-on
                        experience in building scalable systems and driving technical
                        innovation.
                    </p>
                    <p>
                        Currently pursuing my MBA at Carnegie Mellon University with a focus technical strategy and product managment. I specialize in CI/CD practices and passionate about redesigning legacy systems to meet scalable modern standards. My expertise includes tools like Jenkins, Kubernete, Splunk, Cucumber and Selenium, and Postman.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight">
                            <i className="fas fa-tools"></i> Scripting - Bash/Python 
                        </div>
                        <div className="highlight">
                            <i className="fas fa-graduation-cap"></i> Iac - Puppet/Ansible
                        </div>
                        <div className="highlight">
                            <i className="fas fa-lightbulb"></i> Cloud - AWS
                        </div>
                    </div>
                    <div className="timeline">
                    <div className="timeline-item">
                        <h4>2023 - 2026</h4>
                        <p>MBA at Carnegie Mellon University</p>
                    </div>
                    <div className="timeline-item">
                        <h4>2023 - Present</h4>
                        <p>DevOps Engineer at Carnegie Mellon University</p>
                    </div>
                    <div className="timeline-item">
                        <h4>2020 - 2022</h4>
                        <p>Bachelors in Information Sciences, and Technology at Penn State</p>
                    </div>  
                    <div className="timeline-item">
                        <h4>2020 - 2023</h4>
                        <p>Senior IT Support Consultant at Carnegie Mellon University</p>
                    </div>
                    <div className="timeline-item">
                        <h4>2018 - 2020</h4>
                        <p>IT Coordinator at Douglas Education Center - Tom Savini's School of SFX Makeup</p>
                    </div>
                    <div className="timeline-item">
                        <h4>2015 - 2017</h4>
                        <p>Associates in Information Sciences, and Technology at Penn State</p>
                    </div>  
                </div>
                </div>
            </div>
        </section>
    );
}

export default About;