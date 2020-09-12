import React, { Component } from 'react';
import './App.css';
import Countries from './components/countries/countries';
import Vessels from './components/vessels/vessels';
import VesselAddForm from './components/vessels/addVessel';
import VesselEditForm from './components/vessels/editVessel';
import CountryAddForm from './components/countries/addCountry';
import DeleteVesselForm from './components/vessels/deleteVessel';

class  App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Vessels/>
        <Countries/> 
        <VesselAddForm/>  
        <VesselEditForm/> 
        <CountryAddForm/> */}
        <DeleteVesselForm/>
      </div>
    );
}

}
export default App;
