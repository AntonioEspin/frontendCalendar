let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let monthsNames = monthNames[monthNumber];

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

export {
  currentDate,
  currentDay,
  monthNumber,
  currentYear,
  monthsNames,
}