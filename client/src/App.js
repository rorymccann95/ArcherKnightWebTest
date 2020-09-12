import React, { Component } from 'react';
import './App.css';
import Countries from './components/countries/countries';
import Vessels from './components/vessels/vessels';
import VesselAddForm from './components/vessels/addVessel';
import VesselEditForm from './components/vessels/editVessel';

class  App extends Component {
  render() {
    return (
      <div className="App">
        <Vessels/>
        <Countries/> 
        <VesselAddForm/>  
        <VesselEditForm/>
      </div>
    );
}

}
export default App;
