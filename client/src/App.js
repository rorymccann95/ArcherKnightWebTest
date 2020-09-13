import React, { Component } from 'react';
import './App.css';
import Countries from './components/countries/countries';
import Vessels from './components/vessels/vessels';
import VesselAddForm from './components/vessels/addVessel';
import VesselEditForm from './components/vessels/editVessel';
import CountryAddForm from './components/countries/addCountry';
import DeleteVesselForm from './components/vessels/deleteVessel';
import VesselsFilter from './components/vessels/vesselsWithFilter';

class  App extends Component {
  render() {
    return (
      <div className="App" style={{background: "linear-gradient(#3f51b5, #d9ddf2)"}}>
        <Vessels/>
        <Countries/> 
        <VesselsFilter/>
        <VesselAddForm/>  
        <VesselEditForm/> 
        <CountryAddForm/>
        <DeleteVesselForm/>
      </div>
    );
}

}
export default App;
