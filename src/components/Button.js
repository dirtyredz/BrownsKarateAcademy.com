import React, { Component } from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'
import { Link } from "gatsby"
import HeadShake from 'react-reveal/HeadShake';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    window.Sentry.configureScope((scope) => {
      Object.keys(info).forEach(key => {
        scope.setExtra(key, info[key]);
      });
    });
    window.Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <MyButton />;
    }
    return this.props.children;
  }
}
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
      <ErrorBoundary>
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

class MyButton extends Component {
  render() {
    const ButtonComponent = this.props.to ? ButtonLink : TheButton
    const Index = typeof this.props.index === "number" ? this.props.index : Math.floor(Math.random() * 2)
    return (
      <ButtonWrap>
        <ButtonComponent
          onMouseEnter={this.props.handleEnter}
          {...this.props}
          color={Index % 2 ? Colors.Green : Colors.Red}
          >
          {this.props.text ? this.props.text : "LEARN MORE"}
        </ButtonComponent>
      </ButtonWrap>
    )
  }
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
