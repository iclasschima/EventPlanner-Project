import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
      <div id="bottomleft">
        <h5>
          <FontAwesomeIcon icon={faPencilAlt} /> Edit Profile
        </h5>
        <div className="col-12 p-3">
          <form className="form-row">
            <div className="form-group col-md-6">
              <label>About Me</label>
              <textarea
                placeholder=" Hi, this will overwrite your previous information."
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group col-md-6">
              <label>Favorites Color(s)</label>
              <textarea
                placeholder="Enter favorite color"
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-sm btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
}