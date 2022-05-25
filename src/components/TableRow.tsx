import { useState } from "react"
import Button from "./Button"
import { Employee } from "../store/types";
import { dateToString, humanizeDateString, humanizeGender } from '../helpers'
import { useDispatch } from "react-redux";
import { delete_employee, update_employee } from '../store/slices/employeeSlice'

type TableRowProps = {
    employee: Employee
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
        dispatch(update_employee({
            id: employee.id,
            name,
            gender,
            date_of_birth,
            salary            
        }))
    }
    
    function deleteEmployee() {
        dispatch(delete_employee(employee))
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
                        <Button text="Save" onClick={saveEmployee}></Button>
                        <Button text="Cancel" onClick={toggleEdit}></Button>
                    </>
                    :
                    <>
                        <Button text="Delete" onClick={deleteEmployee}></Button>
                        <Button text="Edit" onClick={toggleEdit}></Button>
                    </>
            }
        </td>

    </tr>
}