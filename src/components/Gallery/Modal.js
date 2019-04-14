import React, { Component } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
import * as Colors from '../../utils/colors'
import BreakPoints from '../../utils/breakpoints'
import { ChevronLeft, ChevronRight } from './../Icons'
import Thumbnails from './Thumbnails'
import LargeImage from './LargeImage'

export default class ImageModal extends Component {
  constructor() {
    super();

    this.LargeImage = React.createRef()
  }

  render() {
    return (
      <MyModal
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <Prev onClick={this.props.handlePrevious}><ScaledChevronLeft /></Prev>
        <LargeImage
          prev={this.props.handlePrevious}
          next={this.props.handleNext}
          selectedIndex={this.props.openedIndex}
          fluid={this.props.images[this.props.openedIndex].node.original.fluid}
        />
        <Next onClick={this.props.handleNext}><ScaledChevronRight /></Next>
        <Thumbnails
          selectedIndex={this.props.openedIndex}
          images={this.props.images}
          onClick={this.props.handleSelect}
        />
      </MyModal>
    )
  }
}

const ScaledChevronLeft = styled(ChevronLeft)`
  transform: scale(2);
  height: 100%;
  width: 100%;
  fill: ${Colors.White};

  &:hover{
    fill: red;
  }

  @media (max-width:${BreakPoints.tablet}px) {
    display: none;
  }
`

const ScaledChevronRight = styled(ChevronRight)`
  transform: scale(2);
  height: 100%;
  width: 100%;
  fill: ${Colors.White};

  & svg:hover{
    fill: red;
  }

  @media (max-width:${BreakPoints.tablet}px) {
    display: none;
  }
`

const Prev = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  left: 10px;
  height: 100px;
`

const Next = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 100px;
  right: 10px;
`

const MyModal = styled(Modal)`

`
