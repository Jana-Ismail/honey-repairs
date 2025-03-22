import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { TicketList } from "./components/tickets/TicketList"
import { NavBar } from "./components/navbar/NavBar"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { Welcome } from "./components/welcome/welcome"
import { CustomerDetails } from "./components/customers/CustomerDetails"
import { EmployeeDetails } from "./components/employees/EmployeeDetails"

export const App = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerUserId" element={<CustomerDetails />}/>
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeUserId" element={<EmployeeDetails />}/>
        </Route>

      </Route>
    </Routes>
  )
}
