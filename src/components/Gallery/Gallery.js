import React, { Component } from 'react'
import Img from "gatsby-image"
import Modal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Section from './../Section'
import * as Colors from '../../utils/colors'
import NoScroll from 'no-scroll'
import ImageModal from './Modal'
import BreakPoints from '../../utils/breakpoints'

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      openedIndex: null
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    Modal.setAppElement('#___gatsby')
  }

  openModal(index) {
    this.setState({modalIsOpen: true, openedIndex: index});
    NoScroll.on()
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false, openedIndex: null});
    NoScroll.off()
  }

  handlePrevious() {
    var prev = this.state.openedIndex - 1
    if (prev < 0) {
      prev = this.props.images.length - 1
    }
    this.setState({openedIndex: prev});
  }

  handleNext() {
    var next = this.state.openedIndex + 1
    if (next >= this.props.images.length) {
      next = 0
    }
    this.setState({openedIndex: next});
  }

  handleSelect(index) {
    this.setState({openedIndex: index});
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <CenterHorizontal>
          <h1>GALLERY</h1>
        </CenterHorizontal>
        <Wrapper>
          <Zoom cascade>
          {this.props.images.map((image, index) => {
            const {
              original,
            } = image.node
            return (
              <ImageWrapper
                onClick={this.openModal.bind(this, index)}
                key={`Image_${index}`}
              >
                <MyImage
                  key={`thumbnail_${index}`}
                  larger={this.state.openedIndex === index}
                  fluid={original.fluid}
                />
              </ImageWrapper>
            )
          })}
          </Zoom>
          {typeof this.state.openedIndex == 'number' &&  (
            <ImageModal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              openedIndex={this.state.openedIndex}
              handleNext={this.handleNext}
              handlePrevious={this.handlePrevious}
              handleSelect={this.handleSelect}
              images={this.props.images}
            />
          )}
        </Wrapper>
        {this.props.children}
      </>
    )
  }
}

const CenterHorizontal = styled.div`
  text-align: center;
`

const GlobalStyle = createGlobalStyle`
  .ReactModal__Overlay{
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.83) !important;
    cursor: pointer;
  }
`

const ImageWrapper = styled.div`
  transition: transform 250ms, width 500ms, height 500ms;
  padding: 5px;
  background-color: white;
`

const MyImage = styled(Img)`
  max-width: 500px;
  @media (max-width:${BreakPoints.tablet}px) {
    min-width: 100px;
  }
  min-width: 230px;
  height: 150px;
  pointer-events: ${props => props.larger ? 'none' : 'unset'};
  margin: auto;
  transition: transform 250ms, width 500ms, height 500ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 80%;
  justify-content: center;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  margin: 50px auto;

  & > *{
    flex: 1;

    &:hover{
      z-index: 99;
    }
  }
  & img {
    margin: 0;
  }
`
