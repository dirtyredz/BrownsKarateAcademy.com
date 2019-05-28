import React, { Component }  from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import * as Colors from '../utils/colors'
import styled, { createGlobalStyle } from 'styled-components'
import { getBarronClass, getBarronEvents, getHaywardClass, getHaywardEvents, getOutsideEvents } from  '../utils/GetGoogleCalendar'
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'


BigCalendar.momentLocalizer(moment)


class Calendar extends Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getBarronClass()
    .then(data => {
      console.log(data)
      this.setState({events: [...this.state.events, ...data]})
    })

    getBarronEvents()
    .then(data => {
      console.log(data)
      this.setState({events: [...this.state.events, ...data]})
    })

    getHaywardClass()
    .then(data => {
      console.log(data)
      this.setState({events: [...this.state.events, ...data]})
    })

    getHaywardEvents()
    .then(data => {
      console.log(data)
      this.setState({events: [...this.state.events, ...data]})
    })

    getOutsideEvents()
    .then(data => {
      console.log(data)
      this.setState({events: [...this.state.events, ...data]})
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Calendar" keywords={[`Calendar`]} />
        <MyGlobal/>
        <Section>
          <CalendarContainer>
            <BigCalendar
              localizer={BigCalendar.momentLocalizer(moment)}
              style={{height: '420px'}}
              events={this.state.events}
              startAccessor="start"
              endAccessor="end"
              views={{
                month: true,
                week: true,
                day: true,
              }}
              popup
              eventPropGetter={
                (event, start, end, isSelected) => {
                  let newStyle = {
                    backgroundColor: "lightgrey",
                    color: 'black',
                    borderRadius: "0px",
                    border: "none"
                  };
                  if (event.color){
                    newStyle.backgroundColor = event.color
                  }
                  return {
                    className: "",
                    style: newStyle
                  };
                }
              }
            />
          </CalendarContainer>
        </Section>
      </Layout>
    )
  }
}

export default Calendar

const CalendarContainer = styled.div`
  height: 1000px;
`

const MyGlobal = createGlobalStyle`
  .rbc-calendar {
    height: 1000px !important;
  }
  .rbc-event-label,
  .rbc-event-content {
    font-size: 10px !important;
  }
`
