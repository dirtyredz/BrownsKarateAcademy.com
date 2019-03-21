/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from 'styled-components'
import Header from "./header"
import * as fonts from "../fonts"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <GlobalStyle />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Yozakura JP';
    src: local('YozakuraJP-Light'), url('${fonts.YozakuraJP.Light.OTF}') format('otf'),
    url('${fonts.YozakuraJP.Light.TTF}') format('truetype'),
    url('${fonts.YozakuraJP.Light.WOFF}') format('woff'),
    url('${fonts.YozakuraJP.Light.WOFF2}') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Yozakura JP';
    src: local('YozakuraJP-Regular'), url('${fonts.YozakuraJP.Regular.OTF}') format('otf'),
    url('${fonts.YozakuraJP.Regular.WOFF}') format('woff'),
    url('${fonts.YozakuraJP.Regular.WOFF2}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`
