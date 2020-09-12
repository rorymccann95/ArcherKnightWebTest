import React, { Component } from 'react';
import './vessels.css';

class Vessels extends Component {

    constructor(){
        super();
        this.state = {
            vessels: []
        }
    }

    componentDidMount() {
        fetch('/api/vessel')
         .then(res => res.json())
         .then(vessels => this.setState({vessels}, () => console.log('Vessels fetched',vessels)))         
    }

    render() {
        return (
            <div>
                <h2>Vessels</h2>
                <ul>
                    {this.state.vessels.map(vessel =>
                        <li key={vessel.IMO}>{vessel.IMO} {vessel.Name} {vessel.Image} {vessel.Longitude} {vessel.Latitude} {vessel.CountryID} </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default Vessels;
