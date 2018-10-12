import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import axios from "axios";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
      console.log("works")
    if (this.props.incident === "Tornado") {
        axios
        .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
        .then(res => this.setState({info: res}))
    }
    else if (this.props.incident === "Fire") {
        axios
        .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
        .then(res => this.setState({info: res}))    
    }
    else if (this.props.incident === "Flood") {
        axios
        .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
        .then(res => this.setState({info: res}))    
    }
    else if (this.props.incident === "Hurricane") {
        axios
        .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
        .then(res => this.setState({info: res}))    
    }
    else if (this.props.incident === "Earthquake") {
        axios
        .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
        .then(res => this.setState({info: res}))    
    }
    else if (this.props.incident === "Drought") {
        axios
        .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
        .then(res => this.setState({info: res}))    
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              onClick={this.handleOpen}
            >
              Get Charity Details!
            </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          Incident={this.props.Incident}
        >
        <div style={getModalStyle()} className={classes.paper}>
                   <Typography variant="h6" id="modal-title">
                   {this.props.Incident}
                   </Typography>
                 </div>
               </Modal>
             </div>
           );
         }
       }


       SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;