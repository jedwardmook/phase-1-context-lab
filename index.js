/* Your Code Here */
function createEmployeeRecord(employee){
 
    return {  
            firstName: employee[0],
            familyName: employee[1],
            title: employee[2],
            payPerHour: employee[3],
            timeInEvents : [],
            timeOutEvents : [],
        }
}

function createEmployeeRecords(array){
    return array.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(timeEvent){
let [date, hour] = timeEvent.split(' ')
let eventObj = {
	type: 'TimeIn',
	hour: parseInt(hour, 10),
	date: date,
}
this.timeInEvents.push(eventObj)
return this
}

function createTimeOutEvent(timeEvent){
let [date, hour] = timeEvent.split(' ')
let eventObj = {
    type: 'TimeOut',
    hour: parseInt(hour, 10),
    date: date,
}
this.timeOutEvents.push(eventObj)
return this
}

function hoursWorkedOnDate(date){
const timeIn = this.timeInEvents.find(event =>event.date === date)
const timeOut = this.timeOutEvents.find(event =>event.date === date)

return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
//console.log(this)
let hours = hoursWorkedOnDate.call(this, date)
const wagesEarned = this.payPerHour * hours
return wagesEarned
}

function calculatePayroll(employeeRecords){
const record = employeeRecords.map(employee => allWagesFor.call(employee))

return record.reduce((currentValue, total) => currentValue + total)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(emp => emp.firstName === firstNameString)
}
