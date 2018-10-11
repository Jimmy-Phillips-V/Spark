{/* Authentication  */}
<div className="dashed-container">


{this.state.authenticated === false &&
  <div>
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

{
  this.state.authenticated === true &&
  // <Link to="/local">go to page</Link>
  <Redirect to="/local"/>
    
}