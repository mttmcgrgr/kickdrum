import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1 className="header-name">Kickdrum
      <img className="logo" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484184165/noun_409558_wimkcq.png"/>
    </h1>

    <GreetingContainer />
    { children }


  </div>
);

export default App;
