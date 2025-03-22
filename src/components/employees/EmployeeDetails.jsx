import { useParams } from "react-router-dom"
import { getEmployeeUserByUserId } from "../../services/userService"
import { useEffect, useState } from "react"

export const EmployeeDetails = () => {
    const {employeeUserId} = useParams()
    const [employeeUser, setEmployeeUser] = useState({
        fullName: "",
        email: "",
        employees: [{
            specialty: "N/A",
            rate: "N/A"
        }]
    })

    const getAndSetEmployeeUser = async () => {
        const employeeUserData = await getEmployeeUserByUserId(employeeUserId)
        setEmployeeUser(employeeUserData)
    }

    useEffect(() => {
        getAndSetEmployeeUser()
    }, [employeeUserId])

    return (
        <section className="employee">
            <header className="employee-header">{employeeUser.fullName}</header>
            <div>
                <span className="employee-info">Email: </span>
                {employeeUser.email}
            </div>
            <div>
                <span className="employee-info">Specialty: </span>
                {employeeUser.employees[0] ? `${employeeUser.employees[0].specialty}` : "N/A"}
            </div>
            <div>
                <span className="employee-info">Rate: </span>
                {employeeUser.employees[0] ? `${employeeUser.employees[0].rate}` : `N/A`}
            </div>
        </section>
    )
}