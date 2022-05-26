import axios from "axios"

import { IEmployee, IEmployeeUnsaved } from '../types'

export const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE
})

client.interceptors.response.use(
    response => response,
    error => {
        let errors = error.response.data ? error.response.data.error : { "message": error.message }
        let errorMessage = ""
        for (let key in errors) {
            errorMessage += `\n${errors[key]}`
        }
        throw new Error(errorMessage)
    }
)

export async function create_employee(employee: IEmployeeUnsaved): Promise<IEmployee> {
    return client.post('/employees', employee).then(response => response.data)
}

export async function fetch_employees(): Promise<IEmployee[]> {
    return client.get('/employees').then(response => response.data).then(
        (employees: IEmployee[]) => employees.map((employee: IEmployee, idx: number) => ({
            ...employee,
            id: idx + 1
        }))
    )
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