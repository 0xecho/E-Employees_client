export interface Employee {
    id?: string,
    name: string,
    date_of_birth: Date,
    gender: string,
    salary: BigInteger
}

export interface EmployeeState {
    employees: Array<Employee>
}