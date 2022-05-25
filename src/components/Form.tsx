import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import { create_employee as create_employee_action } from '../store/slices/employeeSlice'

export default function Form() {
    let [name, setName] = useState("")
    let [gender, setGender] = useState("")
    let [date_of_birth, setDateOfBirth] = useState("1999-01-01")
    let [salary, setSalary] = useState(0)

    let dispatch = useDispatch()

    function create_employee () {
        dispatch(create_employee_action({
            name: name,
            gender: gender,
            date_of_birth: date_of_birth,
            salary: salary
        }))
    }

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input value={name} type="text" name="name" onChange={e => setName(e.target.value)}/>
            <hr />
            <label htmlFor="gender">Gender</label>
            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select>
            <hr />
            <label htmlFor="salary">Salary</label>
            <input value={salary} type="number" name="salary" onChange={e => setSalary(parseInt(e.target.value))}/>
            <hr />
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input value={date_of_birth} type="date" name="date_of_birth" onChange={e => setDateOfBirth(e.target.value)}/>
            <hr />
            <Button text="Create Employee" onClick={create_employee} />
        </div>
    )
}