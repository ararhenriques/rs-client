import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Auth from './components/auth/Auth';
import Chips from './components/chips/Chips';
import Radium from 'radium';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const styles = {
  background: { //ADD ME IN LATER
    backgroundColor: '#424242',
    height: '100vh'
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken:'' 
    }
  }

  storeSessionToken = (token) => {
    localStorage.setItem('token',token)
    this.setState({sessionToken: token})
  }

  // viewConductor = () => {
  //   return this.state.sessionToken !== undefined ? <Chips/> : <Auth tokenHandler={this.storeSessionToken}/>
  // }

  viewConductor = () => {
    if(this.state.sessionToken !== '') {
      return (
        <Switch>
          <Route path='/' exact>
            <Chips sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/auth" >
          <Auth tokenHandler={this.storeSessionToken} />
        </Route>
      )
    }
  }

  removeSessionToken = () => {
    this.setState({sessionToken: ''})
  }

  render () {
    return(
      <Router>
      <div style={styles.background}>
        <Navbar logout={this.removeSessionToken} />
        {this.viewConductor()}
      </div>
      </Router>
    )
  }
}

export default Radium(App);
