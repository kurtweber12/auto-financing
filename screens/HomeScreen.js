import { Text, TextInput, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import { 
	assignValue, 
	assignInterest, 
	assignLength, 
	assignPayment, 
	assignTotalPayment, 
	assignTotalInterest,
	calculateTotalPayment,
	calculateTotalInterest,
	pullPayment
} from '../Redux/reducers/loanSlice'

import { 
	pullValue
} from '../Redux/reducers/loanSlice'

//import Currency from "react-currency-formatter-v2"
import Inputs from '../components/home/Inputs'
import AddToCompare from '../components/AddToCompare'
import ViewCompare from '../components/ViewCompare'
import Currency from '../components/Currency'
import ViewSchedule from '../components/ViewSchedule'
import DisplayPayments from '../components/home/DisplayPayments'
import CompareAndSchedule from '../components/home/CompareAndSchedule'





// A = P * (r(1+r)^n)/ ((1+r)^n - 1)
// A = monthly payment
// P = principle
// r = the interest rate per month, which equals the annual interest rate divided by 12
// n = the total number of months

const HomeScreen = () => {
	const navigation = useNavigation()
	//const dispatch = useDispatch()

	//const payment_selector = useSelector(pullPayment)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	// const [loanValue, setLoanValue] = useState('')
	// const [interestRate, setInterestRate] = useState('')
	// const [length, setLength] = useState('')
	// const [payment, setPayment] = useState(0)
	// const [totalPayments, setTotalPayments] = useState(0)
	// const [totalInterest, setTotalInterest] = useState(0)
	// const [buttonStatus, setButtonStatus] = useState(false)

	// const handleCalculate = (P, i, n, A) => {

	// 	if(P === ''){
	// 		P = 0
	// 	}
	// 	if(i === ''){
	// 		i = 0
	// 	}
	// 	if(n === ''){
	// 		n = 0
	// 	}
	// 	if(A === ''){
	// 		A = 0
	// 	}
		
	// 	let P_num = parseFloat(P)
	// 	let i_num = (parseFloat(i) / 100) / 12
	// 	let n_num = parseFloat(n)
	// 	let A_num = parseFloat(A)

	// 	A_num = P_num * (i_num * (( 1 + i_num ) ** n_num)) / (((1 + i_num) ** n_num) - 1 )

	// 	let A_string = A_num.toString()
	// 	console.log(`A NUMBER PAYMENT: ${A_num}`)
	// 	console.log(`INTEREST / 12: ${i_num}`)
	// 	console.log(`LENGHT: ${n_num}`)
	// 	console.log(`WHOLE LOAN: ${P_num}`)
	// 	console.log()
	// 	setPayment(A_num)
	// 	let totalPayment = ( A_num * n_num )
	// 	setTotalPayments(totalPayment)
	// 	let totalInterestCalculated = ( A_num * n_num) - P_num
	// 	setTotalInterest(totalInterestCalculated)
	// 	setButtonStatus(true)

	// 	dispatch(assignValue(loanValue))
	// 	dispatch(assignInterest(interestRate))
	// 	dispatch(assignLength(length))
	// 	dispatch(assignPayment(A_num))
	// 	dispatch(calculateTotalPayment())
	// 	dispatch(calculateTotalInterest())
		

	// 	Keyboard.dismiss()
	// }

	// const handleClear = () => {
	// 	setLoanValue('')
	// 	setInterestRate('')
	// 	setLength('')
	// 	setPayment(0)
	// 	setTotalPayments(0)
	// 	setTotalInterest(0)
	// 	setButtonStatus(false)
	// 	dispatch(assignPayment(0))
	// 	Keyboard.dismiss()

	// }

	//const result = useSelector(pullValue)
	

	// useEffect(() => {
	// 	//console.log(loanValue)
	// 	//console.log(payment)



	// 	//if i use result.value, then the export on the loanSlice page must be return state.loan
	// 	// if i use result, then the export on the loanSlice page must be state.loan.value
	// 	console.log(`THIS IS REDUX INFO: ${result}`)
	// }, [result])

	// const compareLoan = (amount, interest, length, payment, totalPayments, totalInterest) => {
	// 	this.amount = amount
	// 	this.interest = interest
	// 	this.length = length
	// 	this.payment = payment
	// 	this.totalPayments = totalPayments
	// 	this.totalInterest = totalInterest
	// }

	// let compareLoansList = []

	// const handleAddToCompare = (amount, interest, length, payment, totalPayments, totalInterest) => {
	// 	const newCompareLoan = new compareLoan(amount, interest, length, payment, totalPayments, totalInterest)
	// 	compareLoansList.push(newCompareLoan)
	// }

	
	return (
		<SafeAreaView>
			<ScrollView className="flex h-full">
				<Inputs />
				<DisplayPayments />
				<CompareAndSchedule />
				{/* <View className="h-64"></View> */}
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen