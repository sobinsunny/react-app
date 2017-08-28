	
import React, { Component } from 'react';

const githubRepo = {
    username: "sobinsunny"
  }


class Github extends Component {
  constructor() {
    super();
    this.state = {
      sho_notification: false
    }
  };

redirect_to =(e) => {
  this.context.router.push({pathname: `/sobinsunny`}); 
 }

  render() {
    console.log("git hub")
    return (
      <div class="github_profile">
        <button className="square" onClick={() => this.redirect_to() }>
          Repo Name {githubRepo.username}
        </button>
      </div>
      );
    }
  }

export default Github;

