import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetch_employees } from "../api";
import { IEmployee, IEmployeeUnsaved, EmployeeState, Pagination } from "../types";

let initialState: EmployeeState = {
    employees: [],
    isLoading: false,
    page: 1,
    totalPages: 0,
}

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        create_employee_requested: (state, action: PayloadAction<IEmployeeUnsaved>) => state,
        delete_employee_requested: (state, action: PayloadAction<IEmployee>) => state,
        update_employee_requested: (state, action: PayloadAction<IEmployee>) => state,

        fetch_employee: (state) => {
            state.isLoading = true
        },
        create_employee: (state, action: PayloadAction<IEmployee>) => {
            state.employees.push({
                ...action.payload,
            })
        },
        delete_employee: (state, action: PayloadAction<IEmployee>) => {
            state.employees = state.employees.filter(employee => employee._id !== action.payload._id)
        },
        update_employee: (state, action: PayloadAction<IEmployee>) => {
            state.employees = state.employees.map(employee => {
                return employee._id === action.payload._id 
                        ? {
                            ...employee,
                            ...action.payload
                        }
                        : employee
            })
        },
        set_employees: (state, action: PayloadAction<IEmployee[]>) => {
            state.employees = action.payload
            state.isLoading = false
        },
        set_total_pages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        },
        set_page: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        }
    }
})

export const { 
    create_employee, 
    delete_employee, 
    update_employee, 
    set_employees,
    set_page,
    set_total_pages,
    create_employee_requested,
    delete_employee_requested,
    update_employee_requested } = employeeSlice.actions
export type EmployeeAction = ReturnType<typeof create_employee>
export default employeeSlice.reducer