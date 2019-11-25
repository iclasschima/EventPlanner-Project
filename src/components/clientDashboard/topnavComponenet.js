import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBell,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

export default ({ action, state }) => {
  const pathname = window.location.pathname;
  let Title;
  switch (pathname) {
    case "/dashboard":
      Title = "Dashboard";
      break;
    case "/connects":
      Title = "Connects";
      break;
    case "/account":
      Title = "Account";
      break;
    case "/help" || "":
      Title = "Help";
      break;
    default:
      Title = "Dashboard";
      break;
  }

  return (
    <div>
      <nav className="navbar">
        <div id="toggler">
          <span id="toggler__btn" onClick={() => action(!state)}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <h6>{Title}</h6>
        </div>
        <div>
          <ul className="navbar-nav ml-auto">
            <form id="navbar-nav__form" className="mr-4 pt-2">
              <input type="text" placeholder="Type in to search..." />
              <Link to="/dashboard" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </form>
            <li className="nav-item">
              <Link to="/connect" className="nav-link">
                <FontAwesomeIcon icon={faComments} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notification" className="nav-link">
                <FontAwesomeIcon icon={faBell} />
              </Link>
            </li>
            <li className="nav-item" id="profile__img">
              <Link to="/account" className="nav-link">
                <img src={require("../../images/microsoft.jpg")} alt="pro-img" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};




