import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const SwiperWrapper = styled.div`

`;

export const SliderItem = styled.div`
  background-image: ${props => `url(${props.backgroundImage})` || ""};
  height: calc(100vh - 97px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  flex-direction: column;
`;

export const SliderItemSmallText = styled.span`
  font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 6px;
    font-family: Poppins;
    text-align: center;
`;

export const SliderItemTitle = styled.h2`
    font-size: 80px;
    line-height: 90px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-family: Poppins;
    text-align: center;
`;
