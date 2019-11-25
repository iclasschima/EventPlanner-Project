import React from 'react'
import { useSelector } from 'react-redux'

export default () => {

  const comments = useSelector(state => state.topComment);
  const comment = comments.map(comment => {
    return (
      <div className="col-lg-6 mb-0 mb-sm-2" key={comment.first_name}>
        <div id="comment__div" className="row">
          <div className="col-md-2 col-3" id="comment__div__img">
            <img
              src={require(`../../images/${comment.pic}`)}
              alt={comment.first_name + " " + comment.last_name}
            />
          </div>
          <div id="comment__div__content" className="col-md-10 col-9 pl-0 pl-lg-3">
            <h6>{comment.first_name + " " + comment.last_name}</h6>
            <p>{comment.comment}</p>
          </div>
        </div>
      </div>
    );
  })
  return (
    <div id="GossipComponent" className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h5>HAPPY CUSTOMERS SAYS</h5>
          <hr id='header__hr'/>
        </div>
        <div className="col-12 row mt-3 px-5">{comment}</div>
      </div>
    </div>
  )
}