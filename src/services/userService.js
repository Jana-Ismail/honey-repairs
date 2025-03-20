export const getNonStaffUsers = async () => {
    const response = await fetch('http://localhost:8088/users?isStaff=false')
    return response.json()
}

export const getStaffUsers = async () => {
    const response = await fetch('http://localhost:8088/users?isStaff=true')
    return response.json()
}