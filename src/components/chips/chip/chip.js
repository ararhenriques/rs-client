import React from 'react';
import { Card, Container, Col, Row, CardImg, CardText, CardBody, CardDeck,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit'
//import DeleteIcon from '@material-ui/icons/Delete'
//import Papersheet from './paperComp'
import APIURL from '../../../helpers/environment';
import chipInfo from './paperComp';
import styled from 'styled-components' ;

// const Grid = styled.div`
//  display: grid;
//  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//  grid-gap: 20px;`

const styles = {
  card: {
    backgroundColor: '#fafafa',
    height: '40vh',
    width: '10vw',
    border: 'solid #e65100',
    margin: '10%',
  },
  container:{
    display: 'flex',
    flexDirection: 'row'
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
  cardbody: {
    border: '#212121',
    borderRadius: '%5'
  },
  rating: {
    backgroundColor: '#e65100',
    borderRadius: '5px 20px 5px',
    textAlign: 'right',
    width: '1.5em'
  },

}

  
// const Chip = (props) => {
//     return (
//         <div>
//             <h3>Your Snacks</h3>
//             <hr />
//             <Table striped>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Artist</th>
//                         <th>Chip Type</th>
//                         <th>Chip Flavor</th>
//                         <th>Rating</th>
//                         <th>Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         props.chips.map((chips, id) => {
//                             return (
//                                 <tr key={id}>
//                                     <th scope="row">{chips.id}</th>
//                                     <td>{chips.artist}</td>
//                                     <td>{chips.chipType}</td>
//                                     <td>{chips.chipFlavor}</td>
//                                     <td>{chips.rating}</td>
//                                     <td>{chips.imageURL}</td>
//                                     <td>
//                                         <Button id={chips.id} onClick={props.delete} color="danger">Delete</Button>|
//                                         <Button id={chips.id} onClick={e => props.update(e, chips)} color="warning">Update</Button>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </Table>
//         </div>
//     );
// }


const Chip = (props) => {
  
      return (
      <CardDeck>
          {props.chips.map((chips, id) => (
            <Card style={styles.card}>
              <CardImg top width="50%" src={chips.imageURL} alt="Card image cap" />
              <CardBody style={styles.cardbody}>
                <CardTitle>{chips.artist}</CardTitle>
                <CardSubtitle style={styles.rating}>{chips.rating}</CardSubtitle>
                <CardText>{chips.chipType} <br/> {chips.chipFlavor}</CardText>
                <Button style={styles.buttons} key='two' id={chips.id} onClick={props.delete}>Delete</Button>
                <Button style={styles.buttons} key='one' id={chips.id} onClick={e => props.update(e, chips)}>Edit</Button>
              </CardBody>
            </Card>
            // <GridListTile key={chips.imageURL}>
            //   <img src={chips.imageURL} alt={chips.artist} />
            //   <GridListTileBar
            //     title={chips.artist}
            //     subtitle={chips.rating}
            //     actionIcon ={
            //       <IconButton className={classes.icon}>
            //         <EditIcon id={chips.id} onClick={this.test} />
            //       </IconButton>
            //     }
            //   />
            // </GridListTile>
          ))}
      </CardDeck>
    );
  
}
  
  export default Radium(Chip);
//export default Chip;