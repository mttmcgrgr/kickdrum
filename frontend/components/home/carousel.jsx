import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor(){
    super()

  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      swipe: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false
    };

    const image1 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496964476/1280-jp-record-shelf-1_pi9izu.jpg"
    const image2 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496970709/Home-Page-Slide-One-2_q4li2l.jpg"
    const image3 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496970386/7f3e68c25ea2a4626415701d149749b9_tnoalq.jpg"
    return (
    	<div className='slider-container'>
      	<Slider {...settings}>
        	<div>
            <p className="carousel-text">Your next favorite song is here.<br/>And the next. And the next.</p>
            <img className='slider-img' src={image1} />
          </div>
          <div>
              <p className="carousel-text">Discover what your friends<br/> are listening to now.</p>
            <img className='slider-img' src={image2} />
          </div>
          <div>
            <p className="carousel-text">Share your latest creation<br/> with the world.</p>
            <img className='slider-img' src={image3} />
          </div>
        </Slider>
      </div>
    )
  };

}

export default Carousel;
