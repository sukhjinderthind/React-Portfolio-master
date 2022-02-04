import React, { Component } from 'react';
export default  class Roadmap extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="roadmap">

         {/* <div className="row education"> */}

         {/* <div className="three columns">
            <img className="profile-pic-right"  src="images/profile2.jpg" alt="" />
          </div> */}

         <div className="row">

          <h1 >Roadmap</h1>

          <h3>Coming soon. Stay tuned!</h3>


         </div>

      </section>
    );
  }
}