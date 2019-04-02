import React, { Component } from 'react'
import styled from 'styled-components'
import BreakPoints from '../utils/breakpoints'
import Button from './Button'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import * as Colors from '../utils/colors'

export default class RenderTrial extends Component {
  render() {
    const { data, index } = this.props
    let { context, path } = data
    if (!context) {
      context = data
    }
    return (
      <Fade delay={index * 500} >
        <TrialWrap>
          <span>{context.Title}</span>
          <Button
            text="VIEW TRIAL"
            aria-label={`Trial ${context.Title}`}
            to={path}
            index={index} />
        </TrialWrap>
       </Fade>
    )
  }
}

const TrialWrap = styled.div`
  display: flex;
  height: 160px;
  max-width: 300px;
  flex-direction: column;
  margin-top: 20px;
  width: 300px;
  justify-content: space-between;
  background-color: ${Colors.White};
  color: ${Colors.Black};
  padding: 10px;
  font-weight: 600;
  border-radius: 13px;
  text-align: center;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    max-width: 160px;
    height: 100px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    max-width: 235px;
  }
`
