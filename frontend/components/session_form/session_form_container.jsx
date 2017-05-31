 import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || [],
  formType: ownProps.formType,
  modalOpen: ownProps.modalOpen
});


const mapDispatchToProps = (dispatch, ownProps) => {
  const formToProcess = ownProps.formType === 'login' ?
    (user) => dispatch(login(user)) : (user) => dispatch(signup(user));
  return ({
    processForm: formToProcess,
    login: (user) => dispatch(login(user))
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
