import { createSlice } from "@reduxjs/toolkit"

export const calculationSlice = createSlice({
    name: 'calculation',
    initialState: {
        value: 0
    },
    reducers: {
        calculate: state => {
            
        },
        clear: state => {
            state.value = 0
        },
    }
})

export const { calculate, clear} = calculationSlice.actions

export default calculationSlice.reducer