import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const handleRounding = (afterDecimalNumber) => {
    let decimals = '00'
    if(afterDecimalNumber){
        let splitAfterNumber = afterDecimalNumber.slice(2,3)
        let splitBeforeNumber = afterDecimalNumber.slice(0,2)
        let roundOnNumber = parseInt(splitAfterNumber)
        let roundedNumber = parseInt(splitBeforeNumber)

        let firstDecimalZero = false
        if(splitBeforeNumber.slice(0,1) === '0'){
            firstDecimalZero = true
        }

        // console.log('-------------')
        // console.log(`SPLITAFTERNUMBER: ${splitAfterNumber}`)
        // console.log(`SPLITBEFORENUMBER: ${splitBeforeNumber}`)
        // console.log(`ROUND_ON_NUMBER: ${roundOnNumber}`)
        // console.log(`ROUNDED_NUMBER: ${roundedNumber}`)
        // console.log(firstDecimalZero)
        // console.log('--------------------')

        if(splitBeforeNumber.length === 0) {
            decimals = '00'
            return decimals
        } else if(splitBeforeNumber.length === 1 && !firstDecimalZero) {
            decimals = afterDecimalNumber.toString() + '0'
            return decimals
        } else if(afterDecimalNumber.length === 1 && firstDecimalZero){
            decimals = '0' + afterDecimalNumber.toString()
            return decimals
        } else if(roundOnNumber >= 5) {
            roundedNumber+=1
            decimals = roundedNumber.toString()
            return decimals
        } else if(roundOnNumber < 5){
            decimals = splitBeforeNumber.toString()
        }
        return decimals

    }

    return decimals

}


const handleCommas = (numbersList) => {
    let beforeDecimalNumber = numbersList[0]
    let afterDecimalNumber = numbersList[1]
    let decimalsString = handleRounding(afterDecimalNumber)
    // let firstDecimalZero = false
    // if(decimalsString[0] === '0') {
    //     firstDecimalZero = true
    // }

    let decimalsInt = parseInt(decimalsString)
    // console.log(`DECIMALS: ${afterDecimalNumber}`)
    // console.log(`DECIMALS: ${decimalsString}`)

    let addForRounding = 0

    if(decimalsInt >= 100) {
        addForRounding = 1
        decimalsString = '00'
    }

    let commaCount = Math.floor(beforeDecimalNumber.length / 3)
    let beforeDecimalNumberInt = parseInt(beforeDecimalNumber) + addForRounding
    beforeDecimalNumber = beforeDecimalNumber.toString()
    let splitNumber = beforeDecimalNumber.split('')
    let numberReversed = splitNumber.reverse()

    let newNumber = []
    let newNumberString = ''
    for(let i = 0; i < beforeDecimalNumber.length; i++){
        newNumber.push(numberReversed[i])
        newNumberString = newNumberString + numberReversed[i]
        // checks to make sure there isnt a comma after all numbers and before any numbers
        if((i+1) % 3 === 0 && i!== 0 && ((i+1) !== beforeDecimalNumber.length)) {
            newNumber.push(',')
            newNumberString = newNumberString + ','
        }
    }


    let newNumberWithCommas = newNumber.reverse().join("")
    newNumberWithCommas = newNumberWithCommas + '.' + decimalsString

    return newNumberWithCommas
}

const Currency = ({value}) => {

    let value_string = value.toString()
    let value_string_list = value_string.split('.')

    let commas = handleCommas(value_string_list)

    // useEffect(() => {
    //     console.log(value_string)
    //     console.log(value_string_list)
    //     console.log(value_string_list[0].length)
    //     console.log(commas)
    // }, [value])



    return (
        <Text>${commas}</Text>
    )
}

export default Currency