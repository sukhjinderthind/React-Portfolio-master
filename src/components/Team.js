import React, { Component } from 'react';
export default  class Team extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="team">

      <div>

        

            <div className="row">
              
            <h1>ArtbyHighEyes Team</h1>

              <div className="column" style={{float: "left", width: "35%"}}>
                <img className="profile-pic-left"  src="images/pic1.jpeg" alt="" />
              </div> 

              <div className="column" style={{float: "left", width: "60%"}}>
                <h2>Ruby B.</h2>
                <h4>High Eyes Founder, Artist</h4>
                <p>Ruby has been creating art for over 10 years and drawing inspiration from her experiences and perception of life. Her art style has gone through many phases and variations and now she is ready to go public and share her visions with the world! </p>
              </div>

            </div>

            <div className="row">
              <div className="column" style={{float: "left", width: "35%"}}>
                <img className="profile-pic-left"  src="images/profile3.jpg" alt="" />
              </div>
              <div className="column" style={{float: "left", width: "60%"}}>
                <h2>Rio B.</h2>
                <h4>High Eyes Founder, Project Manager</h4>
                <p>Rio is an NFT expert and passionate about growing the ArtbyHighEyes community. Rio saw Rubys art and fell in love and wanted to help her share it with the world by adapting NFT and blockchain technology. He is a valuable asset to the team with expertise in marketing, project development and community development. </p>
              </div>
            </div>

            <div className="row">              
              <div className="column" style={{float: "left", width: "35%"}}>
                <img className="profile-pic-left"  src="images/pic2.jpg" alt="" />
              </div>
              <div className="column" style={{float: "left", width: "60%"}}>
                <h2>Rico T.</h2>
                <h4>High Eyes Founder, Developer</h4>
                <p>Rico is a Nanotechnology engineer specialising in web development and blockchain technology. He is focused on ensuring quality is maintained so the HighEyes community has a cutting edge experience. </p>
              </div>
            </div>

      
      </div>   
      
      </section>
    );
  }
}