export interface IEmployeeUnsaved {
    name: string,
    date_of_birth: string,
    gender: string,
    salary: number
}

export interface IEmployee extends IEmployeeUnsaved {
    _id: string,
}

export interface EmployeeState {
    employees: Array<IEmployee>,
    isLoading: boolean
}