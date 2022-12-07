import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loans: []
}

const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addToCompare: (state, action) => {
            state.loans.push(action)
            //return state
        }   
    }
})

export const { addToCompare } = compareSlice.actions

export const viewCompareLoans = (state) => {
    return state.compare.loans
}

export default compareSlice.reducer