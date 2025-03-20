export const getAllEmployees = async () => {
    const response = await fetch('http://localhost:8088/employees?_expand=user')

    return await response.json()
}

export const getEmployeeById = async (employeeId) => {
    const response = await fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`)
    return await response.json()
}