import React, { Component } from 'react';
import { TextField, Select, MenuItem, Button } from '@material-ui/core/';

export class VesselEditForm extends Component {

  

    state = {
        name: "",
        img: "",
        lng: "",
        lat: "",
        country: "",
        countries: [],
        vessels: [],
        vesselSelect: ""
    }


    

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    submitVessel() {

       var requestOptions = {
            method: "PUT",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                name: this.state.name, 
                img: this.state.img,
                lng: this.state.lng,
                lat: this.state.lat,
                country: this.state.country
            })
        }


        fetch('/api/vessel/' + this.state.vesselSelect, requestOptions)
            .then(res => res.json())
            .then(alert("Vessel Updated: Please refresh page to see update"))
        }

    componentDidMount() {
        fetch('/api/country')
            .then(res => res.json())
            .then(countries => this.setState({ countries }, () => console.log('Countries fetched for vessel edit form', countries)))

        fetch('/api/vessel')
            .then(res => res.json())
            .then(vessels => this.setState({ vessels}, () => console.log('Vessels fetched for vessel edit form', vessels)))
    }

    render() {
        const { name, img, lng, lat, country, vesselSelect } = this.state;
        return (

            <React.Fragment>
                <h2>Edit Vessel</h2>
                <br />
                <Select
                    style={{ minWidth: 228 }}
                    variant="outlined"
                    value={vesselSelect} displayEmpty
                    onChange={this.handleChange('vesselSelect')}
                    inputProps={{ name: 'Vessel' }}
                >
                    <MenuItem value="" disabled>Select Vessel To Edit</MenuItem>
                    {this.state.vessels.map(y =>
                        <MenuItem value={y.IMO}>{y.Name}</MenuItem>)}
                </Select>
                <br/>
                <br/>
                <TextField
                    variant="outlined"
                    placeholder="Enter Vessel Name"
                    label="Vessel Name"
                    onChange={this.handleChange('name')}
                    defaultValue={name}
                />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    placeholder="Enter Image Location"
                    label="Image location"
                    onChange={this.handleChange('img')}
                    defaultValue={img}
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
                />
                <br />
                <br />

                <Select
                    style={{ minWidth: 228 }}
                    variant="outlined"
                    value={country} displayEmpty
                    onChange={this.handleChange('country')}
                    inputProps={{ name: 'country' }}
                >
                    <MenuItem value="" disabled>Select Country</MenuItem>
                    {this.state.countries.map(x =>
                    <MenuItem value={x.CountryID}>{x.Name}</MenuItem>)}
                </Select>
                <br />
                <br />
                
                <Button variant="contained" color="primary" onClick ={ () => {this.submitVessel()}}> Update Vessel</Button>


            </React.Fragment>

        )
    }
}

export default VesselEditForm
