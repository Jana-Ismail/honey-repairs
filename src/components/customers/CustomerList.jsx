import { useEffect, useState } from "react"
import "./Customers.css"
import { getNonStaffUsers } from "../../services/userService"
import { User } from "../users/User"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getAndSetCustomers = async () => {
        const customersData = await getNonStaffUsers()
        setCustomers(customersData)
    }

    useEffect(() => {
        getAndSetCustomers()
    }, [])

   return (
    <div className="customers">
        {customers.map(customer => {
            return (
                <User user={customer} key={customer.id}/>
            )
        })}
    </div>
   ) 
}