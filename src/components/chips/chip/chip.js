import React from 'react';
//import {Table, Button} from 'reactstrap';
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


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#fafafa',
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

  
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


class Chip extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        artist: '',
        chipType: '',
        chipFlavor: '',
        rating: '',
        id: '',
      }
    }
  
    test = (e) => {console.log(e.target.id)}

    render() {
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div">Snacks</ListSubheader>
          </GridListTile>
          {props.chips.map((chips, id) => (
            <GridListTile key={chips.imageURL}>
              <img src={chips.imageURL} alt={chips.artist} />
              <GridListTileBar
                title={chips.artist}
                subtitle={chips.rating}
                actionIcon ={
                  <IconButton className={classes.icon}>
                    <EditIcon id={chips.id} onClick={this.test} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
} 
  Chip.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Chip);
//export default Chip;