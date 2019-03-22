import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/Section"
import * as Colors from '../utils/colors'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section
      color={Colors.Black}
      bgColor={Colors.Grey}
    >
      <h1>GREEN BOX</h1>
    </Section>
    <Section
      color={Colors.Black}
      bgColor={Colors.White}
      anchor="Welcome"
    >
      <h1>WELCOME</h1>
    </Section>
    <Section
      anchor="Classes"
    >
      <h1>CLASSES</h1>
    </Section>
    <Section
      color={Colors.Black}
      bgColor={Colors.Grey}
      anchor="Schedule"
      scales={true}
    >
      <h1>SCHEDULE</h1>
    </Section>
    <Section
      anchor="About"
    >
      <h1>ABOUT</h1>
    </Section>
    <Section
      color={Colors.Black}
      bgColor={Colors.Grey}
      anchor="Events"
      scales={true}
    >
      <h1>OUR EVENTS</h1>
      <br/>
      <h1>GALLERY</h1>
    </Section>
    <Section
      anchor="Contact"
    >
      <h1>CONTACT</h1>
    </Section>
  </Layout>
)

export default IndexPage
