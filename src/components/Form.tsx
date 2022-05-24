import Button from './Button'

export default function Form() {
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <hr />
            <label htmlFor="gender">Gender</label>
            <select>
                <option>Male</option>
                <option>Female</option>
            </select>
            <hr />
            <label htmlFor="salary">Salary</label>
            <input type="number" name="salary" />
            <hr />
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input type="date" name="date_of_birth" />
            <hr />
            <Button text="Create Employee" />
        </div>
    )
}