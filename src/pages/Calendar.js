import React, { Component }  from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import * as Colors from '../utils/colors'
import styled, { createGlobalStyle } from 'styled-components'
import { ProcessRecurringEvents, ProcessSingleEvents, getBarronClass, getBarronEvents, getHaywardClass, getHaywardEvents, getOutsideEvents } from  '../utils/GetGoogleCalendar'
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'




class Calendar extends Component {
  constructor () {
    super()
    this.state = {
      events: [],
      localizer: BigCalendar.momentLocalizer(moment)
    }
  }
  componentDidMount () {
    this.setState({localizer: BigCalendar.momentLocalizer(moment)})

    // getBarronClass()
    // .then(data => {
    //   console.log(data)
    //   this.setState({events: [...this.state.events, ...data]})
    // })

    // getBarronEvents()
    // .then(data => {
    //   console.log(data)
    //   this.setState({events: [...this.state.events, ...data]})
    // })

    // getHaywardClass()
    // .then(data => {
    //   console.log(data)
    //   this.setState({events: [...this.state.events, ...data]})
    // })

    // getHaywardEvents()
    // .then(data => {
    //   console.log(data)
    //   this.setState({events: [...this.state.events, ...data]})
    // })

    // getOutsideEvents()
    // .then(data => {
    //   console.log(data)
    //   this.setState({events: [...this.state.events, ...data]})
    // })
  }
  render() {
    return (
      <Layout>
        <SEO title="Calendar" keywords={[`Calendar`]} />
        <MyGlobal/>
        <Section>
          <CalendarContainer>
          <StaticQuery
            query={graphql`
              query {
                allIcal {
                  edges {
                    node {
                      other{
                        color
                      }
                      start
                      end
                      summary
                      rrule
                      sourceInstanceName
                    }
                  }
                }
              }
            `}
            render={data => {
              const recurringEvents = ProcessRecurringEvents(data.allIcal.edges.filter(edge => edge.node.rrule).map(edge => edge.node))
              const singleEvents = ProcessSingleEvents(data.allIcal.edges.filter(edge => !edge.node.rrule).map(edge => edge.node))
              return (
                <>
                  <BigCalendar
                    localizer={this.state.localizer}
                    style={{height: '420px'}}
                    events={[...recurringEvents, ...singleEvents, ...this.state.events]}
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
                </>
              )
            }}
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
