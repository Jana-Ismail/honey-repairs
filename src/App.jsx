import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketServices"
import "./App.css"
import { TicketList } from "./components/tickets/TicketList"
import { CustomerList } from "./components/customers/CustomerList"

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      <CustomerList />
    </>
  )
}
