// import React from 'react';
// import Radium from 'radium';
// import  {
//     Navbar,
//     NavbarBrand,
//     NavItem,
// } from 'reactstrap';

// //import './Navbar.css';
// import LogoPic from '../../assets/logo.jpg';
// 

// const styles = {
//     Navbar: {
//         backgroundColor: 'black',
//         height: '15vh',
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'row',
         
//     },
//     Logout: {
        
//     }
// }

// const Sitebar = (props) => {
//     return (
//         <Navbar style={styles.Navbar}>
//             <img src={LogoPic} alt= 'Rap Snacks Logo'/>
//             <Logout syle={styles.Logout} logout={props.logout} />
//         </Navbar>
//     )
// }

// export default Radium(Sitebar);  

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import orange from '@material-ui/core/colors/orange';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const primary = orange[900]

function Navbar(props) {
    const { classes } = props;
    return (
    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor:primary}}>
        <Toolbar color="error">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={props.logout}>
            <LogoutIcon />
          </IconButton>
          <Typography variant="h6" className={classes.grow}>
            Rap Snacks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);