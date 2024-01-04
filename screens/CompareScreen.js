import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import HeaderComponent from '../components/HeaderComponent'
import { useSelector } from 'react-redux'
import { viewCompareLoans } from '../Redux/reducers/compareSlice'
import { useEffect } from 'react'

import CompareLoanCard from '../components/compare/CompareLoanCard'

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
                <ScrollView className="mb-8 flex h-full">
                    <View className="flex items-center">
                        {compareLoansList.map((loan) => {
                            id++
                            return (
                                <CompareLoanCard key={id} loan={loan}/>
                            )
                            
                        })}
                    </View>
                    {/* <View className="h-64 bg-blue-400"></View> */}
                </ScrollView>
            </SafeAreaView>
    )
}

export default CompareScreen
