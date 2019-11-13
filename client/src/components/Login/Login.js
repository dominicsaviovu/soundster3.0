import React, { Component } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import firebase from '../../firebase.js';
//import animate from "animate.css";

let database = firebase.database();
const auth = firebase.auth();

class Login extends Component {
	state = {
		email: "",
		password: ""
	};

	handleInputChange = event => {
	   const { name, value } = event.target;
	   this.setState({
	     [name]: value
	   });

	 };

	handleloginsubmit = event => {
	 	event.preventDefault();

	    database.ref().push({
	      name: this.state.email,
	      dateAdded: firebase.database.ServerValue.TIMESTAMP
	    });

	    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
	    promise.then(() => {
	      auth.onAuthStateChanged(firebaseUser => {
	          if (firebaseUser) {
	            console.log(firebaseUser);
	            window.location = "/main";	          
	          } else {
	            alert("Incorrect credentials");
	          }

	        })
	    }
	    )
	    promise.catch(error => console.log(error.message));
	}

  render() {
    return (
    	<div classNameName="container">
    		<div id="preloader_1">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div className="row">
				<div className="col-md-4"></div>
	    		<h1 className="soundster col-md-4">SOUNDSTER</h1>
	    	</div>
			<div id="preloader_1">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>

    		<div className="row">
    			<div className="col-md-4"></div>
				<form className="loginForm col-md-4">
					<label>
						<input type="text" id="userName" name="email" onChange={this.handleInputChange} value={this.state.email} required />
						<div className="label-text">Username</div>
					</label>
					<label>
				    	<input type="password" id="password" name="password" onChange={this.handleInputChange} value={this.state.password} required />
				    	<div className="label-text">Password</div>
					</label>
					<button className="loginSubmit animate bounceIn" onClick={this.handleloginsubmit}>Submit</button>
					{/*<hr>
					<p>Login with:</p>
					<span>
	       			<a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
	   				<a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter"></span> Twitter</a>					
					</span>*/}
					<div className="signUpSuggestion">Don't have login? <Link to="/signup" className="signUpLink">Sign up</Link></div>
				</form>
			</div>
    	</div>
    );
  }
}

export default Login;