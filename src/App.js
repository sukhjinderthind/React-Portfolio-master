import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import resumeData from './resumeData';
import Collections from './components/Collections';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Team resumeData={resumeData}/>
        <Collections/>
        <Roadmap/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;