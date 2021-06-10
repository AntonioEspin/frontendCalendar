import './containers/weekdays.js'
import './events.js'
import './containers/calendarSection.js'
import {mainDate} from './containers/mainDate.js'
// import {calendarSection} from './containers/calendarSection.js'

(function calendar () {
  const main_date = document.getElementById('mainDate');
  main_date.innerHTML = mainDate()

  // const calendar_section = document.getElementById('calendarSection')
  // calendar_section.innerHTML = calendarSection()
})()