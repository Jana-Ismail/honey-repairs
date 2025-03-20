import { useEffect, useState } from "react"
import "./Customers.css"
import { getNonStaffUsers } from "../../services/userService"

export const CustomerList = () => {
    const [nonStaffUsers, setNonStaffUsers] = useState([])

    const getAndSetNonStaffUsers = async () => {
        const nonStaffUsersData = await getNonStaffUsers()
        setNonStaffUsers(nonStaffUsersData)
    }

    useEffect(() => {
        getAndSetNonStaffUsers()
    }, [])

   return (
    <div className="customers">
        {nonStaffUsers.map(user => {
            return (
                <div>
                    <div>
                        <div>Name</div>
                        <div>{user.fullName}</div>
                    </div>
                    <div>
                        <div>Email</div>
                        <div>{user.email}</div>
                    </div>
                </div>
            )
        })}
    </div>
   ) 
}