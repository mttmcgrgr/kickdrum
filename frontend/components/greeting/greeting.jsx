import React from 'react';
import Modal from 'react-modal';
import SessionModal from '../../util/session_modal';
import SessionForm from '../session_form/session_form';
import SessionFormContainer from '../session_form/session_form_container';
import { Link, hashHistory } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: ''
    };
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.logOutRedirect = this.logOutRedirect.bind(this);
    this.closeAndOpenModal = this.closeAndOpenModal.bind(this);
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

  onModalOpen() {
    modal.content.opacity = 100;

  }

  modalClose() {
    this.setState({modalOpen: false});
    modal.content.opacity = 0;
  }

  closeAndOpenModal(formType) {
    return () => {
      this.openModal(formType)();
    };
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
            style={customStyles}>

              <SessionFormContainer
               formType={this.state.formType}
               modalOpen={this.state.modalOpen}
               closeAndOpenModal={this.closeAndOpenModal}
              />
          </Modal>
      </div>
      )
    }
  }

}

export default Greeting;
