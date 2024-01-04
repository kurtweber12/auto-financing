import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { pullLength } from '../Redux/reducers/loanSlice'

const useScheduleCreation = (dateList, loanTerm, loan) => {
    //dateList is array
    //datelist[0] = month
    //datelist[1] = day
    //datelist[2] = year
    //console.log(dateList)

    const months30days = ['Apr', 'Jun', 'Sep', 'Nov']
    const months28days = ['Feb']
    const months31days = ['Jan', 'Mar', 'May', 'Jul', 'Aug', 'Oct', 'Dec']
    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let monthInNumber = 0
    for(let i = 0; i < allMonths.length; i++){
        if(allMonths[i] === dateList[0]){
            monthInNumber = i + 1
        }
    }
    //console.log(`LOAN TERM ${loanTerm}`)

    function AmortizationObj(monthName, monthNumber, year, monthPayment, remainingPrinciple, 
        monthPrinciple, monthInterest, day, principlePaid, interestPaid,  id) 
        {
        this.monthName = monthName
        this.monthNumber = monthNumber
        this.year = year
        this.monthPayment = monthPayment
        this.remainingPrinciple = remainingPrinciple
        this.monthPrinciple = monthPrinciple
        this.monthInterest = monthInterest
        this.day = day
        this.principlePaid = principlePaid
        this.interestPaid = interestPaid
        this.id = id
    }

    let amortizationList = []
    let dateNumber = monthInNumber
    let dateName = dateList[0]
    let periodsRemain = loanTerm
    let dateDayNumber 
    let periodPrinciple = 0
    let periodInterest = 0
    let remainingPrinciple = loan.value
    let principlePaid = 0
    let interestPaid = 0
    let year = dateList[2]
    
    for(let i = 1; i <= loanTerm; i++){
        console.log('----------------')
        periodsRemain--
        
        // handles displaying the month for each month number (12 would display dec)
        dateName = allMonths[dateNumber-1]

        if(dateDayNumber > 28 && dateName === 'Feb') {
            dateDayNumber = 28
        } else if(dateDayNumber > 30){
            for(let j = 0; j < months30days.length; j++){
                if(dateName === months30days[j]){
                    dateDayNumber = 30
                }
            }
        } else {
            dateDayNumber = dateList[1]
        }
        
        periodInterest = remainingPrinciple * (loan.interest / (12 * 100))
        interestPaid += periodInterest
        periodPrinciple = loan.payment - periodInterest
        principlePaid += periodPrinciple
        remainingPrinciple -= periodPrinciple
  
        // creates a new object based on the defined obj above, and pushes it to an array
        let block = new AmortizationObj(dateName, dateNumber, year,
            loan.payment, remainingPrinciple, periodPrinciple, periodInterest, 
            dateDayNumber, principlePaid, interestPaid, i)
        console.log(block)
        amortizationList.push(block)

        //handles going from december to january
        if(dateNumber === 12){
            dateNumber = 1
            year++
        } else {
            dateNumber++
        }

    }
    return amortizationList
    //console.log(monthInNumber)
    //return monthInNumber
}

module.exports = {
    useScheduleCreation
}