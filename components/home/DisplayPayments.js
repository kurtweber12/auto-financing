import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { 
    pullPayment, 
    pullTotalInterest, 
    pullTotalPayment 
} from '../../Redux/reducers/loanSlice'
import Currency from '../Currency'

const DisplayPayments = () => {
    const payment_selector = useSelector(pullPayment)
    const totalpayment_selector = useSelector(pullTotalPayment)
    const totalinterest_selector = useSelector(pullTotalInterest)

    return (
        <View>
            <View className="flex flex-row pt-10 justify-center">
				<Text className="text-gray-500 font-light">Note: These values are estimates and actual values may vary between banks</Text>
			</View>
            <View className="flex flex-row justify-center">
                <View className="w-[90%]">
                    <View className="flex flex-row justify-between  pt-5">
                        <Text className="text-xl font-light">Payment: </Text>
                        <Text className="text-xl font-light">
                            {/* <Currency 
                                quantity={payment}
                                currency="USD"
                            /> */}
                            <Currency
                                value={payment_selector}
                            />
                            

                        </Text>
                    </View>
                    <View className="flex flex-row justify-between pt-5">
                        <Text className="text-xl font-light">Total Paid: </Text>
                        <Text className="text-xl font-light">
                            {/* <Currency 
                                quantity={totalPayments}
                                currency="USD"
                            /> */}
                            <Currency
                                value={totalpayment_selector}
                            />

                        </Text>
                    </View>
                    <View className="flex flex-row justify-between pt-5">
                        <Text className="text-xl font-light">Total Interest Paid: </Text>
                        <Text className="text-xl font-light">
                            {/* <Currency 
                                quantity={totalInterest}
                                currency="USD"
                            /> */}
                            <Currency
                                value={totalinterest_selector}
                            />
                            

                        </Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default DisplayPayments