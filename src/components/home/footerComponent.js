import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faAt, faCopyright } from '@fortawesome/free-solid-svg-icons'
library.add(fab);

export default () => {
    return (
      <div id="FooterComponent" className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-8 mb-3">
            <h6>Table45</h6>
            <p>
              We hope to bring life to your events with the service of
              proffesional made available to you here. Thank you
            </p>
          </div>
          <div className="col-lg-2 col-md-4 mb-3">
            <h6>Information</h6>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Popular Searches</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 mb-3">
            <h6>Business</h6>
            <ul>
              <li>
                <Link to="/">Register As Planner</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-4 mb-3">
            <h6>Support</h6>
            <ul>
              <li>
                <Link to="/">How It Works</Link>
              </li>
              <li>
                <Link to="/">Report</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4">
            <h6>Connect</h6>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} /> +234 9031861100
              </li>
              <li>
                <FontAwesomeIcon icon={faAt} /> eventplanner@gmail.com
              </li>
            </ul>
            <div id="social__media__icons">
              <span id="fa-facebook">
                <Link to="/">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </Link>
              </span>
              <span id="fa-twitter">
                <Link to="/">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </Link>
              </span>
              <span id="fa-instagram">
                <Link to="/">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5" id="bottom-footer">
            <p>
              Copyright <FontAwesomeIcon icon={faCopyright} /> 2019
              EventPlanner. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
}