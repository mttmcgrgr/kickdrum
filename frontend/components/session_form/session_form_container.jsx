 import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || [],
  formType: ownProps.formType,
  modalOpen: ownProps.modalOpen,
  modalClose: ownProps.modalClose,
  isOpen: ownProps.isOpen,
  closeAndOpenModal: ownProps.closeAndOpenModal
});


const mapDispatchToProps = (dispatch, ownProps) => {
  const form = ownProps.formType === 'login' ?
    (user) => dispatch(login(user)) : (user) => dispatch(signup(user));
    
  return ({
    processForm: form,
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);


//const mapDispatchToProps = (dispatch, { location }) => {
//  const formType = location.pathname.slice(1) || 'signup';
//  const processForm = (formType === 'login') ? login : signup;

//  return {
//    processForm: user => dispatch(processForm(user)),
//    formType
//  };
//};
