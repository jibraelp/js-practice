// [INIT] //
let fullDate = new Date()
let year = fullDate.getFullYear()
let month = fullDate.getMonth()
let date = fullDate.getDate()
let weekDay = fullDate.getDay()
let arrayOfMonths = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'July',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec'
]
let arrayofWeekdays = [
	'Sun',
	'Mon',
	'Tues',
	'Wed',
	'Thurs',
	'Fri',
	'Sat',
]

// [LOG] //
console.log('fullDate', fullDate)
console.log('year', year)
console.log('month', arrayOfMonths[month])
console.log('date', date + 1)
console.log('day', arrayofWeekdays[weekDay])