import React from 'react'
import LeftSideContainer from './leftside/leftsideAccountContainer'
import RightSide from "./rightside/rightaccount";

export default () => {
    return (
      <div id="Container" className="row">
        <LeftSideContainer />
        <RightSide />
      </div>
    );
}
