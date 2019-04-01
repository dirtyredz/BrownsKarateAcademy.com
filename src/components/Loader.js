import React, { Component } from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'

export default class Loader extends Component {
  render() {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Spinner = styled.div`
  border: 16px solid transparent;
  border-top: 16px solid ${Colors.Red};
  border-radius: 50%;
  width: 85px;
  height: 85px;
  animation: Spinner 800ms ease-out infinite;
  margin: 0;
  position: absolute;
  top: calc(50% - 55px);
  left: calc(50% - 55px);

  @keyframes Spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
