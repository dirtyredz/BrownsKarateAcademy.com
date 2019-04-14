import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/Gallery/Gallery"
import { StaticQuery, graphql } from "gatsby"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: {ext: { eq: ".jpg"}, relativeDirectory: {eq: "gallery"} }) {
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
      render={data => <Gallery images={data.allFile.edges}/>}
    />
  </Layout>
)

export default ThankYou
