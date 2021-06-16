import {mainDate} from './containers/mainDate.js'
import {getTotalDays} from './getTotalDays.js'
// import {writeMonth} from './containers/writeMonth.js'

let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('allDays');
let month = document.getElementById('month');
let year = document.getElementById('year');
let main_date = document.getElementById('mainDate');

let prevMonth = document.getElementById('prevMonth');
let nextMonthDOM = document.getElementById('nextMonth');

let monthsNames = monthNames[monthNumber];
month.textContent = monthsNames;
year.textContent = currentYear.toString();

prevMonth.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());

const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendarSection__allDays--number otherDays">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class ="calendarSection__allDays--number todayStyle">${i}</div>`;
        }else{
            dates.innerHTML += ` <div class ="calendarSection__allDays--number">${i}</div>`;
        }
    }
}

export const getDay = () => {
  let day = currentDate.getDay()
  switch(day) {
    case 0:
      return 'Domingo'
    case 1:
      return 'Lunes'
    case 2:
      return 'Martes'
    case 3:
      return 'Miercoles'
    case 4:
      return 'Jueves'
    case 5:
      return 'Viernes'
    case 6:
      return 'Sábado'
  }
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return (start.getDay()) 
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);
main_date.innerHTML = mainDate()