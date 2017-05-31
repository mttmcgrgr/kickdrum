import { connect } from 'react-redux';
import { logout, signup, login } from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = (state) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
