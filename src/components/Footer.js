import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Section from './Section'
import * as Colors from '../utils/colors'
import Menu from './Menu'

const Footer = props => {
  return (
    <Section
      color={Colors.Black}
      bgColor={Colors.Grey}
      padding={false}
      tag="footer"
    >
        <FooterMenu/>
        © <time>{new Date().getFullYear()}</time>, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Section>
  )
}

Footer.propTypes = {

}

export default Footer

const FooterMenu = styled(Menu)`
  float: right;
`
