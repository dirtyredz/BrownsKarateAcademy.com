import React, { Component } from 'react'
import styled from 'styled-components'
import Section from "./Section"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import axios from 'axios'
import Button from './Button'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import { GirlKarate3 } from '../components/Icons'
import Loader from './Loader'

export default class Events extends Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      events: [],
    }
  }
  componentDidMount() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.mystudio.academy/e/Api/events?companyid=2506`,{
      timeout: 20000,
      responseType: 'json'
    })
    .then(res => {
      this.setState({events: res.data.msg, loading: false})
    })
    .catch((error) => {
      this.setState({loading: false})
    });
  }

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
        {!this.state.loading
          ? this.state.events.length > 0
            ? (
              <EventsWrapper>
                {[...this.state.events, ...this.state.events, ...this.state.events].map((data, index) => <RenderEvent key={`Event_${data.event_id}_${index}`} index={index} data={data}/>)}
              </EventsWrapper>
            )
            : (
              <NoEvents>We currently have no events scheduled, Please call 715-541-2187 for more information.</NoEvents>
            )
          : <Loader />
        }
        <br />
      </MySection>
    )
  }
}

let Delay = -500

const RenderEvent = ({data, index}) => {
  Delay += 500
  const type = 'e'
  return (
    <Zoom delay={Delay}>
      <EventWrap>
        <Title>{data.event_title}</Title>
        <br/>
        <SmallDesc>{data.event_desc}</SmallDesc>
        <br/>
        <Button
          aria-label={`Class ${data.event_title}`}
          to={`/MyStudioView?Event=${data.event_id}`}
          state={{
            Image: data.event_banner_img_url,
            Title: data.event_title,
            Description: data.event_desc,
            Subtitle: data.event_category_subtitle,
            type,
            MyStudio: `https://www.mystudio.academy/${type}/?=7155412187/2506/${data.event_id}`
          }}
          index={index}
        />
      </EventWrap>
    </Zoom>
  )
}

const MySection = styled(Section)`
  min-height: 500px;
`

const NoEvents = styled.div`
  font-size: 140%;
  font-weight: 700;
  text-align: center;
`
const Title = styled.div`
  font-size: 120%;
  font-weight: 700;
`
const EventsWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  z-index: 2;
  margin: 0;
  flex-wrap: wrap;
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
