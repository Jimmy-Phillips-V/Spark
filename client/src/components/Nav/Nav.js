import React from "react";
import "./Nav.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from '../../base';
// import { Button } from 'react-bootstrap';
// import { Navbar } from 'react-bootstrap'




const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

// function handleClick() {
// firebase.auth().signOut()
//  }


function Nav(props) {
  const { classes } = props;
  return (
    <div>
      <nav id="spark-nav" className="navbar navbar-dark bg-dark">
      <a id="brand"className="navbar-brand" href="/">
      <h3>Spark</h3></a>


      <ul id="buttons">
      <Button component={Link} to="/" variant="contained" color="default" className={classes.button}>
       Saved
      </Button>
      <Button component={Link} to="/local" variant="contained" color="secondary" className={classes.button}>
       Local
      </Button>
      <Button component={Link} to="/national" variant="contained" color="primary" className={classes.button}>
     National
      </Button>
     <Button component={Link} to="/global" variant="contained" color="secondary" className={classes.button}>
       Global
      </Button>
      </ul>
      <ul id="logout">
      <Link to="/"><Button id="logout" onClick={()=>{firebase.auth().signOut()}} className={classes.button}>
      Logout
      </Button></Link></ul>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);




