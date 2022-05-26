import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
import Button from './Button'
import './Form.css'
import { create_employee_requested } from '../store/slices/employeeSlice'
import Input from './Input'
import SelectInput from './SelectInput'

Modal.setAppElement('#root')

export default function Form() {

    let [modalIsOpen, setModalIsOpen] = useState(false)

    let [name, setName] = useState("")
    let [gender, setGender] = useState("male")
    let [date_of_birth, setDateOfBirth] = useState("1999-01-01")
    let [salary, setSalary] = useState(0)

    let dispatch = useDispatch()

    function create_employee() {
        dispatch(create_employee_requested({
            name: name,
            gender: gender,
            date_of_birth: date_of_birth,
            salary: salary
        }))
        close_modal()
    }

    function open_modal() {
        setModalIsOpen(true)
    }

    function close_modal() {
        setModalIsOpen(false)
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={close_modal}
                shouldCloseOnOverlayClick={true}
                contentLabel="Create Employee"
                className="modal"
            >
                <div className="modal-container">
                    <div className="modal-header">
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h2>Create Employee</h2>
                            <span style={{cursor: "pointer", width: "40px"}} onClick={close_modal}>
                                <p>&times;</p>
                            </span>
                        </div>
                        
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="name">Name</label>
                                        </td>
                                        <td>
                                            <Input value={name} onChange={e => setName(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="salary">Salary</label>
                                        </td>
                                        <td>
                                            <Input
                                                value={salary}
                                                type="number"
                                                onChange={e => setSalary(parseInt(e.target.value))}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="gender">Gender</label>
                                        </td>
                                        <td>
                                            <SelectInput
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                                options={[{ text: "Male", value: "male" }, { text: "Female", value: "female" }]}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="date_of_birth">Date of Birth</label>
                                        </td>
                                        <td>
                                            <Input
                                                value={date_of_birth}
                                                type="date"
                                                onChange={e => setDateOfBirth(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <Button text="Create Employee" onClick={create_employee} />
                                            <Button text="Cancel" onClick={close_modal} backgroundColor="red" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Modal>
            <Button text="Create Employee" onClick={open_modal} backgroundColor="white" color="green" />
        </div>
    )
}