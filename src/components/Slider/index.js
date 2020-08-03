import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper';

import {
  Container, 
  SwiperWrapper, 
  SliderItem,
  SliderItemSmallText,
  SliderItemTitle
  } from './styles';


const Slider = ({sliderItems}) => {

  useEffect(() => {
    new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
    })
  })

  return (
    <Container className="swiper-container" >
        <SwiperWrapper className="swiper-wrapper">
            {sliderItems.map((slider) => (
              <SliderItem backgroundImage={!!slider.image.childImageSharp ? slider.image.childImageSharp.fluid.src : slider.image} className="swiper-slide" key={slider.title}>
                <SliderItemSmallText>{slider.smallText}</SliderItemSmallText>
                <SliderItemTitle>{slider.title}</SliderItemTitle>
                
              </SliderItem>
            ))}
        </SwiperWrapper>
    </Container>
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