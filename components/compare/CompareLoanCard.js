import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Currency from '../Currency'

const CompareLoanCard = ({loan}) => {
    return (
        <View className="flex w-[90%] my-4  bg-blue-900 p-2 rounded-xl " style={styles.dropShadow}>
            <View className="flex flex-row justify-between">
                <Text className="text-white text-lg font-light">
                    Loan Value: 
                </Text>
                <Text className="text-white text-lg font-light">
                    <Currency value={loan.payload.value} />
                </Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-white text-lg font-light">
                    Interest: 
                </Text>
                <Text className="text-white text-lg font-light">
                    {loan.payload.interest} %
                </Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-white text-lg font-light">
                    Term: 
                </Text>
                <Text className="text-white text-lg font-light">
                    {loan.payload.length} months
                </Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-white text-lg font-light">
                    Monthly Payment: 
                </Text>
                <Text className="text-white text-lg font-light">
                    <Currency value={loan.payload.payment} />
                </Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-white text-lg font-light">
                    Total Payments: 
                </Text>
                <Text className="text-white text-lg font-light">
                    <Currency value={loan.payload.totalPayment} />
                </Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-white text-lg font-light">
                    Total Interest Paid: 
                </Text>
                <Text className="text-white text-lg font-light">
                    <Currency value={loan.payload.totalInterest} />
                </Text>
            </View>
        </View>
    )
}

export default CompareLoanCard

const styles = StyleSheet.create({
    dropShadow: {
		shadowColor:"black", 
		shadowOpacity: 0.5, 
		shadowRadius: 4, 
		shadowOffset: {height: 4}
	}
})