import { configureStore } from "@reduxjs/toolkit";
import { employee as employeeReducer } from './reducers'

export default configureStore({
    reducer: {
        employeeReducer
    }
})