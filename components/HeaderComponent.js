import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'

const HeaderComponent = ({title}) => {

    const navigation = useNavigation()

    return (
        // <SafeAreaView className="flex flex-row bg-white w-full" style={styles.dropShadow}>
            <View className="flex flex-row w-full justify-center items-center">
                <View className="absolute left-4">
                    <TouchableOpacity 
                        // className="border-blue-900 border bg-white p-2 rounded-full"
                        style={styles.dropShadow}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <ChevronLeftIcon size={24} color={'#1e3a8a'} style={{left: -1}}/>
                        {/*<Text className="text-blue-900 ">Back</Text>*/}
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="text-3xl font-thin text-blue-900">{title}</Text>
                </View>
            </View>
        // </SafeAreaView>
        
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
	dropShadow: {
		shadowColor:"black", 
		shadowOpacity: 0.2, 
		shadowRadius: 3, 
		shadowOffset: {height: 1}
	}
})