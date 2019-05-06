import React, { Component } from 'react';
import Radium from 'radium'
//import './Auth.css';
import APIURL from '../../helpers/environment';


const styles ={
    card: {
        backgroundColor: '#fafafa',
        height: '60vh',
        width: '50vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        borderRadius: '5%',
        border: 'solid #e65100'
    },
    buttons: {
        height: '4em',
        width: '8em',
        borderRadius: '1.2em',
        backgroundColor: '#ffa726',
        borderColor: '#030202',
        marginTop: '2em',

        ':hover': {
            backgroundColor: '#ffcc80',
            borderColor: '#030202'
        },
    },
    textField: {
        height: '2.5em',
        width: '20em',
        borderRadius: '1.2em'
    }
}

class Auth extends Component {
    constructor() {
        super();
        this.state = { //holds information related to the component
            login: true,
            userName: '',
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value }) //does not mutate the earlier state, just makes a new one
    }

    loginToggle = (event) => {
        event.preventDefault();
        const _login = this.state.login;
        this.setState({
            login: !_login,
            userName: '',
            email: '',
            password: '',
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let url = this.state.login ? `${APIURL}/user/signin` : `${APIURL}/user/signup`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(json => this.props.tokenHandler(json.sessionToken))
    }

    render() {
        let title = this.state.login ? 'Login' : 'Signup';
        let signupFields = this.state.login
            ? null
            : (
                <React.Fragment>
                    <label htmlFor="email">Email:</label><br />
                    <input style={styles.textField} key='one'onChange={this.handleChange} value={this.state.email} type="email" id="email" /><br />
                </React.Fragment>
            )
        return (
            <form className="cardLike" style={styles.card} onSubmit={this.handleSubmit}>
                <h1>{title}</h1>
                {signupFields}
                <label htmlFor="userName">Username:</label><br />
                <input style={styles.textField} key='two' onChange={this.handleChange} value={this.state.userName} type="text" id="userName" /><br />
                <label htmlFor="password">Password:</label><br />
                <input style={styles.textField} key='three' min='5' onChange={this.handleChange} value={this.state.password} type="password" id="password" /><br />
                <button style={styles.buttons} key='four' onClick={this.loginToggle}>Login/Signup Toggle</button><br />
                <button style={styles.buttons} key='five' type="submit">Submit</button>
            </form>
        )
    }
}

export default Radium(Auth);

//add form validation!!