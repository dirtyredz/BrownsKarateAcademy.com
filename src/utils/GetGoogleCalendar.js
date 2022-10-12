import moment from 'moment-timezone'
import { rrulestr } from 'rrule'

export function ProcessRecurringEvents(events, color) {
  return events.map(event => {
    const rrule = event.rrule.match(/^RRULE\:(.*)$/gm)[0];
    const startDate = moment(getDate(event.start)).add(5, 'hours').format('YYYYMMDD[T]HHmmss[Z]')
    const length = moment(getDate(event.end)).diff(moment(getDate(event.start)))
    const rule = rrulestr(`DTSTART;TZID=America/Chicago:${startDate}\n${rrule}`)
    // Add a rrule to rruleSet
    const startDates = rule.between(moment().subtract(1, 'year').toDate(), moment().add(1, 'year').toDate())
    return startDates.map(start => {
      return {
        start: moment(start).toDate(),
        end: moment(start).add(length, 'milliseconds').toDate(),
        title: `${moment(start).format('h:mm A')} ${event.summary}`,
        color: event.other ? event.other.color : color
      }
    })
  }).reduce((a, b) => [...a, ...b], [])
}

export function ProcessSingleEvents(events, color) {
  return events.filter((event) => event.start && event.end).map(event => {
    const startDate = moment(getDate(event.start))
    return {
      start: startDate.toDate(),
      end: moment(getDate(event.end)).toDate(),
      title: `${startDate.format('h:mm A')} ${event.summary}`,
      color: event.other ? event.other.color : color
    }
  })
}

function getDate(eventObj) {
  const selectedTimeZone = 'America/Chicago';
  moment.tz.setDefault(selectedTimeZone);
  return (eventObj.date ? eventObj.date : eventObj.dateTime ? eventObj.dateTime : eventObj).replace('.000Z', '-05:00')
}
