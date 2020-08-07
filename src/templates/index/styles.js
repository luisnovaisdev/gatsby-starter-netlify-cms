import styled from 'styled-components';

export const WeAreContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  align-items: center;
  padding: 100px 0;

  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }

`;

export const WeAreText = styled.div`
  background-color: #000;
  color: white;
  white-space: break-spaces;
  max-width: 460px;
  padding: 62px 50px;
  margin: auto;
  font-size: 21px;

  h2{
    font-size: 35px;
    font-weight: 900;
    color: #fff;
    margin-bottom: 46px;
  }

  @media(max-width: 600px){
    margin: 0;
    width: 100%;
    max-width: unset;
  }
`;

export const WeAreImageContainer = styled.div`

`;

export const FixedBanner = styled.div`
  background-image: ${props => `url(${props.backgroundImage})` || ""};
  background-position: top left;
  background-attachment: fixed;

  div{
    display: flex;
    height: 150px;
    line-height: 1;
    justify-content: space-around;
    align-items: left;
    flex-direction: column;

    h1{
      box-shadow: rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px;
      background-color: rgb(255, 68, 0);
      color: white;
      line-height: 1;
      padding: 0.25em;

      @media(max-width: 600px){
        padding: 10px 25px;
        font-size: 40px!important;
      }
    }
  }
`;

export const WhyChooseUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
`;
export const WhyChooseUsSubTitle = styled.p`
  font-weight: bold;
  margin-bottom: 45px;
  color: #000000;
  font-size: 16px;
  letter-spacing: 6.4px;
  line-height: 20px;
`;
export const WhyChooseUsTitle = styled.h2`
  font-size: 80px;
  font-weight: bold;
  line-height: 90px;
  color: #000;
  text-align: center;

  @media(max-width: 600px){
    font-size: 68px;
    font-weight: bold;
    line-height: 75px;
  }
`;

export const WhyChooseUsInnerContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;

  @media(max-width: 600px){
    flex-direction: column-reverse;
  }
  
`;

export const WhyChooseUsInnerContentLeftSide = styled.div`
  flex: 1;
  padding-left: 100px;

  @media(max-width: 600px){
    padding: 0 15px;
  }

  h3{
    font-size: 24px;
    line-height: 40px;
    font-weight: 600;
    padding-right: 190px;
    margin-bottom: 40px;   
    
    @media(max-width: 600px){
      padding: 0;
    }
  }

  p{
    font-weight: 400;
    padding-right: 150px;
    margin-bottom: 7px;
    white-space: break-spaces;

    @media(max-width: 600px){
      padding: 0;
    }
  }
`;
export const WhyChooseUsInnerContentRightSide = styled.div`
  flex: 1;

  img{
    max-width: 616px;

    @media(max-width: 600px){
      max-width: 100%;
    }
  }

  
`;

export const OurVisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  padding: 0 40px;

  @media(max-width: 600px){
    padding: 0 15px;
  }
`;
export const OurVisionSubTitle = styled.p`
  font-weight: bold;
  margin-bottom: 45px;
  color: #000000;
  font-size: 16px;
  letter-spacing: 6.4px;
  line-height: 20px;
  margin-bottom: 10px;
`;
export const OurVisionTitle = styled.h2`
  font-size: 80px;
  font-weight: bold;
  line-height: 90px;
  color: #caa13f;
  text-align: center;

  @media(max-width: 600px){
    font-size: 40px;
    font-weight: bold;
    line-height: 45px;
  }

`;

export const OurVisionInnerContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;

  @media(max-width: 600px){
    flex-direction: column-reverse;
  }
`;

export const OurVisionContentLeftSide = styled.div`
  flex: 1;
  padding-left: 100px;

  @media(max-width: 600px){
    padding: 0 15px;
  }

  h3{
    font-size: 24px;
    line-height: 40px;
    font-weight: 600;
    padding-right: 190px;
    margin-bottom: 40px;    

    @media(max-width: 600px){
      padding: 0;
    }
  }

  p{
    font-weight: 400;
    padding-right: 150px;
    margin-bottom: 7px;
    white-space: break-spaces;

    @media(max-width: 600px){
      padding: 0;
    }
  }
`;
export const OurVisionContentRightSide = styled.div`
  flex: 1;

  img{
    max-width: 616px;

    @media(max-width: 600px){
      max-width: 100%;
    }
  }
`;