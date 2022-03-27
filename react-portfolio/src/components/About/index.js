import React from 'react';

export const About = () => {
    return (
        <div className="about">
              <h2>Nice to meet you.</h2>
            <strong>
            I'm a full stack web developer with extensive experience in coding and Mathematics. Currently pursuing a Certificate in Full Stack Web Development from the University of Toronto, developing skills in HTML, CSS, and JavaScript and strengths in self-learning, creativity, and teamwork.  With each project, my aim is to best engage my audience for an impactful user experience. I applied aspects of API and agile development in a recent  group project . Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Excited to develop responsive websites. Positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging background in digital marketing and finance. 
            </strong>

            <h2 className="mt-5">Skills</h2>
            <div className="content">
                <div>
                    <strong>Languages</strong>
                    <li>JavaScript</li>
                    {/* <li></li>
                <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Frameworks/Libraries</strong>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                </div>
                <div>
                    <strong>Databases</strong>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    {/* <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Tools</strong>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Webpack</li>
                    <li>DevTools</li>
                </div>
            </div>
        </div>
    )
}

export default About;