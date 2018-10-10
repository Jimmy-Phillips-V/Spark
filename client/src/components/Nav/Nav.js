import React from "react";
import "./Nav.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from '../../base'


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
      <Button component={Link} to="/" variant="contained" color="default" className={classes.button}>
       Home
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
      <Button onClick={()=>{console.log("firebase");firebase.auth().signOut()}} className={classes.button}>
      Logout
      </Button>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);




