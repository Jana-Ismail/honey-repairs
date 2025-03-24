export const getAllTickets = async () => {
    const response = await fetch('http://localhost:8088/serviceTickets?_embed=employeeTickets')
    return await response.json()
}

export const getEmployeeTickets = async () => {
    const response = await fetch(`http://localhost:8088/employeeTickets`)
    return await response.json()
}

export const createEmployeeTicket = async (employeeTicket) => {
    return await fetch(
        'http://localhost:8088/employeeTickets',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeTicket)
        }
    )
}

export const closeTicket = async (ticket) => {
    return await fetch(
        `http://localhost:8088/serviceTickets/${ticket.id}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        }
    )
}

export const deleteTicket = async (ticketId) => {
    return fetch(
        `http://localhost:8088/serviceTickets/${ticketId}`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}