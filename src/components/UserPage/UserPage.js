import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrandCards from '../BrandCards/BrandCards.jsx'
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddBrandForm from '../AddBrandForm/AddBrandForm.jsx';


class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER_BRAND', payload: this.props.store.user.id })
  }
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.f_name}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <BrandCards />
        <AddBrandForm />
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
