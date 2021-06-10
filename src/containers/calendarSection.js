import {getYear, getMonth} from '../getAllDate.js'

const year = document.getElementById('year')
const month = document.getElementById('month')

const calendarSection = () => {
  year.textContent = getYear().toString()
  month.textContent = getMonth()
}

calendarSection()

