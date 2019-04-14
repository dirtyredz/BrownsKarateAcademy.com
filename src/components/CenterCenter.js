import React, { Component } from 'react'
import HCenter from './HCenter'
import VCenter from './VCenter'
import styled from 'styled-components'

export default class CenterCenter extends Component {
  render() {
    const {
      children,
      ...rest
    } = this.props
    return (
      <FullHeight>
        <VCenter {...rest}>
          {children}
        </VCenter>
      </FullHeight>
    )
  }
}

const FullHeight = styled(HCenter)`
  height: 100%
`
