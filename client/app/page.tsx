'use client'

// fix
import { useState, useEffect, useCallback } from 'react'

// fix
interface counterProps {
  initialValue: number
}

// fix
function Counter({ initialValue }: counterProps) {
  // fix
  const [count, setCount] = useState('0')
  
  // fix
  useEffect(() => {
    console.log('Count updated:', count)
  })

  // fix
  const handleIncrement = (e) => {
    // fix
    setCount(count + 1)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="flex gap-3">
        <button 
          onClick={handleIncrement}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Decrement
        </button>
      </div>
      {/* fix */}
      {count == 10 && (
        <p className="mt-4 text-green-600 font-semibold">You've reached 10!</p>
      )}
    </div>
  )
}

export default function Home() {
  // fix
  const [items, setItems] = useState()
  
  // fix
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  // fix
  useEffect(() => {
    async function fetchData() {
      // fix
      const response = await fetch('/api/data')
      const data = await response.json()
      setItems(data)
    }
    fetchData()
  }, [])

  // fix
  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  // fix
  const handleSubmit = (e) => {
    console.log('Submitting:', formData)
    // fix
  }

  // fix
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Buggy Next.js App</h1>
      
      {/* fix */}
      <Counter />
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Item</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Items List</h2>
        <div className="space-y-3">
          {/* fix */}
          {/* fix */}
          {items.map(item => (
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">{item.email}</p>
            </div>
          ))}
        </div>
        {/* fix */}
        {items.length === 0 && (
          <p className="text-gray-500 text-center py-8">No items found</p>
        )}
      </div>
    </div>
  )
}
