import { useNavigate } from "react-router-dom"
import "./Tickets.css"

export const TicketFilterBar = ({ 
    setShowEmergencyOnly, 
    setSearchTerm, 
    currentUser, 
    setShowOpenTicketsOnly 
  }) => {
    const navigate = useNavigate()

    return (
      <div className="filter-bar">
          {currentUser.isStaff ? (
              <>
                <button className="filter-btn btn-primary" onClick={() => {
                  setShowEmergencyOnly(true)
                }}>Emergency</button>
                <button className="filter-btn btn-secondary" onClick={() => {
                  setShowEmergencyOnly(false)
                }}>All</button>
                <input
                  type="text"
                  placeholder="Search Tickets"
                  className="ticket-search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                  }}
                />
              </>
            ) : (
              <>
                <button 
                  className="filter-btn btn-primary"
                  onClick={() => {navigate('/tickets/create')}}
                >Create Ticket</button>
                <button 
                  className="filter-btn btn-info"
                  onClick={() => {setShowOpenTicketsOnly(true)}}
                >Open Tickets</button>
                <button 
                  className="filter-btn btn-secondary"
                  onClick={() => {setShowOpenTicketsOnly(false)}}
                >All My Tickets</button>
              </>
            )
          }
        </div>
    )
}