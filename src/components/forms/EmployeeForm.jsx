import { useEffect, useState } from "react"
import "./Forms.css"
import { getEmployeeByUserId, updateEmployee } from "../../services/employeeService"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = ( { currentUser } ) => {
    const [employee, setEmployee] = useState({})

    const navigate = useNavigate()

    const getAndSetEmployee = async () => {
            const employeeData = await getEmployeeByUserId(currentUser.id)
            const employeeObj = employeeData[0]
            setEmployee(employeeObj)
    }

    useEffect(() => {
        getAndSetEmployee()
    }, [currentUser])
    
    const handleSave = async (event) => {
        event.preventDefault()
        const currentEmployeeData = { ...employee }

        await updateEmployee(currentEmployeeData)

        navigate(`/employees/${currentUser.id}`)
    }

    return (
        <form className="profile" onSubmit={handleSave}>
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty: </label>
                    <input
                        id="specialty-input" 
                        type="text"
                        required
                        className="form-control"
                        value={employee.specialty || ""}
                        onChange={(event) => {
                            const employeeCopy = { ...employee }
                            employeeCopy.specialty = event.target.value
                            setEmployee(employeeCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate: </label>
                    <input
                        id="rate-input" 
                        type="number"
                        required
                        className="form-control"
                        value={employee.rate || ""}
                        onChange={(event) => {
                            const employeeCopy = { ...employee }
                            employeeCopy.rate = event.target.value
                            setEmployee(employeeCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-secondary" type="submit">Save Profile</button>
                </div>
            </fieldset>
        </form>
    )
}