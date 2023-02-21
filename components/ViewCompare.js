import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { pullLoan } from '../Redux/reducers/loanSlice'
import { viewCompareLoans } from '../Redux/reducers/compareSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'


const ViewCompare = () => {
    const navigation = useNavigation()

    const currentLoanCount = useSelector(viewCompareLoans)

    const [buttonStatus, setButtonStatus] = useState(false)

    useEffect(() => {
        if(currentLoanCount.length > 0){
            setButtonStatus(true)
        } else {
            setButtonStatus(false)
        }
    }, [currentLoanCount])

    return (
        <TouchableOpacity 
            className="flex justify-center items-center w-40 mx-2 bg-blue-900 h-10 rounded-3xl" 
            onPress={() => {
                navigation.navigate('Compare')
            }}
            disabled={!buttonStatus}
            style={!buttonStatus ? styles.disabled : styles.enabled }
        >
            <Text className="text-white">Compare Loans ({currentLoanCount.length})</Text>
        </TouchableOpacity>
    )
}

export default ViewCompare

const styles = StyleSheet.create({
    disabled: {
        backgroundColor: '#9ca3af', 
        opacity: 0.5,   
    },
    enabled: {
        backgroundColor: '#1e3a8a',    
    },
})