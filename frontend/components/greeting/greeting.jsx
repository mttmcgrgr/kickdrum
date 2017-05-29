import React from 'react';
import { Link, hashHistory } from 'react-router';


const sessionLinks = () => (
  <nav className="login-signup">
    <button className="session-button">
      <Link to="/login" activeClassName="current">Login</Link>
    </button>
    &nbsp;&nbsp;
    <button className="session-button">
      <Link to="/signup" activeClassName="current">Sign Up</Link>
    </button>
  </nav>
);



const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group-right">

    <Link to={`/users/${currentUser.id}`} className="user-name">{currentUser.username}</Link>
    <button className="logout-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
