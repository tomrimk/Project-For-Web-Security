import React, { Component } from 'react';
import './stylesheets/landing.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="landing-header">
          <h1>Welcome to Yolk!</h1>
          <a href="/campgrounds" class="btn btn-lg btn-success">View All Campgrounds</a>
        </div>

        <ul class="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
