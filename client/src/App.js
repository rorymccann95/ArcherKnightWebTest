import React, { Component } from 'react';
import './App.css';
import Countries from './components/countries/countries';
import Vessels from './components/vessels/vessels';
import VesselAddForm from './components/vessels/addVessel';

class  App extends Component {
  render() {
    return (
      <div className="App">
        <Vessels/>
        <Countries/> 
        <VesselAddForm/> 
      </div>
    );
    // return <TextField color="primary" label="kms" >Fuck this</TextField>
}

}
export default App;
