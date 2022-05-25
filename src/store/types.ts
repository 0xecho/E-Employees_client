export interface Employee {
    id?: string,
    name: string,
    date_of_birth: string,
    gender: string,
    salary: number
}

export interface EmployeeState {
    employees: Array<Employee>
}