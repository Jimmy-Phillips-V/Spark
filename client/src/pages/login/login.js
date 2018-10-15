//Jimmy's Code
import React, { Component } from 'react';
import './login.css';
import firebase from '../../base'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Local from "../Local";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Jumbotron from "../../components/JumbotronNational";
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
         <div id="title">
         <h1>Welcome to Spark</h1>
         <h4>An application for change</h4>
         </div>
         {/* <Button color="primary" variant="contained">Sign Up</Button> */}
     {/* Authentication  */}
     
    <div id="signup-form">
      {this.state.authenticated === false &&
        <div>
          <form onSubmit={this.createUser}>
            
            <h4>Spark Up</h4>
            <div class="form-group">
            <input 
            value={this.state.value} 
            onChange={this.handleCreateUserEmailChange} 
            type="email" 
            placeholder="Email" 
            required
            />
            </div>
            <div class="form-group">
            <input 
            value={this.state.value} 
            onChange={this.handleCreateUserPasswordChange} 
            type="password" 
            placeholder="Password" 
            required
            />
            </div>
            <Button color="primary" variant="contained">Sign Up</Button>
          
          <div class="form-group">
        Already a Member? <Button onClick={this.handleOpen}>Sign In</Button>
          </div>
          </form>
          
          

            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
            
          <div id="signin-form">
          <h3>Spark a change</h3>
            <h4>Sign In</h4>
          <form onSubmit={this.signIn}>
          {/* Email */}
          <div class="form-group">
            <input value={this.state.value} 
            onChange={this.handleLoginEmailChange} 
            type="email" 
            placeholder="Email" 
            required>
            </input>
            </div>
            {/* //password */}
            <div class="form-group">
            <input value={this.state.value} 
            onChange={this.handleLoginPasswordChange} 
            type="password" 
            placeholder="Password" 
            required>
            </input>
            </div>
            <Button id="signIn-button" type="submit">Submit</Button>
          </form>
          </div>
        
          
          </Modal>
          <p id="errors">{this.state.error}</p>
        
        </div>
      }
      {this.state.authenticated === true &&
        <button id="sign-out-button" onClick={this.signOut}>Log Out</button>
      }
    </div>

     {/* Errors  */}
     {/* {
       (this.state.authenticated === false)
       ? <div>status <span className="status-red">not authenticated</span></div>
       : <div>status <span className="status-green">authenticated</span></div>
     } */}

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

