import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Colors from '../utils/colors'
import FishScales from '../images/FishScales.png'

class Section extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const {
      bgColor,
      color,
      padding,
      anchor,
      tag,
      scales,
      children,
      ...rest
    } = this.props

    return (
      <Wrapper
      as={tag}
      >
        {scales && <Image/>}
        <Content
          padding={padding}
          color={color}
          bgColor={bgColor}
          scales={scales}
        >
          <a name={anchor}></a>
          {children}
        </Content>
      </Wrapper>
    )
  }
}

Section.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  anchor: PropTypes.string,
  tag: PropTypes.string,
  padding: PropTypes.bool,
  scales: PropTypes.bool,
}

Section.defaultProps = {
  bgColor: Colors.Black,
  color: Colors.White,
  anchor: "Section",
  tag: "section",
  padding: true,
  scales: false,
}

export default Section

const Wrapper = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  `

const Content = styled.div`
  padding: ${props => props.padding ? "20px 10%" : "10px 0"};
  color: ${props => props.color};
  background-color: ${props => props.scales ? 'none' : props.bgColor};
  `

const Image = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${props => props.bgColor};
  background-image: url("${FishScales}");
  width: 100%;
  filter: blur(2px);
  background-position: center;
`
