import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';

export class CountryAddForm extends Component {

  

    state = {
        name: "",
    }


    

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    submitCountry() {

       var requestOptions = {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                name: this.state.name
            })
        }


        fetch('/api/country/submit', requestOptions)
            .then(res => res.json())
            .then(alert("Country Added: Please refresh page to see update"))
        }

    render() {
        const { name } = this.state;
        return (

            <React.Fragment>
                <h2>Add new Country</h2>
                <br />
                <TextField
                    variant="outlined"
                    placeholder="Enter Country Name"
                    label="Country Name"
                    onChange={this.handleChange('name')}
                    defaultValue={name}
                />
                <br />
                <br />
               
                <Button variant="contained" color="primary" onClick ={ () => {this.submitCountry()}}> Add Country</Button>


            </React.Fragment>

        )
    }
}

export default CountryAddForm
