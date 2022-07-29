import { Text, TextInput, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from '../components/InputField'
import Currency from "react-currency-formatter-v2"



// A = P * (r(1+r)^n)/ ((1+r)^n - 1)
// A = monthly payment
// P = principle
// r = the interest rate per month, which equals the annual interest rate divided by 12
// n = the total number of months

const HomeScreen = () => {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	const [loanValue, setLoanValue] = useState('')
	const [interestRate, setInterestRate] = useState('')
	const [length, setLength] = useState('')
	const [payment, setPayment] = useState(0)

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
			AbortSignal = 0
		}
		
		let P_num = parseFloat(P)
		let i_num = (parseFloat(i) / 100) /12
		let n_num = parseFloat(n)
		let A_num = parseFloat(A)

		A_num = P_num * ((i_num * (( 1 + i_num) ** n_num)) / (((1 + i_num) ** n_num) - 1 ))

		let A_string = A_num.toString()
		setPayment(A_num)
		Keyboard.dismiss()
	}

	const handleClear = () => {

		setLoanValue('')
		setInterestRate('')
		setLength('')
		setPayment('')
		Keyboard.dismiss()
		
	}

	useEffect(() => {
		console.log(loanValue)
		console.log(payment)
	}, [loanValue, payment])

	
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
			<View className="flex flex-row justify-center pt-5">
				<Text className="text-xl">Payment: </Text>
				<Text className="text-xl">
					<Currency 
						quantity={payment}
						currency="USD"
					/>

				</Text>
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