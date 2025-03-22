import { useParams } from "react-router-dom"
import "./Customers.css"
import { useEffect, useState } from "react"
import { getCustomerUserByUserId } from "../../services/userService"

export const CustomerDetails = () => {
    const {customerUserId} = useParams()
    const [customerUser, setCustomerUser] = useState({
        fullName: "",
        email: "",
        customers: [{
            phoneNumber: "",
            address: ""
        }]
    })

    const getAndSetCustomerUser = async () => {
        const customerUserData = await getCustomerUserByUserId(customerUserId)
        setCustomerUser(customerUserData)
    }

    useEffect(() => {
        getAndSetCustomerUser()
    }, [customerUserId])


    return (
        <section className="customer">
             <header className="customer-header">{customerUser.fullName}</header>             
             <div>
                 <span className="customer-info">Email: </span>
                 {customerUser.email}
             </div>
             <div>
                 <span className="customer-info">Phone Number: </span>
                 {customerUser.customers[0].phoneNumber}
             </div>
             <div>
                 <span className="customer-info">Address: </span>
                 {customerUser.customers[0].address}
             </div>
         </section>
    )
}