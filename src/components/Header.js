import React from 'react';
// import '../css/Header.css';
// import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <ul className="Header__nav">
                <li className="Header__item" key="01">
                    {/*<NavLink to="/" exact={true}>*/}
                        <span className="Header__link"><i className="fa fa-user-circle-o Header__icon" aria-hidden="true"></i><br />o mnie</span>
                    {/*</NavLink>*/}
                </li>
                <li className="Header__item" key="02">
                    {/*<NavLink to="/resume">*/}
                        <span className="Header__link"><i className="fa fa-file-text-o Header__icon" aria-hidden="true"></i><br />CV</span>
                    {/*</NavLink>*/}
                </li>
                <li className="Header__item" key="03">
                    {/*<NavLink to="/works">*/}
                        <span className="Header__link"><i className="fa fa-desktop Header__icon" aria-hidden="true"></i><br />pro ...</span>
                    {/*</NavLink>*/}
                </li>
                <li className="Header__item" key="04">
                    {/*<NavLink to="/contact">*/}
                        <span className="Header__link"><i className="fa fa-paper-plane-o Header__icon" aria-hidden="true"></i><br />kontakt</span>
                    {/*</NavLink>*/}
                </li>
            </ul>
        </div>
    );
}

export default Header;