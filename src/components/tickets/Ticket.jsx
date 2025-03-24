import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { closeTicket, createEmployeeTicket } from "../../services/ticketServices"

export const Ticket = ({ ticket, currentUser, setTickets }) => {
    const [employees, setEmployees] = useState([])
    // const [assignedEmployee, setAssignedEmployee] = useState("")
    const [assignedEmployee, setAssignedEmployee] = useState("")

    // const getAndSetAssignedEmployee = async () => {
    //     if (ticket.employeeTickets.length) {
    //         const employee = await getEmployeeById(ticket.employeeTickets[0].employeeId)
    //         setAssignedEmployee(employee)
    //     }
    // }

    const getAndSetEmployees = async () => {
        const employeesData = await getAllEmployees()
        setEmployees(employeesData)
    }

    useEffect(() => {
        // getAndSetAssignedEmployee()
        getAndSetEmployees()
    }, [currentUser])

    useEffect(() => {
        const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId)
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    const handleClaim = async () => {
        const currentEmployee = employees.find(employee => employee.userId === currentUser.id)

        if (currentEmployee) {
            const newEmployeeTicket = {
                employeeId: currentEmployee.id,
                serviceTicketId: ticket.id
            }
    
            await createEmployeeTicket(newEmployeeTicket)
            await setTickets()
        }

    }

    const handleClose = async () => {
        const ticketCopy = { ...ticket }
        ticketCopy.dateCompleted = new Date()

        await closeTicket(ticketCopy)
        await setTickets()
    }

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
                <div className="btn-container">
                    {
                        currentUser.isStaff && !assignedEmployee ? (
                            <button className="btn btn-info" onClick={handleClaim}>Claim</button>
                        ) : (
                            ""
                        )
                    }
                    {
                        assignedEmployee?.user?.id === currentUser.id && !ticket.dateCompleted ? (
                            <button className="btn btn-warning" onClick={handleClose}>Close</button>
                        ) : (
                            ""
                        )    
                    }
                </div>
            </footer>
        </section>
    )
}