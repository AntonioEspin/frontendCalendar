import {getDate, getDay, getMonth, getYear} from '../getAllDate.js'

export const mainDate = () => {
  const view = `
    <div class="principalDay">${getDate()}</div>
    <div class="fullDate">${getDay()} - ${getMonth()} - ${getYear()}</div>
  `
  return view
}