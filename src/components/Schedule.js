import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'

export default class Schedule extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      classes: [],
    }
  }

  render() {
    return (
      <Section
        color={Colors.Black}
        bgColor={Colors.Grey}
        anchor="Schedule"
        scales={true}
      >
        <CenterHorizontal>
          <h1>SCHEDULE</h1>
        </CenterHorizontal>
        <Verticle>
          <Day>Monday</Day>
          <Time>6:00-7:30pm Philippine Stick Training (Modern Arnis) Ages 7 and up</Time>
          <br />
          <Day>Tuesday & Thursday</Day>
          <Time>5:00-6:00pm Kids (Ages 7-13)</Time>
          <Time>6:00-6:45pm Weapons (Ages 7 +)</Time>
          <Time>6:45-7:45pm Adults (Ages 14 +)</Time>
        </Verticle>
        <BottomRight>
          Schedules may vary,
          Please call with any questions: 715-541-2187
        </BottomRight>
      </Section>
    )
  }
}

const CenterHorizontal = styled.div`
  text-align: center;
`
const Verticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: auto;
`

const Day = styled.span`
  font-size: 160%;
  font-weight: 900;
`

const Time = styled.span`
  font-size: 140%;
  font-weight: 600;
  padding-left: 60px;
  text-indent: -30px;
`
const BottomRight = styled.div`
  margin-left: auto;
  width: 300px;
  padding: 5px;
  padding-top: 20px;
  font-weight: 600;
  font-size: 80%;
  @media (max-width:${BreakPoints.mobileLandscape}px) {
    font-size: 90%;
    width: 200px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    font-size: 100%;
    width: 250px;
  }
`
