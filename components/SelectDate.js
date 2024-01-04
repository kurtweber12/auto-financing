import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SelectDate = () => {
    return (
        <TouchableOpacity
            className="flex justify-center items-center w-40 bg-blue-900 h-10 rounded-3xl "
            onPress={() => {

            }}
        >
            <Text className="text-white text-l">Select Start Date</Text>
        </TouchableOpacity>
    )
}

export default SelectDate