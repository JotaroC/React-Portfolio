import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/screenshot1.png`} className="card-img-top border-bottom"
                                alt="Screenshot of project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Sal Bot</h3>
                            <p className="card-text">
                                SalBot is an AI tutor that can answer any questions, users just need to type in questions and Salbot will automatically reply.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node, Express, Mobile responsive
                                    AI21 API, MediaWiki API
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://jollypong.github.io/SalBot/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/JotaroC/SalBot" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/screenshot2.png`} className="card-img-top border-bottom"
                                alt="Screenshot of project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Wine Cellar</h3>
                            <p className="card-text">
                                Wine cellar is an application that allows users to build their own wine inventory.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node, Express, Handlebars, MySQL,
                                    Sequelize, Slick
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://winecellar-app.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/JotaroC/Wine-Cellar" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/screenshot3.png`} className="card-img-top border-bottom"
                                alt="Screenshot of project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Note-Taker</h3>
                            <p className="card-text">
                                An application that is able to write and save notes so user can organize their thoughts and keep track of tasks they need to complete
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node, Express
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://tranquil-thicket-18490.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/JotaroC/Note-Taker" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/screenshot4.png`} className="card-img-top border-bottom"
                                alt="Screenshot of project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <p className="card-text">
                             A weather dashboard allows user to search one specific city and it will show the current weather condition include the Temperature, Humidity, Wind Speed and UV Index.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Mobile responsive, OpenWeather One Call API, HTML, CSS
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://jotaroc.github.io/Weather-Dashboard/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/JotaroC/Weather-Dashboard" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/screenshot5.png`} className="card-img-top border-bottom"
                                alt="Screenshot of project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Work Day Scheduler</h3>
                            <p className="card-text">
                                A simple calendar application that allows a user to save events for each hour of the day
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, HTML, CSS, Jquery, Bootstraps,
                                    font-awesome
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://jotaroc.github.io/Work-Day-Scheduler/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/JotaroC/Work-Day-Scheduler" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/screenshot6.png`} className="card-img-top border-bottom"
                                alt="Screenshot of project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Code Quiz</h3>
                            <p className="card-text">
                                A timed coding quiz with multiple-choice questions.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, HTML, CSS
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://jotaroc.github.io/Code-Quiz/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/JotaroC/Code-Quiz" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
