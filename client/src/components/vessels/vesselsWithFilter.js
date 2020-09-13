import React, { Component } from 'react';

import {TextField} from '@material-ui/core/';

class VesselsFilter extends Component {

    constructor(){
        super();
        this.state = {
            vessels: [],
            vesselsFiltered: [],
            filterField : "",
        }
    }

    componentDidMount() {
        fetch('/api/vesselfilter')
         .then(res => res.json())
         .then(vessels => this.setState({vessels}, () => console.log('Vessels fetched for filter component',vessels)))         
    }

    filterList = input => e => {
        this.setState({[input]: e.target.value})

          var reduced = this.state.vessels.reduce(function(filtered, vessel) {
            if (vessel.CountryName.includes(e.target.value)) {
               var newValues = { IMO: vessel.IMO, Name: vessel.Name, Image: vessel.Image, Longitude: vessel.Longitude, Latitude: vessel.Latitude, CountryName: vessel.CountryName  }
               filtered.push(newValues);
            }
            return filtered;
          }, []);

        this.setState({vesselsFiltered: reduced})
          
    }


    render() {
        const { filterField } = this.state;
        return (
            <div style={{color: "white"}}>
                <h2>Vessels with Filter</h2>
                <TextField label="Country Filter" onChange={this.filterList('filterField')} defaultValue={filterField} color="secondary" variant="outlined"/>
                <ul>
                    {this.state.vesselsFiltered.map(vessel =>
                        <li key={vessel.IMO}>{vessel.IMO} {vessel.Name} {vessel.Image} {vessel.Longitude} {vessel.Latitude} {vessel.CountryName} </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default VesselsFilter;
