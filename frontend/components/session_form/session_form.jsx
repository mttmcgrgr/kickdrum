import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			refresh: false
		 };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
		this.demoButton = this.demoButton.bind(this);
		this.changeForm = this.changeForm.bind(this);
	}



	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
		hashHistory.push(`/posts`);
		this.setState({refresh: true})
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup" className="session">signup !</Link>;
		} else {
			return <Link to="/login" className="session">login instead!</Link>;
		}
	}

	componentDidUpdate() {
	this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
	  if (this.props.loggedIn) {
			hashHistory.replace("/posts");
		}
	}


	guestLogin(e) {
		e.preventDefault;
		const user = { username: 'Guest', password: '123456'};
		this.setState({ username: 'Guest', password: '123456'});
		this.props.processForm({user});
		hashHistory.push(`/posts`);
	}

	changeForm() {
    if (this.props.formType === 'login') {
      return(
				<div>
					<a onClick={ this.props.modalOpen('signup') }>{'Don\'t have an account yet?'}</a>
					<a onClick={ this.guestLogin() }>{'Demo Account'}</a>
				</div>
				)
    } else {
      return(
				<a onClick={ this.props.modalOpen('login') }>{'Already signed up?'}</a>
			)
    }
  }

	demoButton(){
		if (this.props.formType === 'login') {
		return (
			  <a onClick={ this.guestLogin() }>{'Demo Account'}</a>
		  );
	  } else {
			return ""
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render(){
		const title = this.props.formType === "login" ?  "Login" : "Sign Up"
			return(
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<h3 className="create-title">{title}</h3>
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input className="button" type="submit" value="Submit" />
							<br/>
								{this.changeForm()}

						</div>
					</form>
				</div>
			)
	 }

}

export default SessionForm;
