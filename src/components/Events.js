import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import { GirlKarate3 } from '../components/Icons'
import RenderEvent from '../components/RenderEvent'
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default class Events extends Component {
  render() {
    return (
      <MySection
        color={Colors.Black}
        bgColor={Colors.Grey}
        anchor="Events"
        scales={true}
      >
        <CenterHorizontal>
          <WhiteTitle>OUR</WhiteTitle>
          <RedTitle>EVENTS</RedTitle>
        </CenterHorizontal>
        <br />
        <br />
        <ReverseKarate />
        <StaticQuery
          query={graphql`

            query {
              allSitePage(filter: { context: { Type: { eq: "e" }}}) {
                edges {
                  node {
                    path,
                    context{
                      Title
                      Type
                      Description
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const Events = data.allSitePage.edges
            return (
              <EventsWrapper>
                {Events.map((classInfo, index) => <RenderEvent key={`Event_${classInfo.ID}`} index={index} data={classInfo.node}/>)}
              </EventsWrapper>
            )
          }}
        />
        <br />
        <MyLink to="/Events">VIEW ALL EVENTS</MyLink>
      </MySection>
    )
  }
}

const MyLink = styled(Link)`
  color: ${Colors.Red};
  text-decoration: none;

  &:visited {
    color: ${Colors.Red};
  }
  &:hover {
    color: ${Colors.Green};
  }
`

const MySection = styled(Section)`
  min-height: 500px;
`

const EventsWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  z-index: 2;
  margin: 0;
  flex-wrap: wrap;
`


const CenterHorizontal = styled.div`
  padding-left: 50px;
`

const RedTitle = styled.h1`
  color: ${Colors.Red};
  padding-left: 10vw;
  margin-top: -35px;
  text-align: center;
  @media (max-width:${BreakPoints.mobileLandscape}px) {
    margin-top: -15px;
  }
  @media (min-width:${BreakPoints.mobileLandscape}px) and (max-width:${BreakPoints.tabletLandscape}px) {
    margin-top: -25px;
  }
`

const WhiteTitle = styled.h2`
  color: ${Colors.White};
  padding-right: 10vw;
  text-align: center;
`

const ReverseKarate = styled(GirlKarate3)`
  position: absolute;
  fill: ${Colors.DarkGrey};
  right: 27px;
  width: 400px;
  height: 400px;
  top: 56px;
  z-index: -1;

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
