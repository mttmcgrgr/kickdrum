import React from 'react';
import NavbarContainer from './home/navbar_container';
import { Link, hashHistory } from 'react-router';
import PlayerContainer from './player/player_container';



const App = ({ children }) => (
  <div>
    <div className="background-image"></div>
    <div className="content">
    <div className="header-container">
      <div className="header-group-left">
        <div className="header-name">
          <Link className="logo-text" to={`/home`}>
            <img
              className="logo-header"
              src="http://res.cloudinary.com/dccshngpp/image/upload/v1496796665/12-Vinyl-LP-Record-4_e9nbgk.png"
              />
          </Link>
          <div className="header-line"></div>
          <Link className="logo-text" to={`/home`}>Kickdrum</Link>
        </div>
      </div>
        <NavbarContainer className="header-group-right" />

        <footer>
          <PlayerContainer />
        </footer>
    </div>
         { children }
    </div>
  </div>
);

export default App;
