import axios from "axios"

import { Employee } from '../types'

export const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE
})

export async function create_employee(employee: Employee) {
    return client.post('/employees', employee)
}

export async function fetch_employees() {
    return client.get('/employees')
}

export async function delete_employee(employee: Employee) {
    return client.delete(`/employees/${employee.id}`)
}

export async function update_employee(employee: Employee) {
    return client.put(`/employees/${employee.id}`, employee)
}

export default {
    create_employee,
    fetch_employees,
    delete_employee,
    update_employee
}