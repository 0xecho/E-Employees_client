import { useState } from "react"
import Button from "./Button"
import { IEmployee } from "../store/types";
import { dateToString, humanizeDateString, humanizeGender } from '../helpers'
import { useDispatch } from "react-redux";
import { delete_employee_requested, update_employee_requested } from '../store/slices/employeeSlice'

type TableRowProps = {
    employee: IEmployee
}

export default function TableRow({ employee }: TableRowProps) {

    let [isEditing, setEditing] = useState(false);
    let [name, setName] = useState(employee.name)
    let [gender, setGender] = useState(employee.gender || "male")
    let [date_of_birth, setDateOfBirth] = useState(employee.date_of_birth)
    let [salary, setSalary] = useState(employee.salary)

    let dispatch = useDispatch();

    function toggleEdit() {
        setEditing(!isEditing)
    }

    function saveEmployee() {
        toggleEdit()
        dispatch(update_employee_requested({
            name,
            gender,
            date_of_birth,
            salary,
            _id: employee._id
        }))
    }
    
    function deleteEmployee() {
        dispatch(delete_employee_requested(employee))
    }

    function updateDateOfBirth(event: React.ChangeEvent<HTMLInputElement> ) {
        let _date_of_birth: Date = new Date(event.target.valueAsNumber)
        setDateOfBirth(dateToString(_date_of_birth))
    }

    return <tr>
        {
            isEditing
                ?
                <>
                    <td><input type="number" defaultValue={employee.id} disabled /></td>
                    <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
                    <td>
                        <select value={gender} onChange={e => setGender(e.target.value)} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </td>
                    <td><input type="date" value={date_of_birth} onChange={updateDateOfBirth} /></td>
                    <td><input type="number" value={salary} onChange={e => setSalary(parseInt(e.target.value))} /></td>
                </>
                :
                <>
                    <td>{employee.id}</td>
                    <td>{name}</td>
                    <td>{humanizeGender(gender)}</td>
                    <td>{humanizeDateString(date_of_birth)}</td>
                    <td>{salary}</td>
                </>
        }
        <td>
            {
                isEditing
                    ?
                    <>
                        <Button text="Save" onClick={saveEmployee} backgroundColor="white" color="green"/>
                        <Button text="Cancel" onClick={toggleEdit} backgroundColor="white" color="red" />
                    </>
                    :
                    <>
                        <Button text="Edit" onClick={toggleEdit} backgroundColor="white" color="blue"></Button>
                        <Button text="Delete" onClick={deleteEmployee} backgroundColor="white" color="red"></Button>
                    </>
            }
        </td>

    </tr>
}