import React, {useState} from 'react'
import Planner from './plannerComponent'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLessThan,
  faGreaterThan
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  const topPlanner = useSelector(state => state.topPlanner)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = topPlanner.slice(indexOfFirstPost, indexOfLastPost);

  const profileCard = currentPost.map(planner => {
    return <Planner planner={planner} key={planner.id} />;
  });

  // setInterval(() => {
  //   nextPage();
  // }, 4000)

  const nextPage = () => {
    if (currentPage < Math.ceil(topPlanner.length / postPerPage))
      setCurrentPage(currentPage + 1);
  } 

  const prevPage = () => {
    if (currentPage <= Math.ceil(topPlanner.length / postPerPage) && currentPage > 1)
      setCurrentPage(currentPage - 1);
  };

  return (
    <div id="HomePlanner" className="container-fluid pb-5">
      <div className='text-center'>
        <h6>CONNECT WITH TOP PLANNERS</h6>
        <hr id='header__hr'/>
      </div>
     
      <div className="row">
        {profileCard}
        <FontAwesomeIcon
          id="faLessThan"
          icon={faLessThan}
          onClick={prevPage}
          className={currentPage === 1 ? "displayNone" : "displayBlock"}
        />
        <FontAwesomeIcon
          id="faGreaterThan"
          icon={faGreaterThan}
          onClick={nextPage}
          className={
            currentPage === Math.ceil(topPlanner.length / postPerPage)
              ? "displayNone"
              : ""
          }
        />
      </div>

      <div id="view-more-button">
        <button className="btn btn-sm btn-outline-primary mt-5">
          View More
        </button>
      </div>
    </div>
  );
}