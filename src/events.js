import {getNumberMonth, getYear, newDate, getDate, allMonths} from './getAllDate.js'

import {weekdays} from './containers/weekdays.js'

const year = document.getElementById('year')
const month = document.getElementById('month')
const allDays = document.getElementById('allDays')

const prevMonth = document.getElementById('prevMonth')
console.log(prevMonth)

prevMonth.addEventListener('click', ()=> lastMonth())

const lastMonth = () => {
  if(getNumberMonth() !== 0){
      getNumberMonth() - 1;
  }else{
      getNumberMonth() = 11;
      getYear() - 1;
  }

  setNewDate();
}

// refresca los datos con la nueva fecha al hacer click en los botones
const setNewDate = () => {
    newDate.setFullYear(getYear(),getNumberMonth(),getDate());
    month.textContent = allMonths[getNumberMonth()];
    year.textContent = getYear.toString();
    allDays.textContent = '';
    weekdays(getNumberMonth());
}