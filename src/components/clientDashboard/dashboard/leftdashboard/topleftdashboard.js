import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faGlassCheers, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
      <div className="row" id="top__dashboard">
        <div className="col-md-3 col-6 p-2">
          <Link to="/dashbord">
            <h6>
              <FontAwesomeIcon icon={faGlassCheers} />
              Uploaded Events
            </h6>
            <h1>14</h1>
            <p>
              <span>4</span> Upcoming events
            </p>
          </Link>
        </div>
        <div className="col-md-3 col-6 p-2">
          <Link to="/dashbord">
            <h6>
              <FontAwesomeIcon icon={faBriefcase} />
              Proposals
            </h6>
            <h1>9</h1>
            <p>
              <span>2</span> Pending proposals
            </p>
          </Link>
        </div>
        <div className="col-md-3 col-6 p-2">
          <Link to="/dashbord">
            <h6>Locations</h6>
            <h1>14</h1>
            <p>
              <span>2</span> Pending proposals
            </p>
          </Link>
        </div>
        <div className="col-md-3 col-6 p-2">
          <Link to="/dashbord">
            <h6>
              <FontAwesomeIcon icon={faLink} />
              Connects
            </h6>
            <h1>8</h1>
          </Link>
        </div>
      </div>
    );
}