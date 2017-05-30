import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, hashHistory } from 'react-router';
import PlayerContainer from './player/player_container';



const App = ({ children }) => (
  <div>
    <div className="background-image"></div>
    <div className="content">
    <div className="header-container">
      <div className="header-group-left">
        <div className="header-name">
          <Link className="logo-text" to={`/posts`}>Kickdrum</Link>
        </div>
      </div>
        <GreetingContainer className="header-group-right" />
        
        <footer>
          <PlayerContainer />
        </footer>
    </div>
         { children }
    </div>
  </div>
);

export default App;



// <img className="logo-image" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484184165/noun_409558_wimkcq.png"/>
