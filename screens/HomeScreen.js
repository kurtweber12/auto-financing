import { Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

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

	
	return (
		<SafeAreaView>
			<Text>HomeScreen</Text>
		</SafeAreaView>
	)
}

export default HomeScreen