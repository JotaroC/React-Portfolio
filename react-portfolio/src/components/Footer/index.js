import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/xingzhi-chang/">
                <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/JotaroC">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:cxz980314@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="assets/Xingzhi_Chang_CS.pdf">
                <i class="fas fa-file-pdf"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="tel:905-341-2419">
                <i class="fas fa-phone-volume"></i>
            </a><div className="text-right">Copyright © Xingzhi Chang</div>
        </footer>
    )
}

export default Footer