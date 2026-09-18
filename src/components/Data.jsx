import { useState } from 'react'

function Data() {
  const [customers, setCustomers] = useState([])

  const showAllCustomers = async () => {
    const response = await fetch('http://localhost:8080/api/customers')
    const data = await response.json()
    setCustomers(data)
  }

  return (
    <main>
      <h1>Customer Data</h1>

      <button onClick={showAllCustomers}>
        Show All Customers
      </button>

      {customers.map((customer) => (
        <div key={customer.id}>
          <p>
            {customer.firstName} {customer.lastName} - {customer.email}
          </p>
        </div>
      ))}
    </main>
  )
}

export default Data