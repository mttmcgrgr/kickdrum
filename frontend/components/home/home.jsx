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
    this.setState({loading: false}); }, 50);
  }



  render() {
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

            <Carousel />

          </div>
          <footer className="footer">
            <div className="footer-text">Now Trending:</div>

            <HomeFeedContainer />

            <div className="links-container">
              <div className="scroll-container">
                <p className="scroll-play">Scroll & Play</p>
                <img className="arrow" src="http://res.cloudinary.com/dccshngpp/image/upload/v1496978084/white-arrow-png-41970_cthlu7.png" />
              </div>
               <a href='https://github.com/mttmcgrgr/kickdrum' target="_blank">Github</a>
               <img className="home-vinyl" src="http://res.cloudinary.com/dccshngpp/image/upload/v1496889642/favicon_ntjldt.ico"/>
               <a href='https://www.linkedin.com/in/matt-mcgregor/' target="_blank">LinkedIn</a>
            </div>
          </footer>
        </div>
      );
    }
  }
}





export default Home;
