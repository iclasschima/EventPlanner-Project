import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faGlassCheers,
  faDatabase,
  faLink,
  faQuestionCircle,
  faSignOutAlt,
  faCog
} from "@fortawesome/free-solid-svg-icons";

export default ({state}) => {
    return (
      <div id="sidenav__wrapper" className={state ? "sidenav__active" : ""}>
        <h5>
          Table45 | <span>Client</span>
        </h5>
        <div id="sideMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <FontAwesomeIcon icon={faDatabase} /> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/account" className="nav-link">
                <FontAwesomeIcon icon={faUserAlt} /> Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/account" className="nav-link">
                <FontAwesomeIcon icon={faGlassCheers} /> Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/connects" className="nav-link">
                <FontAwesomeIcon icon={faLink} /> Connects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link">
                <FontAwesomeIcon icon={faCog} /> Setup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link">
                <FontAwesomeIcon icon={faQuestionCircle} /> Help
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signout" className="nav-link">
                <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}
