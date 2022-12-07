import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    interest: 0,
    length: 0,
    payment: 0,
    totalPayment: 0,
    totalInterest: 0
}

const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        assignValue: (state, action) => {
            state.value = action.payload
        },
        assignInterest: (state, action) => {
            state.interest = action.payload
        },
        assignLength: (state, action) => {
            state.length = action.payload
        },
        assignPayment: (state, action) => {
            state.payment = action.payload
        },
        assignTotalPayment: (state, action) => {
            state.totalPayment = action.payload
        },
        assignTotalInterest: (state, action) => {
            state.totalInterest = action.payload
        },
        calculateTotalPayment: (state) => {
            state.totalPayment = (state.length * state.payment)
        },
        calculateTotalInterest: (state) => {
            state.totalInterest = state.totalPayment - state.value
        }

    }
})

export const { 
    assignValue, 
    assignInterest, 
    assignLength, 
    assignPayment, 
    assignTotalPayment, 
    assignTotalInterest,
    calculateTotalPayment,
    calculateTotalInterest
} = loanSlice.actions

export const pullValue = (state) => {
    return state.loan.value
}
export const pullInterest = (state) => {
    return state.loan.interest
}
export const pullLength = (state) => {
    return state.loan.length
}
export const pullPayment = (state) => {
    return state.loan.payment
}
export const pullTotalPayment = (state) => {
    return state.loan.totalPayment
}
export const pullTotalInterest = (state) => {
    return state.loan.totalInterest
}



// returns the entire loan as an object
export const pullLoan = (state) => {
    return state.loan
}

export default loanSlice.reducer