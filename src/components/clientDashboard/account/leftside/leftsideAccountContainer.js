import React from 'react'
import TopLeft from './topleftaccount'
import BottomLeft from './bottomLeftaccount'

export default () => {
    return (
      <div className="col-md-9" id="leftside">
       <TopLeft />
       <BottomLeft />
      </div>
    );
}