import { Text, TextInput, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
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
import AddToCompare from '../components/AddToCompare'
import ViewCompare from '../components/ViewCompare'
import Currency from '../components/Currency'
import ViewSchedule from '../components/ViewSchedule'





// A = P * (r(1+r)^n)/ ((1+r)^n - 1)
// A = monthly payment
// P = principle
// r = the interest rate per month, which equals the annual interest rate divided by 12
// n = the total number of months

const HomeScreen = () => {
	const navigation = useNavigation()
	const dispatch = useDispatch()

	const payment_selector = useSelector(pullPayment)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	const [loanValue, setLoanValue] = useState('')
	const [interestRate, setInterestRate] = useState('')
	const [length, setLength] = useState('')
	const [payment, setPayment] = useState(0)
	const [totalPayments, setTotalPayments] = useState(0)
	const [totalInterest, setTotalInterest] = useState(0)
	const [buttonStatus, setButtonStatus] = useState(false)

	const handleCalculate = (P, i, n, A) => {

		if(P === ''){
			P = 0
		}
		if(i === ''){
			i = 0
		}
		if(n === ''){
			n = 0
		}
		if(A === ''){
			A = 0
		}
		
		let P_num = parseFloat(P)
		let i_num = (parseFloat(i) / 100) / 12
		let n_num = parseFloat(n)
		let A_num = parseFloat(A)

		A_num = P_num * (i_num * (( 1 + i_num ) ** n_num)) / (((1 + i_num) ** n_num) - 1 )

		let A_string = A_num.toString()
		console.log(`A NUMBER PAYMENT: ${A_num}`)
		console.log(`INTEREST / 12: ${i_num}`)
		console.log(`LENGHT: ${n_num}`)
		console.log(`WHOLE LOAN: ${P_num}`)
		console.log()
		setPayment(A_num)
		let totalPayment = ( A_num * n_num )
		setTotalPayments(totalPayment)
		let totalInterestCalculated = ( A_num * n_num) - P_num
		setTotalInterest(totalInterestCalculated)
		setButtonStatus(true)

		dispatch(assignValue(loanValue))
		dispatch(assignInterest(interestRate))
		dispatch(assignLength(length))
		dispatch(assignPayment(A_num))
		dispatch(calculateTotalPayment())
		dispatch(calculateTotalInterest())
		

		Keyboard.dismiss()
	}

	const handleClear = () => {
		setLoanValue('')
		setInterestRate('')
		setLength('')
		setPayment(0)
		setTotalPayments(0)
		setTotalInterest(0)
		setButtonStatus(false)
		dispatch(assignPayment(0))
		Keyboard.dismiss()

	}

	const result = useSelector(pullValue)
	

	useEffect(() => {
		//console.log(loanValue)
		//console.log(payment)



		//if i use result.value, then the export on the loanSlice page must be return state.loan
		// if i use result, then the export on the loanSlice page must be state.loan.value
		console.log(`THIS IS REDUX INFO: ${result}`)
	}, [loanValue, payment, result])

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
			{/* <View className="pt-10 pb-5">
				<InputField label="Loan Amount ($)" />
				<InputField label="Interest Rate (%)" />
				<InputField label="Length (months)" />
			</View> */}
			<View className="pt-10 pb-5">
				<View className="h-16 flex flex-row items-center justify-between mx-4 my-2">
					<Text className="text-xl">Loan Amount ($)</Text>
					<View className="bg-white w-2/5 mx-4 my-2 p-1">
						<TextInput 
							placeholder=""
							keyboardType='numeric'
							value={loanValue}
							onChangeText={text => setLoanValue(text)}
							style={{
								height: 35,
							}}
						/>
					</View>
				</View>
				<View className="h-16 flex flex-row items-center justify-between mx-4 my-2">
					<Text className="text-xl">Interest Rate (%)</Text>
					<View className="bg-white w-2/5 mx-4 my-2 p-1">
						<TextInput 
							placeholder=""
							keyboardType='numeric'
							value={interestRate}
							onChangeText={text => setInterestRate(text)}
							style={{
								height: 35,
							}}
						/>
					</View>
				</View>
				<View className="h-16 flex flex-row items-center justify-between mx-4 my-2">
					<Text className="text-xl">Length (Months)</Text>
					<View className="bg-white w-2/5 mx-4 my-2 p-1">
						<TextInput 
							placeholder=""
							keyboardType='numeric'
							value={length}
							onChangeText={text => setLength(text)}
							style={{
								height: 35,
							}}
						/>
					</View>
				</View>

				
			</View>

			<View className="flex flex-row justify-center space-x-10 mx-8">
				<TouchableOpacity 
					className="flex flex-row w-32 bg-red-400 justify-center rounded-md" 
					style={styles.dropShadow}
					onPress={handleClear}
				>
					<Text className="text-xl font-bold p-3">Clear</Text>	
				</TouchableOpacity>
				<TouchableOpacity 
					className="flex flex-row w-32 bg-green-400 justify-center rounded-md" 
					style={styles.dropShadow}
					onPress={() => handleCalculate(loanValue, interestRate, length, payment)}
					
				>
					<Text className="text-xl font-bold p-3">Calculate</Text>	
				</TouchableOpacity>
				
			</View>
			<View className="flex flex-row pt-10 justify-center">
				<Text className="text-gray-500 font-light">Note: These values are estimates and actual values may vary between banks</Text>
			</View>
			<View className="flex flex-row justify-center gap-x-4 pt-5">
				<Text className="text-xl">Payment: </Text>
				<Text className="text-xl">
					{/* <Currency 
						quantity={payment}
						currency="USD"
					/> */}
					<Currency
						value={payment_selector}
					/>
					

				</Text>
			</View>
			<View className="flex flex-row justify-center pt-5">
				<Text className="text-xl">Total Paid: </Text>
				<Text className="text-xl">
					{/* <Currency 
						quantity={totalPayments}
						currency="USD"
					/> */}
					<Currency
						value={totalPayments}
					/>

				</Text>
			</View>
			<View className="flex flex-row justify-center pt-5">
				<Text className="text-xl">Total Interest Paid: </Text>
				<Text className="text-xl">
					{/* <Currency 
						quantity={totalInterest}
						currency="USD"
					/> */}
					<Currency
						value={totalInterest}
					/>
					

				</Text>
			</View>
			<View className="flex flex-row justify-center mt-4">
				<AddToCompare status={buttonStatus}/>	
				<ViewCompare status={buttonStatus}/>
			</View>
			<View className="flex flex-row justify-center mt-4">
				<ViewSchedule status={buttonStatus}/>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	dropShadow: {
		shadowColor:"black", 
		shadowOpacity: 0.2, 
		shadowRadius: 3, 
		shadowOffset: {height: 2}
	}
})