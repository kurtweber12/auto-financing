import { configureStore } from "@reduxjs/toolkit";
import calculationReducer from "./features/calculationSlice";

export default configureStore({
    reducer: {
        calculation: calculationReducer
    }
})