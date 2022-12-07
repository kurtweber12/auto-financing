import { View, Text } from 'react-native'
import React from 'react'

const ScheduleCreation = (dateList) => {
    //dateList is array
    //datelist[0] = month
    //datelist[1] = day
    //datelist[0] = year
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
    //console.log(monthInNumber)
    return monthInNumber
}

module.exports = {
    ScheduleCreation
}