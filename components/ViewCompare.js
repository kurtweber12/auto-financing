import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { pullLoan } from '../Redux/reducers/loanSlice'
import { viewCompareLoans } from '../Redux/reducers/compareSlice'
import { useSelector } from 'react-redux'


const ViewCompare = ({status}) => {
    const navigation = useNavigation()

    const currentLoanCount = useSelector(viewCompareLoans)

    return (
        <TouchableOpacity 
            className="flex justify-center items-center w-40 mx-2 bg-blue-900 h-10 rounded-3xl" 
            onPress={() => {
                navigation.navigate('Compare')
            }}
        >
            <Text className="text-white">Compare Loans ({currentLoanCount.length})</Text>
        </TouchableOpacity>
    )
}

export default ViewCompare