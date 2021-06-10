export const allMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export const newDate = new Date()

export const getDate = () => {
  const date = newDate.getDate()
  return date
}

export const getDay = () => {
  const day = newDate.getDay()
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
export const getNumberMonth = () => {
  const month = newDate.getMonth()
  return month
}

export const getMonth = () => {
  const months = allMonths[newDate.getMonth()]
  return months
}

export const getYear = () => {
  const year = newDate.getFullYear()
  return year
}