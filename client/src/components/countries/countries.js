import React, { Component } from 'react';
import './countries.css';

class Countries extends Component {

    constructor(){
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        fetch('/api/country')
         .then(res => res.json())
         .then(countries => this.setState({countries}, () => console.log('Countries fetched',countries)))         
    }

    render() {
        return (
            <div>
                <h2>Countries</h2>
                <ul>
                    {this.state.countries.map(country =>
                        <li key={country.CountryID}>{country.CountryID} {country.Name}  </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default Countries;
