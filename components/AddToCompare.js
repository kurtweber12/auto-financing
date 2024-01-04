import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
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
        console.log(`CURRENT LOAN: ${JSON.stringify(currentLoanState.buttonStatus)}`)
    }, [currentLoanState])

    return (
        <TouchableOpacity 
            className="flex justify-center items-center mx-2 w-40 bg-white h-10 rounded-3xl border-2"
            onPress={() => {
                handleAddToCompare(currentLoanState)
            }}
            disabled={!status}
            style={!status ? styles.disabled : styles.enabled}
        >
            <Text 
                style={
                    status ? {color: '#1e3a8a'} : {color: '#9ca3af'}
                }
            >Add To Comparison</Text>
        </TouchableOpacity>
    )
}

export default AddToCompare

const styles = StyleSheet.create({
    disabled: { 
        opacity: 0.5,
        borderColor: '#9ca3af'  
    },
    enabled: {
        borderColor: '#1e3a8a',    
    },
})