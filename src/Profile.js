	
import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      status: false
    }
  };

  render() {
    return (
      <div className="shopping-list">
        <button className="square" onClick={() => changeState(this)}>
        { (this.state.status ? "Clicked" : "Not clicked")}
        </button>
          <h1>Domains  { (this.state.status ? "Clicked" : "Not clicked")} </h1>
          <ul>
           <li>Ruby On Rails</li>
           <li>Ruby</li>
           <li>Postgress</li>
          </ul>
      </div>
      );
    }
  }

function changeState(bindingData){
  bindingData.setState({status: !bindingData.state.status})
}


export default Profile;

