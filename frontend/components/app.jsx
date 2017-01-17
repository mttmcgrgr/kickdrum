import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, hashHistory } from 'react-router';


const App = ({ children }) => (
  <div>
    <div className="header-container">
      <div className="header-group-left">
        <div className="header-name">
          <Link to={`/posts`}>Kickdrum</Link>
          <img className="logo" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484184165/noun_409558_wimkcq.png"/>
        </div>
      </div>
        <GreetingContainer className="header-group-right" />
    </div>
         { children }
  </div>
);

export default App;
