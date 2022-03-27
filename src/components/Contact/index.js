import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Let's Connect!</h1>
            <iframe
                title="location"
                src='https://maps.google.com/maps?q=oakville&t=&z=13&ie=UTF8&iwloc=&output=embed'
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/xingzhi-chang/">
                        https://www.linkedin.com/in/xingzhi-chang/
                    </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/JotaroC">
                        https://github.com/JotaroC
                    </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:cxz980314@gmail.com">
                        mailto:cxz980314@gmail.com
                    </a>
                </p>

                <h4>Resume</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="assets/Xingzhi_Chang_CS.pdf">
                        XingzhiChang_Resume
                    </a>
                </p>

                <h4>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:905-341-2419">
                        905-341-2419
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Contact;