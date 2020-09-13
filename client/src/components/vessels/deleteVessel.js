import React, { Component } from 'react';
import { Select,  Button, MenuItem } from '@material-ui/core/';

export class DeleteVesselForm extends Component {

  

    state = {
        vessels: [],
        vesselSelect: ""
    }


    

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    submitVessel() {

       var requestOptions = {
            method: "DELETE",
            // headers: {"Content-Type": 'application/json'},
        
        }


        fetch('/api/vessel/' + this.state.vesselSelect, requestOptions)
            .then(res => res.json())
            .then(alert("Vessel Deleted: Please refresh page to see update"))
        }

    componentDidMount() {
        fetch('/api/vessel')
            .then(res => res.json())
            .then(vessels => this.setState({ vessels}, () => console.log('Vessels fetched for vessel delete form', vessels)))
    }

    render() {
        const { vesselSelect } = this.state;
        return (

            <React.Fragment>
                <h2>Delete Vessel</h2>
                <br />
                <Select
                    style={{ minWidth: 228 }}
                    variant="outlined"
                    value={vesselSelect} displayEmpty
                    onChange={this.handleChange('vesselSelect')}
                    inputProps={{ name: 'Vessel' }}
                >
                    <MenuItem value="" disabled>Select Vessel To Delete</MenuItem>
                    {this.state.vessels.map(y =>
                        <MenuItem value={y.IMO}>{y.Name}</MenuItem>)}
                </Select>
                <br/>
                <br/>
                
                <Button variant="contained" color="primary" onClick ={ () => {this.submitVessel()}}> Delete Vessel</Button>
                <br/>
                <br/>
            </React.Fragment>

        )
    }
}

export default DeleteVesselForm
