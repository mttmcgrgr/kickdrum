import React from 'react';
import HomeFeedContainer from './home_feed_container';

const Home = () => (
  <div className='welcome-descriptions'>

  
    <footer className="footer">
       <h1 className="footer-text">Popular Now:
         <div></div>
       </h1>
      <HomeFeedContainer />

    </footer>
  </div>
);

export default Home;
