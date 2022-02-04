import React, { Component } from 'react';
export default class Collections extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="collections">

        <div className="row">

         <div className="column" style={{float: "right", width: "30%"}}>
              <img className="profile-pic-left"  src="images/iGalaxy.jpeg" alt="" />
            </div>

         <div>

        <div className="column" style={{float: "left", width: "70%"}}>
          <h1>ArtbyHighEyes Collections</h1>
          
          <h3>Complete Collection coming soon! New art is being taken from the vault and new art created everyday! Stay tuned!</h3>
          <h3>All art within the collections are 100% authentic and hand created by our artist. Nothing is computer generated or created using programming.</h3>

          <h1>HighEyes Collection</h1>
            <h3>Our first collection, HighEyes Collection, includes 2 NFT art pieces named iGalaxy. The animation version will be released in March 2022 which will be a 1 of 1 art piece which provides exclusive previleges to the owner for all future art releases and more VIP perks. </h3>
            <h3>The iGalaxy NFT will be released shortly after with quantity and price to be determined. </h3>
         </div>
         </div>
         </div>
      </section>
    );
  }
}