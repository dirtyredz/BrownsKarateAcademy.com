import React, { Component } from 'react'
import styled from 'styled-components'

export default class HCenter extends Component {
  render() {
    const {
      children,
      ...rest
    } = this.props
    return (
      <Center onClick={()=>console.log('H')} {...rest}>
        {children}
      </Center>
    )
  }
}

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
