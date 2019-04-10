import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from './Section'
import Menu from './Menu'
import Colors from '../utils/colors'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        placeholderImage: file(relativePath: { eq: "Logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderSection
        padding={false}
        tag="header"
      >
        <CallToday>CALL TODAY&nbsp;&nbsp;715-541-2187</CallToday>
        <HeaderMenu/>
        <CenterRow key="Image">
          <CircleImage fluid={data.placeholderImage.childImageSharp.fluid} />
        </CenterRow>
        <CenterRow key="Title">
          <WebsiteTitle>{data.site.siteMetadata.title}</WebsiteTitle>
        </CenterRow>
      </HeaderSection>
    )}
  />
)

Header.propTypes = {
}

Header.defaultProps = {
}

export default Header

const CallToday = styled.div`
  /* width: 500px; */
  text-align: right;
  padding: 0 25px;
  font-weight: 700;
  font-size: 140%;
`

const HeaderMenu = styled(Menu)`
  /* width: 500px; */
  max-width: 475px;
  margin-left: auto;
  margin-bottom: -20px;
`

const WebsiteTitle = styled.h1`
  letter-spacing: 20px;
  /* white-space: nowrap; */
  font-size: calc(100% + 3vw);
`

const HeaderSection = styled(Section)`
  /* height: 450px; */
  text-align: center;
`

const CenterRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const CircleImage = styled(Img)`
  background-color: ${Colors.White};
  max-width: 250px;
  max-height: 250px;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: #F3F3F3 solid 12px;

  & img {
    padding: 4%;
  }
`
