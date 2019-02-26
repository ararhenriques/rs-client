import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Form, FormGroup, Label, Table, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

function chipInfo(props) {
    const {classes} = props;


  return(
    <div>
      <Modal isOpen={true} >
        <ModalHeader>Chip Info</ModalHeader>
        <ModalBody>
        <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Artist</th>
                        <th>Chip Type</th>
                        <th>Chip Flavor</th>
                        <th>Rating</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      <div>
                                    <td>{props.chips.artist}</td>
                                    <td>{props.chips.chipType}</td>
                                    <td>{props.chips.chipFlavor}</td>
                                    <td>{props.chips.rating}</td>
                                    <td>
                                        <Button id={props.chips.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={props.chips.id} onClick={e => props.update(e, props.chips)} color="warning">Update</Button>
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