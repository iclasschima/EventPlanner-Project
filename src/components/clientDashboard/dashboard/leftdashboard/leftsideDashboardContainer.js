import React from 'react'
import TopDashboard from './topleftdashboard'
import RecentConnect from './recentConnects'
import UpcomingEvents from './upcomingevents'


export default () => {
  return (
    <div id="left__side__dashboard" className="col-md-9">
      <TopDashboard />
      <div className="row col-12" id="left__bottom__dashboard">
        <RecentConnect />
        <UpcomingEvents />
      </div>
    </div>
  );
}
