import { AnyAction } from "@reduxjs/toolkit";

interface Employee {
    id: string,
    name: string,
    date_of_birth: Date,
    gender: string,
    salary: BigInteger
}

interface EmployeeState {
    employees: Array<Employee>
}

const initial_state: EmployeeState = {
    employees: []
}

export function employee (state=initial_state, action: AnyAction) {
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            return {
                employees: [...state.employees, action.data]
            }
        case 'GET_EMPLOYEES':
            return {
                employees: action.data
            }
        case 'EDIT_EMPLOYEE':
            const updated_employee = action.data
            return {
                employees: state.employees.map(employee => employee.id === updated_employee.id ? updated_employee : employee )
            }
        case 'DELETE_EMPLOYEE':
            const deleted_employee = action.data
            return {
                employees: state.employees.filter(employee => employee.id !== deleted_employee.id )
            }
        default:
            return state;
    }
}