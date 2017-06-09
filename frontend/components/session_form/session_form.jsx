import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
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
		this.props.processForm({user})
		hashHistory.push(`/posts`)
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
					<a onClick={ this.props.closeAndOpenModal('signup') }>{'Don\'t have an account?'}</a>
					<br/>
					<a onClick={ this.guestLogin }>{'Demo Account'}</a>
					<br/>
					<a onClick={ this.props.modalClose }>{'Close'}</a>
				</div>
				)
    } else {
      return(
				<div className="session-text">
					<a className="session-text" onClick={ this.props.closeAndOpenModal('login') }>{'Already have an account?'}</a>
					<br/>
				<a onClick={ this.guestLogin }>{'Demo Account'}</a>
					<br/>
					<a onClick={ this.props.modalClose }>{'Close'}</a>
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
		const title = this.props.formType === "login" ?  "Login" : "Create Account"
		const button = this.props.formType === "login" ?  "Login" : "Create"

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
							<input className="button" type="submit" value={button} />
							<br/>

								{this.changeForm()}

						</div>
					</form>
				</div>
			)
	 }

}

export default withRouter(SessionForm);
