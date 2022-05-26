import axios from "axios"

import { IEmployee, IEmployeeUnsaved, Pagination, PaginatedEmployees } from '../types'

export const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE
})

export async function create_employee(employee: IEmployeeUnsaved): Promise<IEmployee> {
    return client.post('/employees', employee).then(response => response.data)
}

export async function fetch_employees(pagination: Pagination): Promise<PaginatedEmployees> {
    return client.get(`/employees?page=${pagination.page}&limit=${pagination.limit}`)
        .then(response => response.data)
        .then(data => ({
            ...data,
            employees: data.employees.map((employee: IEmployee, idx: number) => { return { ...employee, id: idx + 1} }),
        }))
}

export async function delete_employee(employee: IEmployee): Promise<IEmployee> {
    return client.delete(`/employees/${employee._id}`).then(response => response.data)
}

export async function update_employee(employee: IEmployee): Promise<IEmployee> {    
    return client.put(`/employees/${employee._id}`, employee).then(response => response.data)
}

export default {
    create_employee,
    fetch_employees,
    delete_employee,
    update_employee
}