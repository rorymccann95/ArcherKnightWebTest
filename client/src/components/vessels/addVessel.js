import React, { Component } from 'react';
import { TextField, Select, MenuItem, Button } from '@material-ui/core/';

export class VesselAddForm extends Component {

  

    state = {
        name: "",
        img: "",
        lng: "",
        lat: "",
        country: "",
        countries: []
    }


    

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    submitVessel() {

       var requestOptions = {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                name: this.state.name, 
                img: this.state.img,
                lng: this.state.lng,
                lat: this.state.lat,
                country: this.state.country
            })
        }


        fetch('/api/vessel/submit', requestOptions)
            .then(res => res.json())
            .then(alert("Vessel Added: Please refresh page to see update"))
        }

    componentDidMount() {
        fetch('/api/country')
            .then(res => res.json())
            .then(countries => this.setState({ countries }, () => console.log('Countries fetched for vessel add form', countries)))
    }

    render() {
        const { name, img, lng, lat, country } = this.state;
        return (

            <React.Fragment >
                <h2 style={{color: "white"}}>Add new Vessel</h2>
                <br />
                <TextField
                    variant="outlined"
                    placeholder="Enter Vessel Name"
                    label="Vessel Name"
                    onChange={this.handleChange('name')}
                    defaultValue={name}
                    color="secondary"
                />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    placeholder="Enter Image Location"
                    label="Image location"
                    onChange={this.handleChange('img')}
                    defaultValue={img}
                    color="secondary"
                />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    placeholder="Enter Longitude"
                    label="Longitude"
                    onChange={this.handleChange('lng')}
                    defaultValue={lng}
                    type="number"
                    color="secondary"
                />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    placeholder="Enter Latitude"
                    label="Latitude"
                    onChange={this.handleChange('lat')}
                    defaultValue={lat}
                    type="number"
                    color="secondary"
                />
                <br />
                <br />

                <Select
                    style={{ minWidth: 228 }}
                    variant="outlined"
                    value={country} displayEmpty
                    onChange={this.handleChange('country')}
                    inputProps={{ name: 'country' }}
                    color="secondary"
                >
                    <MenuItem value="" disabled>Select Country</MenuItem>
                    {this.state.countries.map(x =>
                        <MenuItem value={x.CountryID}>{x.Name}</MenuItem>)}
                </Select>
                <br />
                <br />
                
                <Button variant="contained" color="secondary" onClick ={ () => {this.submitVessel()}}> Add Vessel</Button>


            </React.Fragment>

        )
    }
}

export default VesselAddForm
