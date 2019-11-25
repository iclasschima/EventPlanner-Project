import React from 'react'
// import BottomRightDashboard from './bottomrightDashboard'
import TopRightDashboard from "./toprightDashboard";

export default () => {
    return (
        <div id="right__dashboard" className='col-md-3'>
            <TopRightDashboard />
            {/* <BottomRightDashboard /> */}
      </div>
    );
}
