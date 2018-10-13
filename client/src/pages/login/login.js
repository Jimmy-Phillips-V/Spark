//Jimmy's Code
import React, { Component } from 'react';
import './login.css';
import firebase from '../../base'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Local from "../Local";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


//Jimmy's Code
class login extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false,
      items: [],
      open:false
    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleCreateUserEmailChange = (event) => {
    this.setState({createUserEmail: event.target.value});
  }

  handleCreateUserPasswordChange = (event) => {
    this.setState({createUserPassword: event.target.value});
  }

  handleLoginEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }

  handleLoginPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  createUser = (event) => {
    event.preventDefault()
    const promise = firebase.auth().createUserWithEmailAndPassword(this.state.createUserEmail, this.state.createUserPassword)
    // promise.catch(e => console.log(e.message))
    promise.then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: this.state.displayName
      })
    })

    promise.catch(e => {
      console.log(e.message)
      this.setState({
        error: e.message
      })
      setTimeout(()=>{
        this.setState({
          error: ""
        })
      }, 3000)
    })
  }

  signIn = (event) => {
    event.preventDefault()
    const promise = firebase.auth().signInWithEmailAndPassword(this.state.signInEmail, this.state.signInPassword)
    // promise.catch(e => console.log(e.message))
    promise.catch(e => {
      console.log(e.message)
      this.setState({
        error: e.message
      })
      setTimeout(()=>{
        this.setState({
          error: ""
        })
      }, 3000)
    })
  }

  signOut = () => {
    firebase.auth().signOut()
  }

  componentDidMount(){
    console.log('hello');
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser){
        console.log(firebaseUser);
        this.setState({
          authenticated: true,
          uid: firebaseUser.uid
        })
        // query to mySQL based on my specifi UID

      } else {
        console.log('not logged in');
        this.setState({authenticated: false})
      }
    })
  }

  render() {
    return (
      <div className="chicken">
       <Container>
         <Jumbotron />

     {/* Authentication  */}
    <div className="dashed-container">


      {this.state.authenticated === false &&
        <div>
          {/* <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              onClick={this.handleOpen}
            >
              Signup
            </Button> */}
          
          <form id="create-user-form" onSubmit={this.createUser}>
            <h2>Create user</h2>
            <input 
            value={this.state.value} 
            onChange={this.handleCreateUserEmailChange} 
            type="email" 
            placeholder="Email" 
            required
            />
            <input 
            value={this.state.value} 
            onChange={this.handleCreateUserPasswordChange} 
            type="password" 
            placeholder="Password" 
            required
            />
            <button id="sign-up-button" type="submit">Sign Up</button>
          </form>
        Already a Member? <Button onClick={this.handleOpen}>Sign In</Button>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
            
          <form id="sign-in-form" onSubmit={this.signIn}>
            <h2>Sign in</h2>
            <input value={this.state.value} onChange={this.handleLoginEmailChange} type="email" placeholder="Email" required></input>
            <input value={this.state.value} onChange={this.handleLoginPasswordChange} type="password" placeholder="Password" required></input>
            <button id="signIn-button" type="submit">Log In</button>
          </form>
          
          </Modal>
          <p id="errors">{this.state.error}</p>
        
        </div>
      }
      {this.state.authenticated === true &&
        <button id="sign-out-button" onClick={this.signOut}>Log Out</button>
      }
    </div>

     {/* Errors  */}
     {
       (this.state.authenticated === false)
       ? <div>status <span className="status-red">not authenticated</span></div>
       : <div>status <span className="status-green">authenticated</span></div>
     }

      {
        this.state.authenticated === true &&
        // <Link to="/local">go to page</Link>
        <Redirect to="/local"/>
          
      }
      </Container>
      </div>
    );
  }
}

export default login;

