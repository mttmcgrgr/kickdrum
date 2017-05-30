import React from 'react';
import Modal from 'react-modal';
import modal from '../../util/modal';
import SessionForm from '../session_form/session_form';
import { Link, hashHistory } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: 'login'
    };
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.logOutRedirect = this.logOutRedirect.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  modalOpen() {
    this.setState({modalOpen: true});
  }

  onModalOpen() {
    modal.content.opacity = 100;

  }

  modalClose() {
    this.setState({modalOpen: false});
    modal.content.opacity = 0;
  }

  sessionLinks(){
    return(
    <div>
      <nav className="login-signup">
        <button className="session-button" onClick={this.modalOpen}>
          Login
        </button>
        &nbsp;&nbsp;
        <button className="session-button" onClick={this.modalOpen}>
          Sign Up
        </button>
      </nav>
      <Modal
        isOpen={this.state.modalOpen}
        onAfterOpen={this.onModalOpen}
        onRequestClose={this.modalClose}
        closeTimeoutMS={10}
        contentLabel="Modal"
        style={modal}>
        <SessionForm formType={this.state.formType}/>
      </Modal>

    </div>
    );
  };

  logOutRedirect(){
    this.props.logout();
    this.modalClose();
  }


  personalGreeting(currentUser, logout){
    return(
  	<hgroup className="header-group-right">
      <Link to={`/users/${currentUser.id}`} className="user-name">{currentUser.username}</Link>
      <button className="logout-button" onClick={this.logOutRedirect}>Log Out</button>
  	</hgroup>
    );
  };

  formModal(type){
    return(
      <Modal
        isOpen={this.state.modalOpen}
        onAfterOpen={this.onModalOpen}
        onRequestClose={this.modalClose}
        closeTimeoutMS={10}
        contentLabel="Modal"
        style={modal}>
        <SessionForm formType={this.state.type}/>
      </Modal>
    )
  }

  render(){
    const { currentUser, logout } = this.props;

    if(currentUser){
      return (
        this.personalGreeting(currentUser, logout)
      );
     } else {
      return (
        this.sessionLinks()
      );
    }
  }

}

export default Greeting;
