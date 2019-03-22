import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from "gatsby"

import * as Colors from '../utils/colors'

const Menu = props => {
  return (
    <Wrapper
      {...props}
    >
      <MyLink to="/">HOME</MyLink>
      <span>|</span>
      <MyLink to="/#Classes">CLASSES</MyLink>
      <span>|</span>
      <MyLink to="/#About">ABOUT</MyLink>
      <span>|</span>
      <MyLink to="/FAQ">FAQ</MyLink>
      <span>|</span>
      <MyLink to="/#Contact">CONTACT</MyLink>
    </Wrapper>
  )
}

Menu.propTypes = {

}

export default Menu

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 0;

  & span {
    line-height: 1;
    font-size: 131%;
    color: ${Colors.DarkGrey};
  }
`

const MyLink = styled(Link)`
  text-decoration: none;
  padding: 0 5px;
  margin: 0;
  color: inherit;

  &:visited {
    color: inherit;
  }
`
