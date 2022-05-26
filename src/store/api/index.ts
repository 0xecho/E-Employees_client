import axios from "axios"

import { IEmployee, IEmployeeUnsaved } from '../types'

export const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE
})

export async function create_employee(employee: IEmployeeUnsaved) {
    return client.post('/employees', employee)
}

export async function fetch_employees() {
    return client.get('/employees')
}

export async function delete_employee(employee: IEmployee) {
    return client.delete(`/employees/${employee._id}`)
}

export async function update_employee(employee: IEmployee) {
    return client.put(`/employees/${employee._id}`, employee)
}

export default {
    create_employee,
    fetch_employees,
    delete_employee,
    update_employee
}