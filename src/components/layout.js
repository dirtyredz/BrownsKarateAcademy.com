import React from "react"
import PropTypes from "prop-types"
import {VerticleButton, TinyButton} from "react-scroll-up-button";
import styled, { createGlobalStyle } from 'styled-components'
import Header from "./header"
import Footer from "./Footer"
import * as fonts from "../fonts"
import { withBreakpoints } from 'react-breakpoints'


const Layout = ({ children, breakpoints, currentBreakpoint }) => {
  const MobileView = breakpoints[currentBreakpoint] <= breakpoints.tablet
  const ScrollUpButton = MobileView ? TinyButton : VerticleButton
  return (
    <Wrapper>
      <GlobalStyle />
      <ScrollUpButton ToggledStyle={{opacity: 0.8, zIndex: 999}}/>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withBreakpoints(Layout)

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Yozakura JP';
    font-display: auto;
    src: local('YozakuraJP-Light'), url('${fonts.YozakuraJP.Light.OTF}') format('otf'),
    url('${fonts.YozakuraJP.Light.TTF}') format('truetype'),
    url('${fonts.YozakuraJP.Light.WOFF}') format('woff'),
    url('${fonts.YozakuraJP.Light.WOFF2}') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Yozakura JP';
    font-display: auto;
    src: local('YozakuraJP-Regular'), url('${fonts.YozakuraJP.Regular.OTF}') format('otf'),
    url('${fonts.YozakuraJP.Regular.WOFF}') format('woff'),
    url('${fonts.YozakuraJP.Regular.WOFF2}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  body {
    min-width: 325px;
  }
`

const Wrapper = styled.div`
  position: relative;
`
