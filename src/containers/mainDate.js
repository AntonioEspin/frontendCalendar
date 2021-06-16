import {currentDay, getDay, monthsNames, currentYear} from '../getAllDates.js'

export const mainDate = () => {
  const view = `
    <div class="principalDay">${currentDay}</div>
    <div class="fullDate">${getDay()} - ${monthsNames} - ${currentYear}</div>
  `
  return view
}