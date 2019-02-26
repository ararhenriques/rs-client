import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Form, FormGroup, Label, Table, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const chipInfo = (props) => {
    const {classes} = props;


  return(
    <div>
      <Modal isOpen={true} >
        <ModalHeader>Chip Info</ModalHeader>
        <ModalBody>
        <Table striped>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Chip Type</th>
                        <th>Chip Flavor</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      <div>
                                    <td>{props.chips.artist}</td>
                                    <td>{this.props.chips.chipType}</td>
                                    <td>{this.props.chips.chipFlavor}</td>
                                    <td>{this.props.chips.rating}</td>
                                    <td>
                                        <Button id={this.props.chips.id} onClick={this.props.delete} color="danger">Delete</Button>|
                                        <Button id={this.props.chips.id} onClick={e => this.props.update(e, this.props.chips)} color="warning">Update</Button>
                                    </td>
                    </div>
                    }
                </tbody>
                </Table>
        </ModalBody>
      </Modal>
    </div>
  )
}
export default chipInfo;