import Button from './Button'
import './Table.css'

export default function Table () {
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
            <tr>
                <td>1</td>
                <td>Elias Amha</td>
                <td>Male</td>
                <td>12/22/1999</td>
                <td>7,500</td>
                <td>
                    <Button text="Delete"></Button>
                    <Button text="Edit"></Button>
                </td>

            </tr>
        </tbody>
    </table>
}