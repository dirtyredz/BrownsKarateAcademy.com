import React, { Component } from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'
import { Link } from "gatsby"
import HeadShake from 'react-reveal/HeadShake';
import ErrorBoundary from './ErrorBoundary'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }

    this.handleEnterMouse = this.handleEnterMouse.bind(this)
  }

  handleEnterMouse() {
    let Current = this.state.counter + 1
    this.setState({counter: Current})
  }

  render() {
    return (
      <ErrorBoundary FallbackComponent={<MyButton handleEnter={this.handleEnterMouse} {...this.props}/>}>
        <HeadShake
          spy={this.state.counter}
          appear
          delay={0}
          duration={500}
        >
          <MyButton handleEnter={this.handleEnterMouse} {...this.props} />
        </HeadShake>
      </ErrorBoundary>
    )
  }
}

const MyButton = (props) => {
  const { handleEnter, to, index, text, rest } = props
  const ButtonComponent = to ? ButtonLink : TheButton
  const Index = typeof index === "number" ? index : Math.floor(Math.random() * 2)
  return (
    <ButtonWrap as="span" >
      <ButtonComponent
        onMouseEnter={handleEnter}
        to={to}
        {...rest}
        color={Index % 2 ? Colors.Green : Colors.Red}
        >
        {text ? text : "LEARN MORE"}
      </ButtonComponent>
    </ButtonWrap>
  )
}

const TheButton = styled.button`
  background-color: ${(prop) => prop.color};
  max-width: 180px;
  padding: 10px;
  color: ${Colors.White};
  text-decoration: none;
  border: none;
  
  &:hover, &:hover:visited {
    color: ${Colors.Black}
  }
  &:visited {
    color: ${Colors.White};
  }
`
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
