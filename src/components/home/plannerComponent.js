import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTrophy,
  faHourglassHalf
} from "@fortawesome/free-solid-svg-icons";
// import { TweenMax, Power3 } from "gsap";


export default ({ planner }) => {
  // let plannerDiv = useRef(null)

  // React.useEffect(() => {
  //   TweenMax.fromTo(plannerDiv, 1.8, {
  //     y: 200,
  //     opacity: 0,
  //     display: 'block',
  //     ease: Power3.easeOut
  //   }, {
  //     y: 0,
  //     opacity: 1
  //   })
  // }, [])

  return (
    <div id="card__div">
      <Link to="/hi" className="card pb-2">
        <i>{planner.verified}</i>
        <div className="card-img-top text-center">
          <img src={require(`../../images/${planner.pic}`)} alt="..." />
        </div>

        <div className="card-body p-1 mt-2 pl-2">
          <h4 className="card-title col-12 truncate">{planner.company}</h4>
          <div id="card__upper__body">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {planner.state},{" "}
              {planner.country}
            </p>
            <p>
              <FontAwesomeIcon icon={faHourglassHalf} /> {planner.exp}{" "}
              Year(s) Exp
            </p>
            <p>
              <FontAwesomeIcon icon={faTrophy} /> {planner.ratings} Ratings
            </p>
          </div>
          <hr />
          <div id="card-lower-body">
            <h4 className="card-text mb-4">
              Description: <span>{planner.description}</span>
            </h4>
            <h4 className="card-text">
              Specialties:{" "}
              <span>
              {planner.categories.map(category => (
                <Link to="/login" className="px-1" key={category}>
                  {category},
                </Link>
              ))}
            </span>
            </h4>
          </div>
          <div id="card-footer">
            <Link
              to="/login"
              className="btn btn-sm btn-primary col-12 mt-1"
            >
              connect
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}