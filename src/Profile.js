	
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Profile extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Domains List for {this.props.name}</h1>
        <ul>
          <li>Ruby On Rails</li>
          <li>Ruby</li>
          <li>Postgress</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
