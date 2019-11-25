import React from "react";
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <div className="col-md-7 p-0" id="recent__connects__div">
      <div id="recent__connects">
        <h5>
          <FontAwesomeIcon icon={faLink} /> Recent Connects
        </h5>
        <div id="recent__connects__body">
          <Link
            to="/dashbaord"
            id="recent__connects__body__content"
            className="row"
          >
            <div className="col-2">
              <img src={require("./../../../../images/image1.jpg")} alt="hi" />
            </div>
            <div className="col-10">
              <h6>iClass Chima</h6>
              <p>Good day ma, I am waiting for your reponse</p>
              <span>08:51</span>
            </div>
          </Link>
          <Link
            to="/dashbaord"
            id="recent__connects__body__content"
            className="row"
          >
            <div className="col-2">
              <img src={require("./../../../../images/forget.JPG")} alt="hi" />
            </div>
            <div className="col-10">
              <h6>Empire Cakes</h6>
              <p>Good day ma, I am waiting for your reponse</p>
              <span>Yesterday</span>
            </div>
          </Link>
          <Link
            to="/dashbaord"
            id="recent__connects__body__content"
            className="row"
          >
            <div className="col-2">
              <img src={require("./../../../../images/img3.png")} alt="hi" />
            </div>
            <div className="col-10">
              <h6>De Elite Cosmetics</h6>
              <p>Good day ma, I am waiting for your reponse</p>
              <span>12 / 11 / 19</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
