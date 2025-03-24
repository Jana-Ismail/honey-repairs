import { useState } from "react"
import "./Forms.css"
import { createTicket } from "../../services/ticketServices"
import { useNavigate } from "react-router-dom"

export const TicketForm = ( {currentUser} ) => {
    const [ticket, setTicket] = useState({
        description: "",
        emergency: false
    })

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (ticket.description) {
            const newTicketObj = {
                description: ticket.description,
                emergency: ticket.emergency,
                userId: currentUser.id,
                dateCompleted: ""
            }
            await createTicket(newTicketObj)
            navigate('/tickets')
        } else {
            window.alert("Please fill out the description field.")
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        id="ticket-description"
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        name="ticket-description"
                        onChange={(event) => {
                            const ticketCopy = { ...ticket }
                            ticketCopy.description = event.target.value
                            setTicket(ticketCopy)
                        }} 
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>
                        Emergency:
                        <input 
                            type="checkbox"
                            onChange={(event) => {
                                const ticketCopy = { ...ticket }
                                ticketCopy.emergency = event.target.checked
                                setTicket(ticketCopy)
                            }} 
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button type="submit" className="form-btn btn-info">Submit Ticket</button>
                </div>
            </fieldset>
        </form>
    )
}