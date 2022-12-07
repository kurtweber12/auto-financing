import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
//import Currency from "react-currency-formatter-v2"
import HeaderComponent from '../components/HeaderComponent'
//import SelectDate from '../components/SelectDate'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react'
import { useEffect } from 'react'
import { ScheduleCreation } from '../hooks/ScheduleCreation'

const ScheduleScreen = ({}) => {
    const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

    const [selectedDate, setSelectedDate] = useState([])
    const [schedule, setSchedule] = useState([])
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
        //console.warn("A date has been picked: ", date);
        let dateString = date.toString()
        let dateListFull = dateString.split(" ")
        let dateList =  []
        for(let i=1; i<4; i++){
            dateList.push(dateListFull[i])
        }
        //let dateStringShort = dateList.toString()
        //console.log(dateStringShort)
        // console.log(dateListFull)
        // console.log(dateList)
        // console.log(dateString)

        setSelectedDate(dateList)
        let num = ScheduleCreation(dateList)
        console.log(num)
        hideDatePicker();
    };

    let displayDate = ''
    if(selectedDate.length > 0){
        displayDate = <Text>{selectedDate[0]} {selectedDate[1]}, {selectedDate[2]}</Text>
    } else {
        displayDate = <Text>None</Text>
    }

    return (
        <SafeAreaView>
            <HeaderComponent title={"Amortization Schedule"} />
            <View className="flex flex-row justify-center mt-4">
                <TouchableOpacity
                    className="flex justify-center items-center w-40 bg-blue-900 h-10 rounded-3xl "
                    onPress={showDatePicker}
                >
                    <Text className="text-white text-l">Select Start Date</Text>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View className="flex flex-row justify-center pt-2">
                <Text className="text-xl font-thin text-blue-900">Date Selected: {displayDate}</Text>
            </View>
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ScheduleScreen

