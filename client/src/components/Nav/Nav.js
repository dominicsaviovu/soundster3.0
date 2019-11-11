import React from "react";
import "./Nav.css";
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from "react-router-dom";
//import animate from "animate.css";
import firebase from '../../firebase.js';

// let database = firebase.database();
const auth = firebase.auth();

class Nav extends React.Component {
	componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({ user, email:user.email});
      } else {
        window.location = "/";
      }
    });
 	};

 	logout =event => {
 		event.preventDefault();
	  	auth.signOut()
	    .then(() => {
	      this.setState({
	        user: null
	      });
	      window.location = "/";
	    })
	    .catch(err => console.log(err));
  	}	

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
		  dropdownOpen: false,
		  email: ""
		};
	}

	toggle() {
		this.setState({
		  dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return(
		<div className="row">
		<div className="col-md-12 navColumn">
			<div className="search-container">
				<div className="search-box">
					<input type="text" />
					<span></span>
				</div>
			</div>

			<div className="buttonsContainer"><Link to="/upload" className="glyphicon glyphicon-plus btn upload"></Link>
			<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className="profile-icon glyphicon glyphicon-user" />
              <DropdownMenu>
              	<div className="profileHeader">
	                <img className="profileImage" alt="profileImage" src="data:image/jpeg;base64,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"/>
	                <span className="profileName">{this.state.email}</span>
                </div>
                <div className="profileIcons text-center">
	                <div className="glyphicon glyphicon-heart icons btn" />
	                <div className="glyphicon glyphicon-retweet icons btn" />
	            </div>
                <div className="logout text-center btn" onClick={this.logout}>Log out</div>   
              </DropdownMenu>
          	</ButtonDropdown>
			
			</div>
			<div className="text-center websiteTitle animate rollIn">SOUNDSTER</div>
		</div>
		</div>
		)
	}
};
export default Nav;