import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
});

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    open: false
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <form className="formPanel" onSubmit={this.login}>
              <h2>Login</h2>
              {this.props.store.errors.loginMessage && (
                <h3 className="alert" role="alert">
                  {this.props.store.errors.loginMessage}
                </h3>
              )}
              <div className={classes.root}>
                <TextField
                  required
                  id="standard-required"
                  label="Username"
                  className={classes.textField}
                  onChange={this.handleInputChangeFor('username')}
                  margin="normal"
                />
                <TextField
                  required
                  id="password"
                  className={classes.textField}
                  type={this.state.showPassword ? 'text' : 'password'}
                  label="Password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <input className="btn" type="submit" name="submit" value="Log In" />
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default withStyles(styles)(connect(mapStoreToProps)(LoginForm));
