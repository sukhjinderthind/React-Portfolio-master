import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">


         <div className="row">

            <div className="column" style={{float: "right", width: "30%"}}>

            <img className="profile-pic-left"  src="images/varitation.jpg" alt="" />

            </div>

            <div className="column" style={{float: "left", width: "70%"}}>

              <h1>Who is ArtbyHighEyes?</h1>

               <h3>ArtByHighEyes is a team of 3 friends, each with their own skills and abilities. ArtbyHighEyes is dedicated to creating exclusive art and content for you. Expressing our vibe through our eyes. </h3>
              
               <h1>ArtbyHighEyes Socials</h1>
              
               <h3>
               {
                 resumeData.aboutme
               }
               </h3>

               </div>

            </div>

            <div className="row">

              <ul className="social">
              {
                resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                  return(
                    
                          <li key={item.name}>
                            <a href={item.url} target="_blank"><i className={item.className}></i></a>
                          </li>
                        )
                      }
                )
              }
              </ul>


              </div>






      </section>
    );
  }
}