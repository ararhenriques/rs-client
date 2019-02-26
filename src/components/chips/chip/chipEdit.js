import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../../helpers/environment';


class chipEdit extends React.Component {

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

    componentWillMount() {
        this.setState({ 
            id: this.props.chip.id, 
            artist: this.props.chip.artist,
            chipType: this.props.chip.chipType,
            chipFlavor: this.props.chip.chipFlavor,
            rating: this.props.chip.rating,
            imageURL: this.props.chip.imageURL
        })
    }

    handleChange = (event) => { 
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        this.props.update( event, this.state)
    }
    handleDelete = (event) => { 
        event.preventDefault();
        this.chipDelete( event, this.state)
    }

    chipDelete = (event) => {
        console.log(event.target)
        fetch(`${APIURL}/chip/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({chip: {id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchChips())
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} > 
                    <ModalHeader >Edit a RapSnack</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="artist">Artist</Label>
                                <Input id="artist" type="text" name="artist" value={this.state.artist} placeholder="enter artist" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="def">Type</Label>
                                <Input type="select" name="chipType" id="chipType" value={this.state.chipType} onChange={this.handleChange} placeholder="Type">
                                    <option></option>
                                    <option value="Original">Original</option>
                                    <option value="Wavy">Wavy</option>
                                    <option value="Popcorn">Popcorn</option>
                                    <option value="Puff">Puff</option>
                                    <option value="Fries">Fries</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="chipFlavor">Flavor</Label>
                                <Input id="chipFlavor" type="text" name="chipFlavor" value={this.state.chipFlavor} placeholder="enter flavor" onChange={this.handleChange} />
                                <Label for="rating">Rating</Label>
                                <Input id="rating" type="text" name="rating" value={this.state.rating} placeholder="enter rating /5" onChange={this.handleChange} />
                                <Label for="imageURL">Image</Label>
                                <Input id="imageURL" type="text" name="imageURL" value={this.state.imageURL} placeholder="enter image URL" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                        <Form onSubmit={this.handleDelete}>
                            <Button type="submit" color="primary" > Delete </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default chipEdit;