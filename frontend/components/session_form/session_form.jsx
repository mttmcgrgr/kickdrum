import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			photo_url: "https://tinyurl.com/y7qh9mqs"
		 };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
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
		this.props.processForm({user}).then(() => this.props.router.push("/posts"));
	}


	guestLogin() {
		this.state.username = "Guest";
		this.state.password = "123456";
		const user = this.state;
		this.props.login({user}).then(() => this.props.router.push("/posts"));
	}

	changeForm() {
    if (this.props.formType === 'login') {
      return(
				<div className="session-text">
					<a  onClick={ this.props.closeAndOpenModal('signup') }>{'Don\'t have an account?'}</a>
					<br/>
					<a onClick={ this.guestLogin }>{'Try it out'}</a>
					<br/>
					<img onClick= { this.props.modalClose }
						className="session-close"
						src="http://res.cloudinary.com/dccshngpp/image/upload/v1497326370/52084_vqsrat.png"/>
				</div>
				)
    } else {
      return(
				<div className="session-text">
					<a  onClick={ this.props.closeAndOpenModal('login') }>{'Already have an account?'}</a>
					<br/>
				<a onClick={ this.guestLogin }>{'Try it out'}</a>
					<br/>
				<img onClick= { this.props.modalClose }
					className="session-close"
					src="https://www.broadsheet.com.au/assets/icons/close.svg"/>
				</div>

			)
    }
  }


	renderErrors() {
		return(
			<ul className="errors">
				{this.props.errors.map((error, i) => (
					<li className="errors"  key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render(){
		const title = this.props.formType === "login" ?  "Log In" : "Create Account"
		const button = this.props.formType === "login" ?  "Log In" : "Create"

			return(
				<div className="login-form-container">

					<form onSubmit={this.handleSubmit} className="login-form-box">
						<img className="session-vinyl" src="http://res.cloudinary.com/dccshngpp/image/upload/v1496889642/favicon_ntjldt.ico"/>
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
							<div className="form-button-container">
								<input className="form-button" type="submit" value={button} />
							</div>
							<br/>

								{this.changeForm()}

						</div>
					</form>
				</div>
			)
	 }

}

export default withRouter(SessionForm);
