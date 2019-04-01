import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default class Welcome extends Component {

  render() {
    return (
      <Section
      color={Colors.Black}
      bgColor={Colors.White}
      anchor="Welcome"
    >
      <CenterHorizontal>
        <RedTitle>WELCOME</RedTitle>
        <GreyTitle>To Our School</GreyTitle>
        <br />
        <SideBySide>
          <SchooleDescription>
            We pride ourselves in consistently providing superior, quality instruction in a positive, fun, and family-centered environment. It is our goal to provide every one of our students an individualized experience that will provide them with the skills that will help them be successful in LIFE!
          </SchooleDescription>
          <StaticQuery
            query={graphql`
              query {
                site {
                  siteMetadata {
                    title
                  }
                }
                placeholderImage: file(relativePath: { eq: "Studio.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
              <SchoolImage>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} /> 
              </SchoolImage>
            )}
          />
        </SideBySide>
      </CenterHorizontal>
    </Section>
    )
  }
}

const SchooleDescription = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 120%;
  /* @media (max-width:${BreakPoints.tablet}px) {
    font-size: 120%;
  } */
  @media (max-width:${BreakPoints.mobileLandscape}px) {
    font-size: 140%;
  }
`
const SchoolImage = styled.div`
  text-align: center;
  padding-right: 0;
  padding-left: 0;
  & img {
    border-radius: 30px;
  }

  /* @media (min-width: ${BreakPoints.mobile}px and max-width:${BreakPoints.tablet}px) {
    & img {
      border-radius: 10px;
    }
    padding-right: 60px !important;
    padding-left: 60px !important;
  }
  @media (max-width:${BreakPoints.mobile}px) {
    padding-right: 20px !important;
    padding-left: 20px !important;
  } */
`

const SideBySide = styled.div`
  display: flex;
  justify-content: space-around;
  /* width: 100%; */
  margin: 0 calc(25px + 2vw);
  & > div {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width:${BreakPoints.tablet}px) {
    flex-direction: column-reverse;
    & > div {
      max-width: 100%;
      width: 100%;
      padding: 20px 0;
    }
  }
`

const CenterHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const RedTitle = styled.h1`
  color: ${Colors.Red};
  z-index: 1;
`
const GreyTitle = styled.h1`
  margin-top: -43px;
  @media (max-width:${BreakPoints.tablet}px) {
    margin-top: -34px;
  }
  @media (max-width:${BreakPoints.mobileLandscape}px) {
    margin-top: -24px;
  }
  color: ${Colors.DarkGrey};
`
