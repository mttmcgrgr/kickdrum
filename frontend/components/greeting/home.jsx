import React from 'react';
import HomeFeedContainer from './home_feed_container';

const Home = () => (
  <div className='welcome-descriptions'>
    <div className='welcome-subcontainer'>
      <h3>Your Next Favorite Song Is Already Here</h3>
      <p>And The Next. And The Next.</p>
    </div>

    <div className='welcome-subcontainer'>
      <h3>Listen While You Search</h3>
      <p>Browse Freely Without Interrupting Your Listening</p>
    </div>

    <div className='welcome-subcontainer'>
      <h3>Share Music</h3>
      <p>Uload Your Own Songs Or Share Your Favorites</p>
    </div>
    <footer className="footer">
       <h1 className="footer-text">Popular Now:
         <div></div>
       </h1>
      <HomeFeedContainer />

    </footer>
  </div>
);

export default Home;
