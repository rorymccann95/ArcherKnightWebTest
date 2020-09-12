import React, { Component } from 'react';
import './App.css';
import Countries from './components/countries/countries';
import Vessels from './components/vessels/vessels';

class  App extends Component {
  render() {
    return (
      <div className="App">
        <Vessels/>
        <Countries/>
      </div>
    );
}

}
export default App;
