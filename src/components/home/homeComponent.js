import React, { Component } from 'react'
import Navbar from './navbarComponent'
import Banner from './bannerComponent'
import HomePlanner from './homeplannerComponent'
import IdeaComponent from "./ideaComponent";
import GossipComponent from "./gossipComponent";
import RecordComponent from "./recordComponent";
import FooterComponent from "./footerComponent";


export default class HomeComponent extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <Banner />
            <HomePlanner />
            <IdeaComponent />
            <GossipComponent />
            <RecordComponent />
            <FooterComponent />
          </div>
        );
    }

}
