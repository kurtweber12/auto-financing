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
import { useScheduleCreation } from '../hooks/useScheduleCreation'
import LoanInformation from '../components/schedule/LoanInformation'
import { useSelector } from 'react-redux'
import { pullLength, pullLoan } from '../Redux/reducers/loanSlice'
import Currency from '../components/Currency'

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
    const [amortizationList, setAmortizationList] = useState([])

    const loanTerm = useSelector(pullLength)
    const loan = useSelector(pullLoan)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
  
    //function that is for running when you press confirm inside the date picker modal
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
        let amortizationListReturned = useScheduleCreation(dateList, loanTerm, loan)
        console.log(amortizationListReturned)
        hideDatePicker();
        setAmortizationList(amortizationListReturned)
        
    };

    let displayDate = ''
    if(selectedDate.length > 0){
        displayDate = <Text>{selectedDate[0]} {selectedDate[1]}, {selectedDate[2]}</Text>
    } else {
        displayDate = <Text>None</Text>
    }

    let i = 0
    return (
        <SafeAreaView>
            <HeaderComponent title={"Amortization Schedule"} />
            <View className="flex flex-row justify-center mt-4">
                <TouchableOpacity
                    className="flex justify-center items-center w-40 bg-blue-900 h-10 rounded-3xl "
                    onPress={showDatePicker}
                >
                    <Text className="text-white text-l">Select Due Date</Text>
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
            <LoanInformation />
            <ScrollView className="flex h-auto">
                {amortizationList.map((block) => {
                    i++
                    //console.log(block.AmortizationBlock)
                    return(
                        <View 
                            className="flex flex-row justify-center my-2" 
                            key={i}
                        >
                            <View className="w-[90%] bg-white p-4 rounded-md">
                                <View className="border-b border-blue-900 mb-2"></View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Date: </Text>
                                    <Text>{block.monthName} {block.day}, {block.year}</Text>
                                </View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Month: </Text>
                                    <Text>{block.id}</Text>
                                </View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Payment Paid: </Text>
                                    <Text><Currency value={block.monthPayment}/></Text>
                                </View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Remaining Balance: </Text>
                                    <Text><Currency value={block.remainingPrinciple}/></Text>
                                </View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Principle Paid: </Text>
                                    <Text><Currency value={block.monthPrinciple}/></Text>
                                </View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Interest Paid: </Text>
                                    <Text><Currency value={block.monthInterest}/></Text>
                                </View>
                                <View>
                                    <Text></Text>    
                                </View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Total Principle Paid: </Text>
                                    <Text><Currency value={block.principlePaid}/></Text>
                                </View>
                                <View className="flex flex-row justify-between ">
                                    <Text>Total Interest Paid: </Text>
                                    <Text><Currency value={block.interestPaid}/></Text>
                                </View>        
                                <View className="border-b border-blue-900 "></View>
                            </View>
                        </View>
                    )
                }
                )}
                <View className="flex flex-row pt-10 justify-center">
                    <Text className="text-gray-500 font-light">Note: These values are estimates and actual values may vary between banks</Text>
                </View>
                <View className="h-96"></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ScheduleScreen

