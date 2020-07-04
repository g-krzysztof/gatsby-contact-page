import React from 'react';
import MyFoto from "./myFoto"
// import '../css/ProfileCard.css';
// import selffoto from '../utils/my-photo-kadr.jpg';
// import pdf from '../utils/krzysztofgryc.pdf';

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="ProfileCard__content">
                <div className="ProfileCard__image"></div>
                <div className="ProfileCard__self-wrapper">
                    <a href="https://krzysztofg.pl">
                        {/*<img className="ProfileCard__self-image" src={selffoto} alt="Krzysztof Gryc" />*/}
                        <MyFoto />
                    </a>
                </div>
                <div className="ProfileCard__title">Krzysztof Gryc</div>
                <div className="ProfileCard__subtitle">Front-End Developer</div>
                <div className="ProfileCard__social">
                    {/* <a href="https://dribbble.com/"> <span className="fab fa-dribbble"></span> </a> */}
                    {/* <a href="https://twitter.com/"> <span className="fab fa-twitter"></span> </a> */}
                    <a href="https://github.com/g-krzysztof" target="_blank" rel="noopener noreferrer"> <span className="fab fa-github"></span> </a>
                    <a href="https://linkedin.com/in/krzysztof-gryc" target="_blank" rel="noopener noreferrer"> <span className="fab fa-linkedin"></span> </a>
                    {/* <a href="https://www.spotify.com/"> <span className="fab fa-spotify"></span> </a> */}
                    {/* <a href="https://stackoverflow.com/"> <span className="fab fa-stack-overflow"></span> </a> */}
                </div>
                <div className="ProfileCard__bottom">
                    {/*<button className="ProfileCard__bottom-btn"><a href={pdf} target="_blank" rel="noopener noreferrer">pobierz cv <i className="fas fa-download"></i></a></button>*/}
                    <button className="ProfileCard__bottom-btn"><a href="tel:+4853-538-3727"><i className="fas fa-phone"></i> 535 383 727</a></button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
