import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { TicketFilterBar } from "./TicketFilterBar"

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
  
    const getAndSetTickets = async () => {
      const tickets = await getAllTickets()
      if (currentUser.isStaff) {
        setAllTickets(tickets)
      } else {
        const customerTickets = tickets.filter(ticket => ticket.userId === currentUser.id)
        setAllTickets(customerTickets)
      }
    }
    useEffect(() => {
      getAndSetTickets()
    }, [currentUser])
  
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(ticket => ticket.emergency)
        setFilteredTickets(emergencyTickets)
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
      const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])
  
    return (
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
        <article className="tickets">
          {filteredTickets?.map(ticketObj => {
            return (
                <Ticket ticket={ticketObj} key={ticketObj.id} currentUser={currentUser} setTickets={getAndSetTickets}/>
            )
          })}
        </article>
      </div>
    )
}