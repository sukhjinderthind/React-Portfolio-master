import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url} target="_blank">
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>

          {/* <Link to="/about">HighEyes Terms Conditions</Link> */}

          {/* <ul style={{float: "right", textAlign: "right", fontSize: "15px"}}>
            <li style={{color: "#fff", textDecoration: "underline"}}><Link to="/#terms">ArtbyHighEyes Terms & Conditions</Link></li>
            <li style={{color: "#fff", textDecoration: "underline"}}><Link to="/#terms">HighEyes Terms & Conditions</Link></li>
          </ul> */}
          
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}
