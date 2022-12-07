import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ViewSchedule = ({status}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            className="flex justify-center items-center w-64 h-10 rounded-3xl "
            disabled={!status}
            style={!status ? styles.disabled : styles.enabled}
            onPress={() => {
                navigation.navigate('Schedule')
            }}
        >
            <Text className="text-white">Amortization Schedule</Text>
        </TouchableOpacity>
    )
}

export default ViewSchedule

const styles = StyleSheet.create({
    disabled: {
        backgroundColor: '#9ca3af', 
        opacity: 0.5,   
    },
    enabled: {
        backgroundColor: '#1e3a8a',    
    },
	dropShadow: {
		shadowColor:"black", 
		shadowOpacity: 0.2, 
		shadowRadius: 3, 
		shadowOffset: {height: 2}
	},
})