import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class RegisterForm extends Component {
  state = {
    newUser: {
      fName: '',
      lName: '',
      email: '',
      username: '',
      password: '',
      searchable: ''
    }
  };

  registerUser = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'REGISTER', payload: this.state.newUser })
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newUser: {
        [propertyName]: event.target.value,
      }
    });
  };

  render() {
    const { fName, lName, email, username, password, searchable } = this.state.newUser
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="fName">
            First Name:
            <input
              type="text"
              name="fName"
              value={fName}
              required
              onChange={(event) => this.handleInputChangeFor(event, 'fName')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lName">
            Last Name:
            <input
              type="text"
              name="username"
              value={lName}
              required
              onChange={(event) => this.handleInputChangeFor(event, 'lName')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            E-mail:
            <input
              type="text"
              name="email"
              value={email}
              required
              onChange={(event) => this.handleInputChangeFor(event, 'email')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => this.handleInputChangeFor(event, 'username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => this.handleInputChangeFor(event, 'password')}
            />
          </label>
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Searchable</FormLabel>
            <RadioGroup value={searchable} onChange={(event) => this.handleInputChangeFor(event, searchable)}>
              <FormControlLabel value='true' control={<Radio />} label="Yes" />
              <FormControlLabel value='false' control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
