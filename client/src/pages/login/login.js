//Jimmy's Code
import React, { Component } from 'react';
import './login.css';
import firebase from '../../base'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Local from "../Local";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import {Container} /*Row, Col*/ from "../../components/Grid";
import SigninModal from "../../components/Signin/SigninModal";
import SignIn from "../../components/Signin/Signin";


//Jimmy's Code
class Login extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false,
      items: [],
      show: false
      
    }
  }
  showModal = () => {
    this.setState({
    ...this.state,
    show: !this.state.show
    }); 
  }

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
      <div>
       <Container>
         <Jumbotron />
         <input type="button"
         onClick={this.showModal}
         value="Sign In"/>
         <SigninModal
         onClose={this.showModal}
         show={this.state.show}>
         <SignIn>
           
         </SignIn>

  
         </SigninModal>

     
      </Container>
      </div>
    );
  }
}

export default Login;

