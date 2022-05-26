import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee, EmployeeState } from "../types";

let initialState: EmployeeState = {
    employees: []
}

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        create_employee_requested: (state, action: PayloadAction<Employee>) => state,
        delete_employee_requested: (state, action: PayloadAction<Employee>) => state,
        update_employee_requested: (state, action: PayloadAction<Employee>) => state,

        create_employee: (state, action: PayloadAction<Employee>) => {
            state.employees.push({
                ...action.payload,
            })
        },
        delete_employee: (state, action: PayloadAction<Employee>) => {
            state.employees = state.employees.filter(employee => employee.id !== action.payload.id)
        },
        update_employee: (state, action: PayloadAction<Employee>) => {
            state.employees = state.employees.map(employee => {
                return employee.id === action.payload.id ? action.payload : employee
            })
        },
        set_employees: (state, action: PayloadAction<Employee[]>) => {
            state.employees = action.payload
        },
    }
})

export const { 
    create_employee, 
    delete_employee, 
    update_employee, 
    set_employees,
    create_employee_requested,
    delete_employee_requested,
    update_employee_requested } = employeeSlice.actions
export type EmployeeAction = ReturnType<typeof create_employee>
export default employeeSlice.reducer