import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputField = ({label}) => {

    const [inputValue, setInputValue] = useState(null)


    return (
        <View className="h-16 flex flex-row items-center justify-between mx-4 my-2">
            <Text className="text-xl">{label}</Text>
            <View className="bg-white w-2/5 mx-4 my-2 p-1">
                <TextInput 
                    placeholder=""
                    keyboardType='numeric'
                    value={inputValue}
                    onChangeText={setInputValue}
                    style={{
                        height: 35,
                    }}
                />
            </View>
        </View>
    )
}

export default InputField