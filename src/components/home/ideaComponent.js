import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faThumbsUp ,faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'

export const IdeaComponent = () => {
    return (
      <div id="IdeaComponent" className="container-fluid">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h5>WHY IS THIS A GREAT IDEA?</h5>
            <hr id="header__hr" />
            <div className="row">
              <div className="col-12 row">
                <FontAwesomeIcon icon={faClock} className="col-3" />
                <div className="col-9 p-0">
                  <h6>Saves Time</h6>
                  <p>
                    You probally have other things on your ToDo list, go do
                    them, we'll cover for you.
                  </p>
                </div>
              </div>
              <div className="col-12 row">
                <div className="col-9 p-0">
                  <h6>Compare Planners & Prices</h6>
                  <p>
                    Save money by comparing planners and prices that suits best,
                    depending on the extent and kind of services they provide.
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faBalanceScaleRight}
                  className="col-3"
                />
              </div>
              <div className="col-12 row">
                <FontAwesomeIcon icon={faThumbsUp} className="col-3" />
                <div className="col-9 p-0">
                  <h6>Trusted Professional Service</h6>
                  <p>
                    Here, you have a pool of professional planners for any kind
                    of services you would want across the nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default IdeaComponent