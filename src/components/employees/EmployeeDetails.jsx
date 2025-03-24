import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService"
import { useEffect, useState } from "react"

export const EmployeeDetails = () => {
    const {employeeUserId} = useParams()
    const [employee, setEmployee] = useState({
        specialty: "",
        rate: null,
        user: {
            email: "",
            fullName: ""
        },
        employeeTickets: []
    })

    const getAndSetEmployeeUser = async () => {
        const employeeUserData = await getEmployeeByUserId(employeeUserId)
        const employeeUserObj = employeeUserData[0]
        setEmployee(employeeUserObj)
    }

    useEffect(() => {
        getAndSetEmployeeUser()
    }, [employeeUserId])

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email: </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty: </span>
                {employee.specialty ? `${employee.specialty}` : "N/A"}
            </div>
            <div>
                <span className="employee-info">Rate: </span>
                {employee.rate ? `${employee.rate}` : `N/A`}
            </div>
            <footer className="employee-footer">
                Currently working on {employee.employeeTickets.length} tickets
            </footer>
        </section>
    )
}