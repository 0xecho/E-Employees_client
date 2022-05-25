import Button from './Button'
import TableRow from './TableRow'
import './Table.css'
import { useEffect, useState } from 'react'
import { Employee } from '../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { create_employee, delete_employee, update_employee } from '../store/slices/employeeSlice';
import { RootState } from '../store';

export default function Table () {

    const employees: Employee[] = useSelector((state: RootState) => state.employeeReducer.employees)
    const dispath = useDispatch()

    useEffect(() => {
        console.log("GOINT ")
        dispath(create_employee({
            id: "1",
            name: "Elias Amha",
            gender: "Male",
            date_of_birth: new Date(),
            salary: 75000
        }))
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
                employees.map(
                    employee => <TableRow employee={employee} key={employee.id}></TableRow>
                )
            }
        </tbody>
    </table>
}