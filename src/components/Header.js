import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFileCode, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

function Header() {
    return (
        <div className="Header">
            <ul className="Header__nav">
                <li className="Header__item" key="01">
                  <Link to="/" activeClassName="active">
                        <span className="Header__link">
                          <FontAwesomeIcon icon={faUserCircle} size="2x"/>
                          <br />o mnie</span>
                  </Link>
                </li>
                <li className="Header__item" key="02">
                  <Link to="/resume" activeClassName="active">
                        <span className="Header__link">
                          <FontAwesomeIcon icon={faFileCode} size="2x"/>
                          <br />CV</span>
                  </Link>
                </li>
                <li className="Header__item" key="04">
                  <Link to="/contact" activeClassName="active">
                        <span className="Header__link">
                          <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                          <br />kontakt</span>
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;