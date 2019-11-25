import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
      <div className="col-md-5 pr-0" id="upcoming__events__div">
        <div id="upcoming__events">
            <h5>
            <FontAwesomeIcon icon={faGlassCheers} /> Upcoming Events
          </h5>
            {/* <Link to="/dashboard">+ Add New Events</Link> */}
          
          <div id="upcoming__events__body" className="row">
            <Link
              to="/dashboard"
              id="upcoming__events__body__content"
              className="col-12 pb-2 pl-3"
            >
              <h6>Elite Gathering 2019, Eko Hotels</h6>
              <p>Date: 1st Jan, 2020</p>
              <p>Venue: Eko hotels & Suits</p>
            </Link>
            <Link
              to="/dashboard"
              id="upcoming__events__body__content"
              className="col-12 pb-2 pl-3"
            >
              <h6>Elite Gathering 2019, Eko Hotels</h6>
              <p>Date: 1st Jan, 2020</p>
              <p>Venue: Eko hotels & Suits</p>
            </Link>
            <Link
              to="/dashboard"
              id="upcoming__events__body__content"
              className="col-12 pb-2 pl-3"
            >
              <h6>Elite Gathering 2019, Eko Hotels</h6>
              <p>Date: 1st Jan, 2020</p>
              <p>Venue: Eko hotels & Suits</p>
            </Link>

          </div>
        </div>
      </div>
    );
}
