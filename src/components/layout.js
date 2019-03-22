/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import styled, { createGlobalStyle } from 'styled-components'
import Header from "./Header"
import Footer from "./Footer"
import * as fonts from "../fonts"

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
        <GlobalStyle />
        <ScrollUpButton />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
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
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
`
