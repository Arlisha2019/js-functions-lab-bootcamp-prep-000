function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

function happyHolidaysTo(name, holiday) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

happyHolidaysTo('Tiffany')
happyHolidaysTo('Easter', 'Tiffany')
holidayCountdown(257, 'Easter')
