import {getYear, getDate, getNumberMonth} from '../getAllDate.js'

const allDays = document.getElementById('allDays')

// Despliega el total de dias que tiene el mes
export const weekdays = (month) => {
  for(let i = startDay(); i>0;i--){
    allDays.innerHTML += ` <div class="calendarSection__allDays--number otherDays">
        ${getTotalDays(getNumberMonth()-1)-(i-1)}
    </div>`;
  }

  for(let i=1; i<=getTotalDays(month); i++){
    if(i===getDate()) {
      allDays.innerHTML += ` <div class ="calendarSection__allDays--number todayStyle">${i}</div>`;
    }else{
      allDays.innerHTML += ` <div class ="calendarSection__allDays--number">${i}</div>`;
    }
  }
}
// Saber el primer dia del mes
const startDay = () => {
    let start = new Date(getYear(), getNumberMonth(), 1);
    console.log(start.getDay())
    return start.getDay()
}

// Obtener total de dias del mes en curso
const getTotalDays = (month) => {
  if(month === -1) month = 11

  if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {
        return leapYear() ? 29:28;
    }
}

// obtener año bisiesto
const leapYear = () => {
  return ((getYear() % 100 !== 0) && (getYear() % 4 === 0) || (getYear() % 400 === 0))
}

weekdays(getNumberMonth())