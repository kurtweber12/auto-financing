import { configureStore } from "@reduxjs/toolkit";

import loanReducer from '../Redux/reducers/loanSlice'
import compareReducer from '../Redux/reducers/compareSlice'

export default configureStore({
    reducer: {
        loan: loanReducer,
        compare: compareReducer
    },
})