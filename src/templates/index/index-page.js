import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Slider from '../../components/Slider'

import 'swiper/swiper-bundle.css';

import {
  WeAreContainer, 
  WeAreText,
  WeAreImageContainer,
  FixedBanner,
  WhyChooseUsContainer,
  WhyChooseUsSubTitle,
  WhyChooseUsTitle,
  WhyChooseUsInnerContent,
  WhyChooseUsInnerContentLeftSide,
  WhyChooseUsInnerContentRightSide,
  OurVisionContainer,
  OurVisionSubTitle,
  OurVisionTitle,
  OurVisionInnerContent,
  OurVisionContentLeftSide,
  OurVisionContentRightSide
} from './styles'


export const IndexPageTemplate = ({
  banners,
  weare,
  image,
  title,
  whychooseus,
  ourvision
}) => (
  <div id="home"> 
    <Slider sliderItems={banners} />

    <WeAreContainer id="about-us">
      <WeAreText>
        <h2>We are</h2>
        {weare.text}
      </WeAreText>
      <WeAreImageContainer>
        <img src={!!weare.image.childImageSharp ? weare.image.childImageSharp.fluid.src : weare.image} alt=""/>
      </WeAreImageContainer>
    </WeAreContainer>
    
    <FixedBanner
      backgroundImage={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      className="full-width-image margin-top-0"
    >
      <div>
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {title}
        </h1>
      </div>
    </FixedBanner>
    <WhyChooseUsContainer id="why-choose-us">
      <WhyChooseUsSubTitle>
        {whychooseus.subTitle}
      </WhyChooseUsSubTitle>
      <WhyChooseUsTitle>
        {whychooseus.title}
      </WhyChooseUsTitle>
      <WhyChooseUsInnerContent>
        <WhyChooseUsInnerContentLeftSide>
          <h3>{whychooseus.leftside.title}</h3>
          <p>{whychooseus.leftside.description}</p>
        </WhyChooseUsInnerContentLeftSide>
        <WhyChooseUsInnerContentRightSide>
        <img src={!!whychooseus.rightside.image.childImageSharp ? whychooseus.rightside.image.childImageSharp.fluid.src : whychooseus.rightside.image} alt=""/>
        </WhyChooseUsInnerContentRightSide>

      </WhyChooseUsInnerContent>
    </WhyChooseUsContainer>
    <OurVisionContainer id="our-vision">
      <OurVisionSubTitle>
        {ourvision.subTitle}
      </OurVisionSubTitle>
      <OurVisionTitle>
        {ourvision.title}
      </OurVisionTitle>
      <OurVisionInnerContent>
        <OurVisionContentLeftSide>
          <h3>{ourvision.leftside.title}</h3>
          <p>{ourvision.leftside.description}</p>
        </OurVisionContentLeftSide>
        <OurVisionContentRightSide>
        <img src={!!ourvision.rightside.image.childImageSharp ? ourvision.rightside.image.childImageSharp.fluid.src : ourvision.rightside.image} alt=""/>
        </OurVisionContentRightSide>

      </OurVisionInnerContent>
    </OurVisionContainer>
  </div>
)

IndexPageTemplate.propTypes = {
  banners: PropTypes.array,
  weare: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  whychooseus: PropTypes.object,
  ourvision: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        banners={frontmatter.banners}
        weare={frontmatter.weare}
        image={frontmatter.image}
        title={frontmatter.title}
        whychooseus={frontmatter.whychooseus}
        ourvision={frontmatter.ourvision}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index/index-page" } }) {
      frontmatter {
        banners {
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          smallText
          title
        }
        weare {
          image {
            childImageSharp {
              fluid(maxWidth: 720, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        whychooseus {
          subTitle
          title
          leftside {
            title
            description
          }
          rightside {
            image {
              childImageSharp {
                fluid(maxWidth: 790, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        ourvision {
          subTitle
          title
          leftside {
            title
            description
          }
          rightside {
            image {
              childImageSharp {
                fluid(maxWidth: 790, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
