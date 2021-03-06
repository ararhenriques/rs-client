import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../../helpers/environment';
import Radium from 'radium';

const styles ={
    create: {
        width: '60vw',
        border: 'solid black 2px',
        borderRadius: '1.2em',
        backgroundColor: 'white'

    },
    buttons: {
        height: '3em',
        width: '6em',
        borderRadius: '1.2em',
        backgroundColor: '#ffa726',
        borderColor: '#030202',
        marginTop: '2em',
    
        ':hover': {
            backgroundColor: '#ffcc80',
            borderColor: '#030202'
        },
    },
}

class ChipCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            artist: '',
            chipType: '',
            chipFlavor: '',
            rating: '',
            imageURL: '',
        };
    }

    handleChange = (event) => {
        const data = (event.target.value).toLowerCase();
        this.setState({
            [event.target.name]: data
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();   
        console.log(this.state)
        fetch(`${APIURL}/chip`, {
            method: 'POST',
            body: JSON.stringify({chip: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        })
            .then((res) => res.json())
            .then(chipData => {
                this.props.updateChipsArray();
                this.setState({
                    artist: '',
                    chipType: '',
                    chipFlavor: '',
                    rating: '',
                    imageURL: '',
                })
                console.log(chipData);
            })
            .catch(err => console.log(err.message))
            
    }

    render() {
        return (
            <div style={styles.create}>
                <h3>    Add a RapSnack</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="artist">    Artist: </Label>
                        <Input id="artist" type="text" name="artist" value={this.state.artist} placeholder="enter artist" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="chipType">  Type: </Label>
                        <Input type="select" name="chipType" id="chipType" value={this.state.chipType} onChange={this.handleChange} placeholder="Type">
                            <option value="Original">Original</option>
                            <option value="Wavy">Wavy</option>
                            <option value="Popcorn">Popcorn</option>
                            <option value="Puff">Puff</option>
                            <option value="Fries">Fries</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="chipFlavor">    Flavor: </Label>
                        <Input id="chipFlavor" type="text" name="chipFlavor" value={this.state.chipFlavor} placeholder="enter flavor" onChange={this.handleChange} />
                        <br></br>
                        <Label for="rating">    Rating: </Label>
                        <Input id="rating" type="text" name="rating" value={this.state.rating} placeholder="enter rating /5" onChange={this.handleChange} />
                        <br></br>
                        <Label for="imageUrl">  Image: </Label>
                        <Input id="imageUrl" type="text" name="imageURL" value={this.state.imageURL} placeholder="enter image URL" onChange={this.handleChange} />
                    </FormGroup>
                    <Button style={styles.buttons} type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Radium(ChipCreate);