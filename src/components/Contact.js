import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import { GirlKarate2 } from '../components/Icons'
export default class Contact extends Component {
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
        anchor="Contact"
      >
        <CenterHorizontal>
          <h1>CONTACT</h1>
          <GreyTitle>INFORMATION</GreyTitle>
        </CenterHorizontal>
        <br/>
        <Wrapper>
          <Map>
            <MyIframe
              title="Google Maps"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=1571%20East%20Division%20Avenue%2C%20Barron%2C%20WI%2054812&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></MyIframe>
          </Map>
          <Information>
            <Larger>1571 East Division Avenue,</Larger>
            <Larger>Barron, WI 54812</Larger>
            <br />
            <Smaller>​Telephone:&nbsp;&nbsp;&nbsp;&nbsp;715-541-2187</Smaller>
            <Smaller>Email:&nbsp;&nbsp;&nbsp;&nbsp;brownskarateacademy@yahoo.com</Smaller>
          </Information>
          <ReverseKarate />
        </Wrapper>
      </Section>
    )
  }
}

const ReverseKarate = styled(GirlKarate2)`
  transform: rotateY(180deg);
  position: absolute;
  fill: gray;
  right: 27px;
  width: 400px;
  height: 400px;
  top: 56px;

  @media (max-width:${BreakPoints.mobileLandscape}px) {
    right: 0px;
    width: 125px;
    height: 200px;
    top: 84px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
    right: 0px;
    width: 250px;
    height: 250px;
    top: 107px;
  }
  @media (min-width:${BreakPoints.tablet}px) and (max-width:${BreakPoints.tabletLandscape}px) {
    right: 19px;
    width: 300px;
    height: 300px;
    top: 125px;
  }
`

const Larger = styled.div`
  font-weight: 700;
  font-size: 140%;
`
const Smaller = styled.div`
  font-size: 120%;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width:${BreakPoints.tablet}px) {
    flex-wrap: wrap-reverse;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tablet}px) {
  }
`

const Map = styled.div`
  overflow: hidden;
  border-radius: 15px;
  z-index: 1;
  position: relative;
  height: 350px;
  margin: 0 10px;
  width: 49vw;
  @media (max-width:${BreakPoints.tablet}px) {
    width: 98vw;
  }
`

const MyIframe = styled.iframe`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const Information = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 2;

  @media (max-width:${BreakPoints.tablet}px) {
    margin-bottom: 30px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tabletLandscape}px) {
    font-size: 80%;
  }
`

const CenterHorizontal = styled.div`
  text-align: center;
`
const GreyTitle = styled.h2`
  margin-top: -43px;
  @media (max-width:${BreakPoints.tablet}px) {
    margin-top: -34px;
  }
  @media (max-width:${BreakPoints.mobileLandscape}px) {
    margin-top: -24px;
  }
  color: ${Colors.DarkGrey};
`
