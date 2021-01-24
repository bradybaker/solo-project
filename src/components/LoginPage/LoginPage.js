import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import './LoginPage.css'

class LoginPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <div className='header'>
          <h1>MYSIZE</h1>
          <LoginForm />
        </div>
        <div className='landingPageImage'></div>
        <div className='landingPageLeadText'>
          Welcome to MYSIZE
        </div>
        <div className='subHeader'>
          <p className='subHeaderText'>A one stop shop to store your clothing sizes for all of your favorite brands</p>
          <p className='subHeaderText'>Follow others and never worry about including a gift receipt again</p>
        </div>
        <center className='registerText'>
          {/* <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </button> */}
          <h1 >New User?</h1>
          <RegisterForm />
        </center>
      </div>

    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
