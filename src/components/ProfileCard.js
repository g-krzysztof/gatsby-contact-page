import React from 'react';
import MyFoto from "./myFoto"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faPhone } from '@fortawesome/free-solid-svg-icons'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import pdf from '../utils/krzysztofgryc.pdf';

config.autoAddCss = false

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="ProfileCard__content">
                <div className="ProfileCard__image"></div>
                <div className="ProfileCard__self-wrapper">
                    <a href="https://krzysztofg.pl">
                        <MyFoto />
                    </a>
                </div>
                <div className="ProfileCard__title">Krzysztof Gryc</div>
                <div className="ProfileCard__subtitle">Front-End Developer</div>
                <div className="ProfileCard__social">
                    <a href="https://github.com/g-krzysztof" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                    <a href="https://linkedin.com/in/krzysztof-gryc" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" style={{paddingLeft: '5px'}}/>
                    </a>
                </div>
                <div className="ProfileCard__bottom">
                    <button className="ProfileCard__bottom-btn">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            pobierz cv
                            <FontAwesomeIcon icon={faDownload} size="lg" style={{paddingLeft: '5px'}}/>
                        </a>
                    </button>
                    <button className="ProfileCard__bottom-btn">
                        <a href="tel:+4853-538-3727">
                            <FontAwesomeIcon icon={faPhone} size="lg" style={{paddingRight: '5px'}}/>
                            535 383 727</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
