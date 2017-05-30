import React from 'react';
import SessionFeedContainer from './home_feed_container';

const Home = () => (
  <div className='welcome-descriptions'>
    <div className='welcome-subcontainer'>
      <h3>Create Music</h3>
      <p>Upload your own music.</p>
    </div>

    <div className='welcome-subcontainer'>
      <h3>Listen to Music</h3>
      <p>Discover new music or listen to your own.</p>
    </div>

    <div className='welcome-subcontainer'>
      <h3>Share Music</h3>
      <p>Share your music with others.</p>
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
