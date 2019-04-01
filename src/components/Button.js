import React, { Component } from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'
import { Link } from "gatsby"
import HeadShake from 'react-reveal/HeadShake';

export default class Button extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  handleEnterMouse() {
    let Current = this.state.counter + 1
    this.setState({counter: Current})
  }

  render() {
    const Index = typeof this.props.index === "number" ? this.props.index : Math.floor(Math.random() * 2)
    return (
      <HeadShake
        spy={this.state.counter}
        appear
        delay={0}
        duration={500}
      >
        <ButtonWrap>
          <ButtonLink
            onMouseEnter={this.handleEnterMouse.bind(this)}
            {...this.props}
            color={Index % 2 ? Colors.Green : Colors.Red}
            >
            LEARN MORE
          </ButtonLink>
        </ButtonWrap>
      </HeadShake>
    )
  }
}

const ButtonLink = styled(Link)`
  background-color: ${(prop) => prop.color};
  max-width: 180px;
  padding: 10px;
  color: ${Colors.White};
  text-decoration: none;

  &:hover, &:hover:visited {
    color: ${Colors.Black}
  }
  &:visited {
    color: ${Colors.White};
  }
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`
