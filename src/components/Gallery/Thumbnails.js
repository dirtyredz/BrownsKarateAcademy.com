import React, { Component } from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import * as Colors from '../../utils/colors'

export default class Thumbnails extends Component {
  constructor() {
    super()
    this.Thumbnails = React.createRef()
    this.state = {
      swipedRange: 0,
    }
    this.Old = 0;
    this.x0 = null;
  }

  move = (e) => {
    const Target = this.Thumbnails.current
    if (!Target) {
      return;
    }

    if(this.x0 || this.x0 === 0) {
      let dx = this.unify(e).clientX - this.x0
      const New = this.Old + dx
      let Adjusted = 0
      if (New > 0) {
        Adjusted = -Math.abs(New)
      } else if(New < 0) {
        Adjusted = Math.abs(New)
      }
      if ((this.props.selectedIndex * 156) + Adjusted < Target.clientWidth && (this.props.selectedIndex * 156) + Adjusted  > 0) {
        this.setState({swipedRange: Adjusted})
      }
      this.Old = New
      this.x0 = null
    }
  };

  unify = (e) => { return e.changedTouches ? e.changedTouches[0] : e };

  lock = (e) => {
    if (e.type === "mousedown"){
      e.preventDefault()
    }
    this.x0 = this.unify(e).clientX
  };

  prevent = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    const Target = this.Thumbnails.current
    if (!Target) {
      return;
    }

    Target.addEventListener('mousedown', this.lock, false);
    Target.addEventListener('touchstart', this.lock, false);

    Target.addEventListener('mouseup', this.move, false);
    Target.addEventListener('touchend', this.move, false);

    Target.addEventListener('touchmove', this.prevent, false)
  }

  componentWillUnmount(){
    const Target = this.Thumbnails.current
    if (!Target) {
      return;
    }

    Target.removeEventListener('mousedown', this.lock);
    Target.removeEventListener('touchstart', this.lock);

    Target.removeEventListener('mouseup', this.move);
    Target.removeEventListener('touchend', this.move);

    Target.removeEventListener('touchmove', this.prevent)
  }

  handleClick(index) {
    this.Old = 0;
    this.x0 = null;
    this.setState({swipedRange: 0})

    this.props.onClick(index)
  }

  render() {
    return (
      <Wrapper
        selectedIndex={this.props.selectedIndex}
        swipedRange={this.state.swipedRange}
        ref={this.Thumbnails}
      >
        {this.props.images.map((image, index) => {
          const {
            original,
          } = image.node
          return (
            <ThumbWrapper
              onClick={this.handleClick.bind(this, index)}
              selected={this.props.selectedIndex === index}
              key={`TinyThumbnail_${index}`}
            >
              <Img
                key={`thumbnail_${index}`}
                fluid={original.fluid}
              />
            </ThumbWrapper>
          )
        })}
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
  display: flex;
  left: ${props => `-${(props.selectedIndex * 156) + props.swipedRange}px !important`};
  transition: left 500ms, transform 500ms;
  margin-left: calc(50vw - 80px);
  position: absolute;
  bottom: 0;
`

const ThumbWrapper = styled.div`
  width: 150px;
  max-height: 150px;
  margin: auto;
  cursor: pointer;
  margin: 3px;
  border: ${props => props.selected ? `3px ${Colors.Red} solid` : 'unset'};
`
