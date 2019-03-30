import PropTypes from "prop-types"
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
            fluid(maxWidth: 300) {
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
        <HeaderMenu/>
        <CenterRow>
          <CircleImage fluid={data.placeholderImage.childImageSharp.fluid} />
        </CenterRow>
        <CenterRow>
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

const HeaderMenu = styled(Menu)`
  position: absolute;
  top: 0;
  right: 0;
`

const WebsiteTitle = styled.h1`
  letter-spacing: 20px;
  white-space: nowrap;
  font-size: 100%;
`

const HeaderSection = styled(Section)`
  height: 450px;
  text-align: center;
`

const CenterRow = styled.div`
  display: flex;
  justify-content: center;
`


const CircleImage = styled(Img)`
  background-color: ${Colors.White};
  width: 300px;
  height: 300px;
  border-radius: 50%;

  & img {
    padding: 10px;
  }
`
