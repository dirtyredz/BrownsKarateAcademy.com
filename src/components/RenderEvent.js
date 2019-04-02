import React, { Component } from 'react'
import styled from 'styled-components'
import BreakPoints from '../utils/breakpoints'
import Button from './Button'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

export default class RenderEvent extends Component {
  render() {
    const { data, index } = this.props
    let { context, path } = data
    if (!context) {
      context = data
    }
    return (
      <Fade delay={index * 500} >
        <EventWrap>
          <Title>{context.Title}</Title>
          <br/>
          <SmallDesc>{context.Description}</SmallDesc>
          <br/>
          <Button
            text="VIEW EVENT"
            aria-label={`Event ${context.Title}`}
            to={path}
            index={index}
          />
        </EventWrap>
       </Fade>
    )
  }
}

const Title = styled.div`
  font-size: 120%;
  font-weight: 700;
`

const EventWrap = styled.div`
  display: flex;
  /* height: 100%; */
  max-width: 300px;
  flex-direction: column;
  margin-top: 30px;
  justify-content: space-between;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    max-width: 160px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    max-width: 235px;
  }
`


const SmallDesc = styled.span`
  font-size: 80%;
  font-weight: 600;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    font-size: 110%;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    font-size: 90%;
  }
`
