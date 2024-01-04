import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    assignInterest, 
    assignLength, 
    assignPayment, 
    assignValue, 
    calculateTotalInterest, 
    calculateTotalPayment,  
    setButtonStatusState 
} from '../../Redux/reducers/loanSlice'
import { useEffect } from 'react'

const Inputs = () => {
    const dispatch = useDispatch()

    //const buttonStatus = useSelector(getButtonStatus)

    const [loanValue, setLoanValue] = useState('')
	const [interestRate, setInterestRate] = useState('')
	const [length, setLength] = useState('')
	const [payment, setPayment] = useState(0)
	const [totalPayments, setTotalPayments] = useState(0)
	const [totalInterest, setTotalInterest] = useState(0)
	const [buttonStatus, setButtonStatus] = useState(false)

    useEffect(() => {
        if(loanValue !== '' && interestRate !== '' && length !== ''){
            setButtonStatus(true)
        } else {
            setButtonStatus(false)
        }
    }, [loanValue, interestRate, length])

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

        // A_num = Math.round(( A_num + Number.EPSILON) * 100) / 100

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
        dispatch(setButtonStatusState(true))
		

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
        dispatch(assignValue(0))
        dispatch(assignInterest(0))
		dispatch(assignPayment(0))
        dispatch(calculateTotalPayment())
        dispatch(calculateTotalInterest())
        dispatch(setButtonStatusState(false))
        
        console.log(`BUTTON STATUS: ${buttonStatus}`)
		Keyboard.dismiss()

	}




    return (
        <View className="flex flex-row justify-center pt-10">
            <View className="bg-white w-[90%] py-6" style={styles.dropShadow}>
                <View className="pb-5">
                    <View className="h-16 flex flex-row items-center justify-between mx-4 ">
                        <Text className="text-xl font-light">Loan Amount ($)</Text>
                        <View 
                            className="bg-white border border-blue-900  w-2/5 mx-4 my-2 p-1" 
                            //style={styles.dropShadow}
                        >
                            <TextInput 
                                placeholder=""
                                keyboardType='numeric'
                                value={loanValue}
                                onChangeText={text => setLoanValue(text)}
                                style={{
                                    height: 35,
                                    fontFamily: 'AppleSDGothicNeo-Light',
                                }}
                                className="text-xl"
                            />
                        </View>
                    </View>
                    <View className="h-16 flex flex-row items-center justify-between mx-4 my-2">
                        <Text className="text-xl font-light">Interest Rate (%)</Text>
                        <View 
                            className="bg-white border border-blue-900 w-2/5 mx-4 my-2 p-1"
                            //style={styles.dropShadow}
                        >
                            <TextInput 
                                placeholder=""
                                keyboardType='numeric'
                                value={interestRate}
                                onChangeText={text => setInterestRate(text)}
                                style={{
                                    height: 35,
                                    fontFamily: 'AppleSDGothicNeo-Light',
                                }}
                                className="text-xl"
                            />
                        </View>
                    </View>
                    <View className="h-16 flex flex-row items-center justify-between mx-4 my-2">
                        <Text className="text-xl font-light">Length (Months)</Text>
                        <View className="bg-white border border-blue-900 w-2/5 mx-4 my-2 p-1">
                            <TextInput 
                                placeholder=""
                                keyboardType='numeric'
                                value={length}
                                onChangeText={text => setLength(text)}
                                style={{
                                    height: 35,
                                    fontFamily: 'AppleSDGothicNeo-Light',
                                }}
                                className="text-xl"
                            />
                        </View>
                    </View>

                    
                </View>

                <View className="flex flex-row justify-center space-x-10 mx-8">
                    <TouchableOpacity 
                        className="flex flex-row w-32 border-2 border-blue-900 justify-center items-center rounded-full" 
                        //style={styles.dropShadow}
                        onPress={handleClear}
                    >
                        <Text className="text-xl text-blue-900 text-w  p-3">Clear</Text>	
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="flex flex-row w-32 justify-center items-center rounded-full" 
                        style={(!buttonStatus ? styles.disabledButton : styles.enabledButton)}
                        disabled={!buttonStatus}
                        onPress={() => handleCalculate(loanValue, interestRate, length, payment)}
                        
                    >
                        <Text className="text-xl text-white font-bold p-3">Calculate</Text>	
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

export default Inputs

const styles = StyleSheet.create({
	dropShadow: {
		shadowColor:"black", 
		shadowOpacity: 0.2, 
		shadowRadius: 3, 
		shadowOffset: {height: 2}
	},
    disabledButton: {
        backgroundColor: '#9ca3af', 
        opacity: 0.5,   
    },
    enabledButtonGreen: {
        backgroundColor: '#4ade80',
    },
    enabledButton: {
        backgroundColor: '#1e3a8a',
    }
})