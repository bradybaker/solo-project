import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css'

class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className='loginFormContainer'><LoginForm /></div>
        <div className='landingPageImage'></div>
        <div className='landingPageLeadText'>
          This will be the Landing Page Text. Here is more text to see how this wraps.
        </div>

        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </button>
        </center>
      </div>

    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
