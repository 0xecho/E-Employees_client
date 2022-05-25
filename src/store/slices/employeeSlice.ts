import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee, EmployeeState } from "../types";


let initialState: EmployeeState = {
    employees: []
}

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        create_employee: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload)
        },
        delete_employee: (state, action: PayloadAction<Employee>) => {
            state.employees = state.employees.filter(employee => employee.id !== action.payload.id)
        },
        update_employee: (state, action: PayloadAction<Employee>) => {
            state.employees.map(employee => {
                return employee.id === action.payload.id ? action.payload : employee
            })
        },
    }
})

export const {create_employee, delete_employee, update_employee} = employeeSlice.actions
export default employeeSlice.reducer