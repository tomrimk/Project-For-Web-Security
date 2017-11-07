import React, { Component } from 'react';
import './stylesheets/main.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
