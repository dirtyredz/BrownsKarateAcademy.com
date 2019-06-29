import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GreenBox from "../components/GreenBox"
import Welcome from "../components/Welcome"
import Classes from "../components/Classes"
import Schedule from "../components/Schedule"
import Contact from "../components/Contact"
import Events from "../components/Events"
import About from "../components/About"
import Gallery from "../components/Gallery/Gallery"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import { Dragon, Caligraphy } from '../components/Icons'
import styled from 'styled-components'
import Button from '../components/Button'
import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GreenBox />
    <Welcome />
    {/* <MyDragon style={{height: 'unset'}}/>
    <Classes />
    <MyCaligraphy style={{height: 'unset'}}/>
    <Schedule />
    <About />
    <Events>
      <StaticQuery
        query={graphql`
          query {
            allFile(limit: 10, filter: {ext: { eq: ".jpg"}, relativeDirectory: {eq: "gallery"} }) {
              edges {
                node {
                  original: childImageSharp {
                    fluid(maxWidth: 1100, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Gallery images={data.allFile.edges}>
            <Button to="/Gallery" text="VIEW MORE"/>
          </Gallery>
        )}
      />
    </Events>
    
    <Contact /> */}
  </Layout>
)

export default IndexPage

const MyDragon = styled(Dragon)`
  width: 195px;
  margin-top: -80px;
  opacity: 0.5;
  fill: ${Colors.DarkGrey};
  z-index: 1;
  position: absolute;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    width: 105px;
    margin-top: -50px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    width: 178px;
    margin-top: -65px;
  }
`
const MyCaligraphy = styled(Caligraphy)`
  width: 132px;
  margin-top: -160px;
  opacity: 0.7;
  fill: #757575;
  z-index: 1;
  position: absolute;
  right: 0;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    width: 84px;
    margin-top: -109px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    width: 113px;
    margin-top: -142px;
  }
`
