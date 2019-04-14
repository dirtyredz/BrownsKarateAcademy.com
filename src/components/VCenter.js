import React, { Component } from 'react'
import styled from 'styled-components'

export default class VCenter extends Component {
  render() {
    const {
      children,
      ...rest
    } = this.props
    return (
      <Center onClick={()=>console.log('V')} {...rest}>
        {children}
      </Center>
    )
  }
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`
