//Jimmy's Code
import React, { Component } from 'react';
// import logo from '../../logo.svg';
// import firebaseLogo from '../../firebase-logo.png';
import '../../App.css';
import Dashboard from '../../components/Dashboard';
import firebase from '../../base'

//Jimmy's Code
class App extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false,
      items: []
    }
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
      <div className="App">
        {/* Header   */}
    <div className="header">
      <div>
        <img src={firebaseLogo} alt="logo"></img>
      </div>
      <div>
        <img src={logo} alt="logo" className="App-logo"></img>
      </div>
    </div>

     {/* Authentication  */}
    <div className="dashed-container">

      <div className="cut-sentence">
        <i className="fa fa-scissors"></i> cut and use in your program
        <span className="orange-words">Authentication</span>
      </div>

      {this.state.authenticated === false &&
        <div>
          <form id="create-user-form" onSubmit={this.createUser}>
            <h2>Create user</h2>
            <input value={this.state.value} onChange={this.handleCreateUserEmailChange} type="email" placeholder="Email" required></input>
            <input value={this.state.value} onChange={this.handleCreateUserPasswordChange} type="password" placeholder="Password" required></input>
            <button id="sign-up-button" type="submit">Sign Up</button>
          </form>

          <form id="sign-in-form" onSubmit={this.signIn}>
            <h2>Sign in</h2>
            <input value={this.state.value} onChange={this.handleLoginEmailChange} type="email" placeholder="Email" required></input>
            <input value={this.state.value} onChange={this.handleLoginPasswordChange} type="password" placeholder="Password" required></input>
            <button id="signIn-button" type="submit">Log In</button>
          </form>

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

      {this.state.authenticated === true &&
        <Dashboard
          uid={this.state.uid}
          items={this.state.items}
        />
      }

      </div>
    );
  }
}

export default App;

