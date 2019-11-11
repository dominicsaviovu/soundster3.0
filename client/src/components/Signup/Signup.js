import React, { Component } from 'react';
import "./Signup.css";
// import { Link } from "react-router-dom";
import firebase from '../../firebase.js';
//import animate from "animate.css";

let database = firebase.database();
const auth = firebase.auth();

class Signup extends Component {
	state = {
		name: "",
		email:"",
		password: ""
	};

	handleInputChange = event => {
	   const { name, value } = event.target;
	   this.setState({
	     [name]: value
	   });

	 };
  
  handleSignUpSubmit = event => {
    console.log("signup worked");
    event.preventDefault();

    database.ref().push({
      name: this.state.name,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    if (this.state.name.length < 0) {
      alert("Please enter your name");
      return;
    }
    else if (this.state.password.length < 5) {
      alert("Please enter a valid password");
      return;
    } else if (!this.state.email) {
      console.log("email invalid");
    }
    const promise =  auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
    promise.then(() => {
      auth.onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
            //console.log(firebaseUser);
            window.location = "/main";
          } else {
            console.log("not logged in");
          }
        })
    })
    promise.catch(error => console.log(error.message));

    this.PostUserCredentials();
  }

  render() {
    return (
    	<div classNameName="container">
    		<h1 className="soundifySignup">SOUNDSTER</h1>
			<form className="signupForm" method="post" action="/main">
				<label>
					<input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} required />
					<div className="label-text">Name</div>
				</label>
				<label>
					<input type="text" name="email" onChange={this.handleInputChange} value={this.state.email} required />
					<div className="label-text">Email</div>
				</label>
				<label>
			    	<input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} required />
			    	<div className="label-text">Password</div>
				</label>
				<button className="signupSubmit animate bounceIn" onClick={this.handleSignUpSubmit}>Submit</button>
				{/*<hr>
				<p>Login with:</p>
				<span>
       			<a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
   				<a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter"></span> Twitter</a>					
				</span>*/}
			</form>

    	</div>
    );
  }
}

export default Signup;