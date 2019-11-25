import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faAt } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
      <div id="topleft" className="row">
        <div id="img__div" className="col-md-3 mb-3">
          <img
            src={require("../../../../images/image1.jpg")}
            alt="profile-img"
          />
          <Link to='/hi'>Edit profile image</Link>
        </div>
        <div className="col-md-9 pl-3">
          <div id="topleft__top">
            <div id='profile-detail' className='mb-4'>
              <h6>Pete Stephanie</h6>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Lagos, Nigeria
              </p>
              <p>
                <FontAwesomeIcon icon={faAt} /> petestephanie@gmail.com
              </p>
            </div>
            <div id="aboutme">
              <p>
                I am a party person. I love hanging out with friends and family,
                mostly on weekends and holidays. Nothing much
              </p>
            </div>
          </div>
          <hr />
          <div className="row" id="topleft__bottom">
            <div className="col-md-4 p-0 mb-3">
              <h6>Prefered Color(s)</h6>
              <span> Blue, Green </span>
            </div>
            <div className="col-md-8 row">
              <div className="col-12 pl-0">
                <h6>Events History</h6>
              </div>
              <div className="col-md-3 col-6">
                <h4>14</h4>
                <span>Uploaded</span>
              </div>
              <div className="col-md-3 col-6">
                <h4>8</h4>
                <span>Completed</span>
              </div>
              <div className="col-md-3 col-6">
                <h4>4</h4>
                <span>Pending</span>
              </div>
              <div className="col-md-3 col-6">
                <h4>2</h4>
                <span>Cancelled</span>
              </div>
              <div className="col-12 text-right mt-2">
                <Link to="/events">~ view all events</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
