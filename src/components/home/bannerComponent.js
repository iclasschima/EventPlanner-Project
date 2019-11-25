import React from 'react'
import {Link} from 'react-router-dom'

const BannerComponent = () => {
    return (
      <div id="banner" className="container-fluid">
        <div className="row">
          <div className="col-md-5" id="banner__text">
            <h1>Do you have an event coming up and needs 5 star planners?</h1>
            <h5>Say hooray! Because you definitely are not lost</h5>
            <button className="btn btn-outline-primary mt-3">
              Get One Now
            </button>
            <h6 className='mt-2 pl-1'>
              <Link to="/planner-signup">I am a planner!</Link>
            </h6>
          </div>
        </div>
      </div>
    );
}

export default BannerComponent
