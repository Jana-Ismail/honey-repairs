import { useEffect, useState } from "react"
import { getEmployeeById } from "../../services/employeeService"

export const Ticket = ({ ticket }) => {
    const [assignedEmployee, setAssignedEmployee] = useState("")

    const getAndSetAssignedEmployee = async () => {
        if (ticket.employeeTickets.length) {
            const employee = await getEmployeeById(ticket.employeeTickets[0].employeeId)
            setAssignedEmployee(employee)
        }
    }

    useEffect(() => {
        getAndSetAssignedEmployee()
    }, [ticket])



    return (
        <section className="ticket">
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
            <div>
                <div className="ticket-info">assignee</div>
                <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
            </div>
            <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
            </div>
            </footer>
        </section>
    )
}