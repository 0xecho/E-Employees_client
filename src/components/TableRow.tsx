import { useState } from "react"
import Button from "./Button"
import { Employee } from "../store/types";

type TableRowProps = {
    employee: Employee
}

export default function TableRow({ employee }: TableRowProps) {

    let [isEditing, setEditing] = useState(false);
    let [name, setName] = useState(employee.name)
    let [gender, setGender] = useState(employee.gender)
    let [date_of_birth, setDateOfBirth] = useState(employee.date_of_birth)
    let [salary, setSalary] = useState(employee.salary)

    function toggleEdit() {
        setEditing(!isEditing)
    }

    function saveEmployee() {
        toggleEdit()
    }
    
    function deleteEmployee() {

    }

    function updateDateOfBirth(event: React.ChangeEvent<HTMLInputElement> ) {
        let _date_of_birth: Date = new Date(event.target.valueAsNumber)
        setDateOfBirth(_date_of_birth)
    }

    function dateToString(date: Date)  {
        return date_of_birth.toISOString().split('T')[0];
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
                    <td><input type="date" value={dateToString(date_of_birth)} onChange={updateDateOfBirth} /></td>
                    <td><input type="number" value={salary} onChange={e => setSalary(parseInt(e.target.value))} /></td>
                </>
                :
                <>
                    <td>{employee.id}</td>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{date_of_birth.toDateString()}</td>
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