import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper';



const Slider = ({sliderItems}) => {

  useEffect(() => {
    new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
    })
  })

  return (
    <div>
      <div className="swiper-container" >
          <div className="swiper-wrapper">
              {sliderItems.map((slider) => (
                <div className="swiper-slide" key={slider.title}>{slider.title}</div>
              ))}
          </div>
      </div>
    </div>
  )
} 


Slider.propTypes = {
  sliderItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Slider;