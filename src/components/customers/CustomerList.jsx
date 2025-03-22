import { useEffect, useState } from "react"
import "./Customers.css"
import { getNonStaffUsers } from "../../services/userService"
import { User } from "../users/User"
import { Link } from "react-router-dom"

export const CustomerList = () => {
    const [customerUsers, setCustomerUsers] = useState([])

    const getAndSetCustomers = async () => {
        const customerUsersData = await getNonStaffUsers()
        setCustomerUsers(customerUsersData)
    }

    useEffect(() => {
        getAndSetCustomers()
    }, [])

   return (
    <div className="customers">
        {customerUsers.map(customerUser => {
            return (
                <Link to={`/customers/${customerUser.id}`} key={customerUser.id}>
                    <User user={customerUser} />
                </Link>
            )
        })}
    </div>
   ) 
}