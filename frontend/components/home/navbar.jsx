import React from 'react';
import Modal from 'react-modal';
import SessionModal from '../../util/session_modal';
import SessionForm from '../session_form/session_form';
import SessionFormContainer from '../session_form/session_form_container';
import { Link, hashHistory, withRouter } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: '',
      refresh: false
    };
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.logOutRedirect = this.logOutRedirect.bind(this);
    this.closeAndOpenModal = this.closeAndOpenModal.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

 componentDidMount() {
    this.setState({ modalOpen: false });
  }

  modalOpen(formType) {
    return () => this.setState({ modalOpen: true, formType: formType });
  }

  modalClose() {
    this.props.clearErrors();
    this.setState({modalOpen: false});
    SessionModal.content.opacity = 0;
  }

  closeAndOpenModal(formType) {
    return () => {
      this.modalOpen(formType)();
    };
  }

  onModalOpen() {
    SessionModal.content.opacity = 100;
  }


  sessionLinks(){
    return(
      <nav className="login-signup">
        <button className="session-button" onClick={this.modalOpen("login")}>
          Login
        </button>
        &nbsp;&nbsp;
        <button className="session-button" onClick={this.modalOpen("signup")}>
          Sign Up
        </button>
      </nav>
    );
  };

  logOutRedirect(){
    this.props.logout().then(() => this.props.router.push("/home"));

  }

  guestLogin() {
		const user = {username: "Guest", password: "123456"}
		this.props.login({user}).then(() => this.props.router.push("/posts"));
	}


  personalGreeting(currentUser, logout){
    return(
  	<hgroup className="header-group-right">
      <Link to={`/posts`} className="user-name">
        <img
          className="greeting-feed"
          src="http://res.cloudinary.com/dccshngpp/image/upload/v1496952043/download_cwklov.jpg"
          />
      </Link>
      <Link to={`/users/${currentUser.id}`} className="user-name">
        <img
          className="greeting-profile"
          src="http://res.cloudinary.com/dccshngpp/image/upload/v1496952045/profile-user-outline-vector-icon--social-icons--icons-download-26_oogjhi.png"
          />
      </Link>
      <img
        className="greeting-logout"
        onClick={this.logOutRedirect}
        src="http://res.cloudinary.com/dccshngpp/image/upload/v1496952049/43619-200_niqaab.png"
        />

  	</hgroup>
    );
  };


  render(){
    const { currentUser, logout } = this.props;
    if(currentUser){
      return (
        this.personalGreeting(currentUser, logout)
      )
     } else {
      return (
       <div>
         <nav className="login-signup">
           <button className="session-button" onClick={this.guestLogin}>
             Demo
           </button>
           &nbsp;&nbsp;
           <button className="session-button" onClick={this.modalOpen("login")}>
             Login
           </button>
           &nbsp;&nbsp;
           <button className="session-button" onClick={this.modalOpen("signup")}>
             Sign Up
           </button>
         </nav>

          <Modal
            isOpen={this.state.modalOpen}
            onAfterOpen={this.onModalOpen}
            onRequestClose={this.modalClose}
            closeTimeoutMS={10}
            contentLabel="Modal"
            style={SessionModal}>

            <SessionFormContainer
             formType={this.state.formType}
             isOpen={this.state.modalOpen}
             modalOpen={this.modalOpen}
             modalClose={this.modalClose}
             closeAndOpenModal={this.closeAndOpenModal}
            />
        </Modal>
      </div>
      )
    }
  }

}

export default withRouter(Greeting);
