export interface IEmployeeUnsaved {
    name: string,
    date_of_birth: string,
    gender: string,
    salary: number,
    id?: number
}

export interface IEmployee extends IEmployeeUnsaved {
    _id: string,
}

export interface EmployeeState {
    employees: Array<IEmployee>,
    isLoading: boolean,
    page: number,
    totalPages: number,
}

export interface Pagination {
    page: number,
    limit: number
}

export interface PaginatedEmployees {
    employees: Array<IEmployee>,
    page: number,
    totalPages: number,
}