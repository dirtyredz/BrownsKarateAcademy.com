import axios from 'axios'
import moment from 'moment'
import { rrulestr } from 'rrule'

const BetweenStart = Date.UTC(2018, 1, 1)
const BetweenEnd = Date.UTC(2022, 1, 1)
const API_KEY = 'AIzaSyABRZefRD4vWG_PoovASktXQhyLc7VvPYs'

export function getBarronClass () {
  const CALENDAR_ID = 'kcbv0efmm5jfrcoecduhuhve9o@group.calendar.google.com'
  return new Promise(resolve => {
    axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`)
    .then(data => {
      console.log('Classes:', data.data.items)
      resolve(ProcessRecurringEvents(data.data.items, 'dodgerblue'))
    })
  })
}

export function getBarronEvents () {
  const CALENDAR_ID = 'qq2dco3isjk62mqgg877ch7e2k@group.calendar.google.com'
  return new Promise(resolve => {
    axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`)
    .then(data => {
      console.log('Events:', data.data.items)
      resolve(ProcessSingleEvents(data.data.items, 'lightgreen'))
    })
  })
}


export function getHaywardClass () {
  const CALENDAR_ID = '1klpv7c8ak6eh30jmsdlicg2e8@group.calendar.google.com'
  return new Promise(resolve => {
    axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`)
    .then(data => {
      console.log('Classes:', data.data.items)
      resolve(ProcessRecurringEvents(data.data.items, 'orchid'))
    })
  })
}

export function getHaywardEvents () {
  const CALENDAR_ID = '9rslp7dqepa7lcediuitc62sn0@group.calendar.google.com'
  return new Promise(resolve => {
    axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`)
    .then(data => {
      console.log('Events:', data.data.items)
      resolve(ProcessSingleEvents(data.data.items, 'lightpink'))
    })
  })
}

export function getOutsideEvents () {
  const CALENDAR_ID = 'dfoud45ms57i7glgh9e929s1kg@group.calendar.google.com'
  return new Promise(resolve => {
    axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`)
    .then(data => {
      console.log('Outside Events:', data.data.items)
      resolve(ProcessSingleEvents(data.data.items, 'forestgreen'))
    })
  })
}


export function ProcessRecurringEvents(events, color) {
  return events.map(event => {
    const startDate = moment(getDate(event.start)).utc().format('YYYYMMDD[T]HHmmss[Z]')
    const length = moment(getDate(event.end)).diff(moment(getDate(event.start)))
    const rule = rrulestr(event.rrule ? event.rrule : `DTSTART:${startDate}\n${event.recurrence[0]}`)
    const startDates = rule.between(new Date(BetweenStart), new Date(BetweenEnd))
    return startDates.map(start => {
      return {
        start: moment(start).toDate(),
        end: moment(start).add(length, 'milliseconds').toDate(),
        title: `${moment(start).format('h A')} ${event.summary}`,
        color: event.other ? event.other.color : color
      }
    })
  }).reduce((a, b) => [...a, ...b], [])
}

export function ProcessSingleEvents(events, color) {
  return events.map(event => {
    const startDate = moment(getDate(event.start)).utc()
    return {
      start: startDate.toDate(),
      end: moment(getDate(event.end)).utc().toDate(),
      title: `${startDate.format('h A')} ${event.summary}`,
      color: event.other ? event.other.color : color
    }
  })
}

function getDate(eventObj) {
  return eventObj.date ? eventObj.date : eventObj.dateTime ? eventObj.dateTime : eventObj
}
