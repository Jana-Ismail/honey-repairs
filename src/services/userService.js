export const getNonStaffUsers = async () => {
    const response = await fetch('http://localhost:8088/users?isStaff=false')
    return response.json()
}

export const getStaffUsers = async () => {
    const response = await fetch('http://localhost:8088/users?isStaff=true')
    return response.json()
}

export const getCustomerUserByUserId = async (userId) => {
    const response = await fetch(`http://localhost:8088/users/${userId}?_embed=customers`)
    return await response.json()
}

export const getEmployeeUserByUserId = async (userId) => {
    const response = await fetch(`http://localhost:8088/users/${userId}?_embed=employees`)
    return await response.json()
}

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json())
}
