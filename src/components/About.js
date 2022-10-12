import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default class About extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      classes: [],
    }
  }

  render() {
    return (
      <Section
        anchor="About"
      >
        <CenterHorizontal>
          <GreenTitle>ABOUT</GreenTitle>
          <WhiteTitle>OUR SCHOOL</WhiteTitle>
          <br />
          <SideBySide>
            <StaticQuery
              query={graphql`
                query {
                  site {
                    siteMetadata {
                      title
                    }
                  }
                  imageTwo: file(relativePath: { eq: "kids.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 700, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  imageOne: file(relativePath: { eq: "Beach.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 700, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Pictures>
                  <Img fluid={data.imageOne.childImageSharp.fluid} />
                  <Img fluid={data.imageTwo.childImageSharp.fluid} />
                </Pictures>
              )}
            />
            <Information>
              Born out of a passion for Martial Arts and a desire to bring it’s benefits to as many people as possible, Brown’s Karate Academy has become the premiere location for exceptional Martial Arts in mid-west Wisconsin. After traveling the US (and beyond) and training in several different martial arts disciplines, we decided to make Wisconsin our home.
              <br />
              <br />
              Drawing upon nearly 50 years of Martial Arts experience, Master Brown set out to establish a superior Martial Arts School that would stand the test of time and build a vast base of amazing students.
              <br />
              <br />
              Teaching the highest quality martial arts available is our #1 priority. Making our dojo a family-friendly environment is a very close second. We feel that family involvement is key to success in all of life’s endeavors, and we have seen firsthand how that involvement can make or break one’s training in the world of martial arts. We love it when families train together – whether as students or as encouraging training partners, so we do all that we can to help you help your student. We offer Parents as Coaches classes to help parents help their children to have a successful journey to becoming a Black Belt. And we host many activities throughout the year to encourage families to get involved in the world of BKA, such as picnics, awards nights, and parent’s nights out. We also offer Karate Birthday Parties for students and non-students alike!
            </Information>
          </SideBySide>
        </CenterHorizontal>
      </Section>
    )
  }
}

const CenterHorizontal = styled.div`
  text-align: center;
`

const GreenTitle = styled.h1`
  color: ${Colors.Green};
  padding-right: 10vw;
`

const WhiteTitle = styled.h2`
  color: ${Colors.White};
  padding-left: 10vw;
  margin-top: -50px;
  @media (max-width:${BreakPoints.mobileLandscape}px) {
    margin-top: -20px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tabletLandscape}px) {
    margin-top: -35px;
  }
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

  @media (max-width:${BreakPoints.tabletLandscape}px) {
    flex-direction: column-reverse;
    & > div {
      max-width: 100%;
      width: 100%;
      padding: 20px 0;
    }
  }
`


const Pictures = styled.div`
  text-align: center;
  padding-right: 0;
  padding-left: 0;
  & img {
    border-radius: 30px;
  }
  & > div:first-child {
    margin-right: 20%;
  }
  & > div:last-child {
    margin-left: 40%;
    margin-top: -10%;
  }
`

const Information = styled.div`
  font-size: 100%;
  text-align: left;
  padding: 10px;
`
