export const getAllEmployees = async () => {
    const response = await fetch('http://localhost:8088/employees?_expand=user')

    return await response.json()
}

export const getEmployeeById = async (employeeId) => {
    const response = await fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`)
    return await response.json()
}

export const getEmployeeByUserId = async (userId) => {
    const response = await fetch(`http://localhost:8088/employees?userId=${userId}`)
    return await response.json()
}

export const updateEmployee = (employeeObj) => {
    return fetch(
        `http://localhost:8088/employees/${employeeObj.id}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        }
    )
}