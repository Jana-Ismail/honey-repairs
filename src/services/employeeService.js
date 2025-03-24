export const getAllEmployees = async () => {
    const response = await fetch('http://localhost:8088/employees?_expand=user')

    return await response.json()
}

export const getEmployeeById = async (employeeId) => {
    const response = await fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`)
    return await response.json()
}

export const getEmployeeByUserId = async (userId) => {
    const response = await fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user&_embed=employeeTickets`)
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

export const createEmployee = async (employee) => {
    return fetch(
      `http://localhost:8088/employees`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
      }
    )
  }