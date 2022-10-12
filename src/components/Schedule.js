import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import { Link } from "gatsby"

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
          <TimeList>
            <Time>4:45 – 5:30 Hatchlings (4-6)</Time>
            <Time>5:45 – 6:30 Pandas (beginners)</Time>
            <Time>6:45 – 7:30 Arnis (all ages)</Time>
            <Time>7:45 – 8:30 Adult Empty Hand</Time>
          </TimeList>
        </Verticle>
        <Verticle>
          <Day>Tuesday</Day>
          <TimeList>
            <Time>4:45 – 5:30 Hatchlings (4-6)</Time>
            <Time>5:45 – 6:30 Dragons (7-13 color)</Time>
            <Time>6:45 – 7:30 Weapons (adults)</Time>
            <Time>7:45 – 8:30 Adult Empty Hand</Time>
          </TimeList>
        </Verticle>
        <Verticle>
          <Day>Wednesday</Day>
          <TimeList>
            <Time>4:45 – 5:30 Hatchlings (4-6)</Time>
            <Time>5:45 – 6:30 Pandas (beginners)</Time>
            <Time>6:45 – 7:30 Arnis (all ages)</Time>
            <Time>7:45 – 8:30 Adult Empty Hand</Time>
          </TimeList>
        </Verticle>
        <Verticle>
          <Day>Thursday</Day>
          <TimeList>
            <Time>4:45 – 5:30 Hatchlings (4-6)</Time>
            <Time>5:45 – 6:30 Dragons (7-13 color)</Time>
            <Time>6:45 – 7:30 Weapons (adults)</Time>
            <Time>7:45 – 8:30 Adult Empty Hand</Time>
          </TimeList>
        </Verticle>
        <br />
        <br />
        <br />
        <MyLink to="/Calendar">View Our Calendar</MyLink>
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

const TimeList = styled.ul`
  padding-left: 20px;
`

const Time = styled.li`
  font-size: 140%;
  font-weight: 600;
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

const MyLink = styled(Link)`
  text-decoration: none;
  padding: 0 5px;
  margin: 0;
  color: #fff;
  cursor: pointer;
  font-size: 120%;
  font-weight: 400;
  margin-left: 10%;

  &:visited {
    color: #fff;
  }

  &:hover {
    color: ${Colors.Green};
  }
`
