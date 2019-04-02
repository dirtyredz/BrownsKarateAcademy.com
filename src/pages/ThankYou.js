import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <Section>
    <Fade bottom cascade>
      <Centered>
          <h1>Thank You</h1>
        <Larger>We look forward to meeting you at class.</Larger>
        <br />
        <p>Call us with any questions you may have.</p>
        <Larger>715-541-2187</Larger>
      </Centered>
      </Fade>
    </Section>
  </Layout>
)

export default ThankYou

const Centered = styled.div`
  text-align: center;
`

const Larger = styled.p`
  font-size: 120%;
  font-weight: 600;
`
