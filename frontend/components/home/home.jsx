import React from 'react';
import HomeFeedContainer from './home_feed_container';
import Carousel from './carousel';
import { Link, hashHistory, withRouter } from 'react-router';


const Home = () => (
  <div>
    <div className="carousel">
      <Carousel />
    </div>
    <footer className="footer">
      <div className="footer-text">Now Trending:</div>

      <HomeFeedContainer />

      <div className="links-container">
         <a href='https://github.com/mttmcgrgr/kickdrum' target="_blank">Github</a>
         <img className="home-vinyl" src="http://res.cloudinary.com/dccshngpp/image/upload/v1496889642/favicon_ntjldt.ico"/>
         <a href='https://www.linkedin.com/in/matt-mcgregor/' target="_blank">LinkedIn</a>
      </div>
    </footer>
  </div>




);

export default Home;
