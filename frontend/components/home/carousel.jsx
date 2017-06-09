import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor(){
    super()


  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    const image1 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496964476/1280-jp-record-shelf-1_pi9izu.jpg"
    const image2 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496970709/Home-Page-Slide-One-2_q4li2l.jpg"
    const image3 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496970386/7f3e68c25ea2a4626415701d149749b9_tnoalq.jpg"
    return (
    	<div className='slider-container'>
      	<Slider {...settings}>
        	<div><img className='slider-img' src={image1} /></div>
          <div><img className='slider-img' src={image2} /></div>
          <div><img className='slider-img' src={image3} /></div>

        </Slider>
      </div>
    )
  };

}

export default Carousel;
