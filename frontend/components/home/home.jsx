import React from 'react';
import HomeFeedContainer from './home_feed_container';
import Carousel from './carousel';
import Loading from 'react-loading-animation';
import { Link, hashHistory, withRouter } from 'react-router';


class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({loading: false}); }, 40);
  }

  render() {
    const image1 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496964476/1280-jp-record-shelf-1_pi9izu.jpg"

    if(this.state.loading === true) {
      return(
        <div className="loading">
          <Loading />
        </div>
      );
    } else {
      return(
        <div>
          <div className="carousel">
            <img className='slider-img' src={image1} />
            <p className="carousel-text">Your next favorite song is here.<br/>And the next. And the next.</p>
          </div>
          <footer className="footer">
            <div className="footer-text">Now Trending:</div>

            <HomeFeedContainer />

            <div className="links-container">
              <div className="scroll-container">
                <p className="scroll-play">Scroll & Play</p>
                <img
                  className="arrow"
                  src="http://res.cloudinary.com/dccshngpp/image/upload/v1497141905/white-arrow-transparent-png-10_fdwjtn.png" />
              </div>
              <div className="personal-sites">
                <a href='https://github.com/mttmcgrgr/kickdrum' target="_blank">Github</a>
                <img className="home-vinyl" src="http://res.cloudinary.com/dccshngpp/image/upload/v1496889642/favicon_ntjldt.ico"/>
                <a href='https://www.linkedin.com/in/matt-mcgregor/' target="_blank">LinkedIn</a>

              </div>

            </div>
          </footer>
        </div>
      );
    }
  }
}





export default Home;
