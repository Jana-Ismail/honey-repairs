export const getNonStaffUsers = async () => {
    const response = await fetch('http://localhost:8088/users?isStaff=false')
    return response.json()
}

export const getStaffUsers = async () => {
    const response = await fetch('http://localhost:8088/users?isStaff=true')
    return response.json()
}

export const getUserById = async (userId) => {
    const response = await fetch(`http://localhost:8088/users/${userId}?_embed=customers`)
    return await response.json()
}