import { useEffect, useState } from "react"
import "./Employees.css"
import { getStaffUsers } from "../../services/userService"
import { User } from "../users/User"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getAndSetEmployees = async () => {
        const employeeData = await getStaffUsers()
        setEmployees(employeeData)
    }

    useEffect(() => {
        getAndSetEmployees()
    }, [])

    return (
        <div className="employees">
            {employees.map(employee => (
                <User user={employee} key={employee.id}/>
            ))}
        </div>
    )
}