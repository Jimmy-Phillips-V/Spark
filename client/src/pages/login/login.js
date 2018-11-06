//Jimmy's Code
import React, { Component } from 'react';
import './login.css';
import firebase from '../../base'
import { Redirect } from "react-router-dom";
import { Container } from "../../components/Grid"
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


//Jimmy's Code
class login extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false,
      items: [],
      open:false,
      hideModal: false
    }

    this.hideModal = this.hideModal.bind(this)

    this.modalInstance = (
      <div onClick={this.hideModal}>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
            <div className="modal-content p-3">
          <div className="signin-form">
            <h1>Sign In</h1>
          <form onSubmit={this.signIn}>
          {/* Email */}
          <div className="form-group">
            <input value={this.state.value} 
            onChange={this.handleLoginEmailChange} 
            type="email" 
            placeholder="Email" 
            required>
            </input>
            </div>
            {/* //password */}
            <div className="form-group">
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
          </div>
          </Modal>
      </div>
    )
  }

  hideModal = (event) => {
    event.preventDefault();
    this.setState({hideModal: true});
    this.setState({ open: true });
  };

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

    const style = this.state.hideModal ? { display: 'none' } : {};

    return (
      <div className="chicken">
       <Container>
         <div id="title">
         <h1>Welcome to Spark</h1>
         <h4>An application for change</h4>
         </div>
         {/* <Button color="primary" variant="contained">Sign Up</Button> */}
     {/* Authentication  */}
     
     <div id="signup-form"  style={style}>
      {this.state.authenticated === false &&
        <div>
          <form onSubmit={this.createUser}>
            
            <h4>Spark Up</h4>
            <div className="form-group">
            <input 
            value={this.state.value} 
            onChange={this.handleCreateUserEmailChange} 
            type="email" 
            placeholder="Email" 
            required
            />
            </div>
            <div className="form-group">
            <input 
            value={this.state.value} 
            onChange={this.handleCreateUserPasswordChange} 
            type="password" 
            placeholder="Password" 
            required
            />
            </div>
            <Button color="primary" variant="contained"type="submit">Sign Up</Button>
          
          <div className="form-group">
          Already a Member? <Button onClick={this.hideModal}>Sign In</Button>
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
          <div className="form-group">
            <input value={this.state.value} 
            onChange={this.handleLoginEmailChange} 
            type="email" 
            placeholder="Email" 
            required>
            </input>
            </div>
            {/* //password */}
            <div className="form-group">
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

