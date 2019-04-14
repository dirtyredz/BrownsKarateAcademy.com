import React, { Component } from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'
import BreakPoints from '../../utils/breakpoints'

export default class LargeImage extends Component {
  constructor() {
    super();

    this.LargeImage = React.createRef()
    this.x0 = null;
  }

  move = (e) => {
    if(this.x0 || this.x0 === 0) {
      let dx = this.unify(e).clientX - this.x0
      if (dx > 0) {
        this.props.prev()
      } else if(dx < 0) {
        this.props.next()
      }
      this.x0 = null
    }
  };

  unify = (e) => { return e.changedTouches ? e.changedTouches[0] : e };

  lock = (e) => {
    e.preventDefault()
    this.x0 = this.unify(e).clientX
  };

  prevent = (e) => {
    e.preventDefault();
  }

  AttachEvents() {
    const Target = this.LargeImage.current.imageRef.current
    if (!Target) {
      return;
    }

    Target.addEventListener('mousedown', this.lock, false);
    Target.addEventListener('touchstart', this.lock, false);

    Target.addEventListener('mouseup', this.move, false);
    Target.addEventListener('touchend', this.move, false);

    Target.addEventListener('touchmove', this.prevent, false)
  }
  RemoveEvents() {
    const Target = this.LargeImage.current.imageRef.current
    if (!Target) {
      return;
    }

    Target.removeEventListener('mousedown', this.lock);
    Target.removeEventListener('touchstart', this.lock);

    Target.removeEventListener('mouseup', this.move);
    Target.removeEventListener('touchend', this.move);

    Target.removeEventListener('touchmove', this.prevent)
  }
  componentDidUpdate() {
    this.AttachEvents.bind(this)()
  }
  componentDidMount() {
    this.AttachEvents.bind(this)()
  }
  getSnapshotBeforeUpdate() {
    this.RemoveEvents.bind(this)()
    return null;
  }
  componentWillUnmount(){
    this.RemoveEvents.bind(this)()
  }
  render() {
    return (
      <MyImage ref={this.LargeImage} {...this.props} />
    )
  }
}

const MyImage = styled(Img)`
  width: 75vw;
  position: absolute !important;
  top: 45%;
  transform: translateY(-50%) translateX(-50%);
  cursor: default;
  max-width: 1100px;
  left: 50%;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    width: 95vw;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tabletLandscape}px) {
    width: 85vw;
  }

  & img {
    margin: 0;
  }
`
