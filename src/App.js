import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import NavbarComponent from './component/NavbarComponent';
import FirstBody from './component/FirstBody';
import SecondBody from './component/SecondBody';
import ThirdBody from './component/ThirdBody';
import FourthBody from './component/FourthBody';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <FirstBody />
        <SecondBody />
        <ThirdBody />
        <FourthBody />
      </div>
    );
  }
}

export default App;

