import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import HeaderComponent from '../components/HeaderComponent'
import { useSelector } from 'react-redux'
import { viewCompareLoans } from '../Redux/reducers/compareSlice'
import { useEffect } from 'react'
import Currency from '../components/Currency'

const CompareScreen = () => {
    const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

    useEffect(() => {
        console.log(`LOAN LIST REDUX: ${JSON.stringify(compareLoansList)}`)
        console.log('-----------------')
        console.log(`LOAN LIST REDUX: ${compareLoansList[0].payload.value}`)

    }, [compareLoansList])

    const compareLoansList = useSelector(viewCompareLoans)
    
    let id = 0
    return (
            <SafeAreaView>
                <HeaderComponent title={"Compare Loans"}/>
                <ScrollView className="mb-8">
                    <View className="flex items-center">
                        {compareLoansList.map((loan) => {
                            id++
                            return (
                                <View className="w-[90%] my-4 h-64 bg-blue-900 p-2 rounded-xl" style={styles.dropShadow} key={id}>
                                    <Text className="text-white text-xl">
                                        Loan Value: <Currency value={loan.payload.value} />
                                    </Text>
                                    <Text className="text-white text-xl">
                                        Interest: {loan.payload.interest}%
                                    </Text>
                                    <Text className="text-white text-xl">
                                        Term: {loan.payload.length} Months
                                    </Text>
                                    <Text className="text-white text-xl">
                                        Monthly Payment: <Currency value={loan.payload.payment} />
                                    </Text>
                                    <Text className="text-white text-xl">
                                        Total Payments: <Currency value={loan.payload.totalPayment} />
                                    </Text>
                                    <Text className="text-white text-xl">
                                        Total Interest: <Currency value={loan.payload.totalInterest} />
                                    </Text>
                                </View>

                            )
                            
                        })}
                    </View>

                    {/* <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>    
                    <Text className="text-5xl">aggshsh</Text>     */}
                    <View className="h-64 bg-blue-400"></View>
                </ScrollView>
            </SafeAreaView>
    )
}

export default CompareScreen

const styles = StyleSheet.create({
	dropShadow: {
		shadowColor:"black", 
		shadowOpacity: 0.7, 
		shadowRadius: 5, 
		shadowOffset: {height: 6}
	}
})