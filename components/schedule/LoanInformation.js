import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { pullLoan } from '../../Redux/reducers/loanSlice'
import Currency from '../Currency'

const LoanInformation = () => {

    const loan = useSelector(pullLoan)
    return (
        <View className="flex flex-row justify-center">
            <View className="w-[90%] mt-4">
                <Text className="text-md font-light text-blue-900 mb-1">Loan Information:</Text>
                <View className="border-b border-blue-900"></View>
                <View className="flex flex-row justify-between">
                    <Text>Amount Borrowed:</Text>
                    <Text><Currency value={loan.value}/></Text>
                </View>
                <View className="flex flex-row justify-between">
                    <Text>Interest:</Text>
                    <Text>{loan.interest} %</Text>
                </View>
                <View className="flex flex-row justify-between">
                    <Text>Length:</Text>
                    <Text>{loan.length} Months</Text>
                </View>
                <View className="flex flex-row justify-between">
                    <Text>Payment:</Text>
                    <Text><Currency value={loan.payment}/></Text>
                </View>
                <View className="flex flex-row justify-between">
                    <Text>Total Payments:</Text>
                    <Text><Currency value={loan.totalPayment}/></Text>
                </View>
                <View className="flex flex-row justify-between">
                    <Text>Total Interest Paid:</Text>
                    <Text><Currency value={loan.totalInterest}/></Text>
                </View>
                <View className="border-b border-blue-900"></View>
            </View>
        </View>
    )
}

export default LoanInformation