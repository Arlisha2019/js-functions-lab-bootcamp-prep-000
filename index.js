function happyHolidays() {
  return "Happy holidays!"
}

function happysHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

function happysHolidaysTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

happyHolidaysTo('Tiffany')
happyHolidaysTo('Easter', 'Tiffany')
holidayCountdown(257, 'Easter')
