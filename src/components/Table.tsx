import Button from './Button'
import TableRow from './TableRow'
import './Table.css'
import { useEffect, useState } from 'react'
import { Employee } from '../store/types';

export default function Table () {

    let [ employees, setEmployees ] = useState<Array<Employee>>([]);

    useEffect(()=>{
        setEmployees([
            {
                id: "1",
                name: "Elias Amha",
                gender: "Male",
                date_of_birth: new Date(),
                salary: 75000
            }
        ])

    },[])

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