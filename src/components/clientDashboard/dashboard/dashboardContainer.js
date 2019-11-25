import React from 'react'
import LeftDashboard from './leftdashboard/leftsideDashboardContainer'
import RightDashboard from './rightsideDashboard/rightsideDashboardContainer'

export default () => {
    return (
      <div id="Container" className="row">
        <LeftDashboard />
        <RightDashboard />
      </div>
    );
}
