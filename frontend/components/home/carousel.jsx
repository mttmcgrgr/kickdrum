import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor(){
    super()

  }

  render() {
    const image1 = "http://res.cloudinary.com/dccshngpp/image/upload/v1496964476/1280-jp-record-shelf-1_pi9izu.jpg"

    return (
    	<div>
        <p className="carousel-text">Your next favorite song is here.<br/>And the next. And the next.</p>
        <img className='slider-img' src={image1} />
      </div>
    )
  };

}

export default Carousel;


/*
<div>
    <p className="carousel-text">Discover what your friends<br/> are listening to now.</p>
  <img className='slider-img' src={image2} />
</div>
<div>
  <p className="carousel-text">Share your latest creation<br/> with the world.</p>
  <img className='slider-img' src={image3} />
</div>
*/
