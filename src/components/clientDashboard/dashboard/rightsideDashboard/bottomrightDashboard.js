import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
      <div id="news__feeds">
        <h5>
          <FontAwesomeIcon icon={faMicrophoneAlt} /> New Feeds
        </h5>
        <div id="news__feeds__body">
          <div id="news__feeds__body__content">
            <h6>
              <FontAwesomeIcon icon={faMapPin} />
              Attention
            </h6>
            <p>
              Please be mindful of the kind of information you put out. See
              privacy policy.
            </p>
          </div>
          <div id="news__feeds__body__content">
            <h6>Today</h6>
            <p>
              Eko Hotel is free for bookings from 03 Dec, 19 till 23 Dec, 19.
            </p>
          </div>
          <div id="news__feeds__body__content">
            <h6>Yesterday</h6>
            <p>
              Eko Hotel is free for bookings from 03 Dec, 19 till 23 Dec, 19.
            </p>
          </div>
          <div id="news__feeds__body__content">
            <h6>12 / 11 / 19</h6>
            <p>
              Eko Hotel is free for bookings from 03 Dec, 19 till 23 Dec, 19.
            </p>
          </div>
        </div>
      </div>
    );
}
