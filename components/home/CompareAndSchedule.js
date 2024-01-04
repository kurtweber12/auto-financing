import { View, Text } from 'react-native'
import React from 'react'
import AddToCompare from '../AddToCompare'
import ViewCompare from '../ViewCompare'
import { useSelector } from 'react-redux'
import { getButtonStatus, pullInterest, pullLength, pullPayment } from '../../Redux/reducers/loanSlice'
import { useState } from 'react'
import ViewSchedule from '../ViewSchedule'

const CompareAndSchedule = () => {

    //button status tells is if the first loan calculated exists
    const buttonStatus = useSelector(getButtonStatus)
    const [buttonStatusCompare, setButtonStatusCompare] = useState(false)

    return (
        <View className="pb-10">
            <View className="flex flex-row justify-center mt-4">
				<AddToCompare status={buttonStatus}/>	
				<ViewCompare status={buttonStatusCompare}/>
			</View>
			<View className="flex flex-row justify-center mt-4">
				<ViewSchedule status={buttonStatus}/>
			</View>
        </View>
    )
}

export default CompareAndSchedule