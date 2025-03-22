import { useEffect, useState } from "react"
import "./Employees.css"
import { getStaffUsers } from "../../services/userService"
import { User } from "../users/User"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employeeUsers, setEmployeeUsers] = useState([])

    const getAndSetEmployees = async () => {
        const employeeData = await getStaffUsers()
        setEmployeeUsers(employeeData)
    }

    useEffect(() => {
        getAndSetEmployees()
    }, [])

    return (
        <div className="employees">
            {employeeUsers.map(employeeUser => (
                <Link to={`/employees/${employeeUser.id}`} key={employeeUser.id}>
                    <User user={employeeUser} />
                </Link>
            ))}
        </div>
    )
}