import Button from './Button'
import Loading from './Loading'
import TableRow from './TableRow'
import './Table.css'
import { useEffect, useState } from 'react'
import { Employee } from '../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { create_employee, delete_employee, update_employee } from '../store/slices/employeeSlice';
import { RootState } from '../store';
import { dateToString } from '../helpers'

export default function Table () {

    const employees: Employee[] = useSelector((state: RootState) => state.employeeReducer.employees)
    const isLoading: boolean = useSelector((state: RootState) => state.employeeReducer.isLoading)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type: "employees/fetch_employee"
        })
    }, [])

    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Salary</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                isLoading
                ? <tr><td colSpan={6}><Loading dots={3}></Loading></td></tr>
                :employees.map(
                    employee => <TableRow employee={employee} key={employee.id}></TableRow>
                )
            }
        </tbody>
    </table>
}