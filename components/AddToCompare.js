import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { addToCompare } from '../Redux/reducers/compareSlice'
import { useDispatch, useSelector } from 'react-redux'
import { pullLoan, pullValue } from '../Redux/reducers/loanSlice'
import { useEffect } from 'react'


const AddToCompare = ({status}) => {
    const dispatch = useDispatch()

    const currentLoanState = useSelector(pullLoan)
    
    const handleAddToCompare = (loan) => {
        dispatch(
            addToCompare(loan)
        )
    }

    useEffect(() => {
        console.log(`CURRENT LOAN: ${JSON.stringify(currentLoanState.value)}`)
    }, [currentLoanState])

    return (
        <TouchableOpacity 
            className="flex justify-center items-center mx-2 w-40 bg-white h-10 rounded-3xl border-2 border-blue-900"
            onPress={() => {
                handleAddToCompare(currentLoanState)
            }}
        >
            <Text className="text-blue-900">Add To Comparison</Text>
        </TouchableOpacity>
    )
}

export default AddToCompare