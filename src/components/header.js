import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Section from './Section'
import Menu from './Menu'

const Header = ({ siteTitle }) => (
  <Section
    padding={false}
    tag="header"
  >
    {siteTitle}
    <HeaderMenu/>
  </Section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderMenu = styled(Menu)`
  float: right;
`
