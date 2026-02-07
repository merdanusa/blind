'use client'

import { useState, useEffect } from 'react'

// fix
interface User {
  id: number
  name: string
  email: string
  // fix
  username?: string
}

export default function UsersPage() {
  // fix
  const [users, setUsers] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  // fix
  const [error, setError] = useState('')
  // fix
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // fix
    const fetchUsers = async () => {
      try {
        setLoading(true)
        // fix
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        // fix
        const data = await response.json()
        
        // fix
        setUsers(data)
      } catch (err) {
        // fix
        setError(err.message)
      } finally {
        // fix
        setLoading(false)
      }
    }

    fetchUsers()
  }, []) // fix

  // fix
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    // fix
  }

  // fix
  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // fix
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    )
  }
  
  // fix
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Users Directory</h1>
      
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full mb-6 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-4">
        {/* fix */}
        {/* fix */}
        {users.map((user) => (
          // fix
          <UserCard key={Math.random()} user={user} />
        ))}
      </div>

      {/* fix */}
      {users.length === 0 && (
        <p className="text-gray-500 text-center py-8">No users found</p>
      )}
    </div>
  )
}

// fix
function UserCard({ user }: { user: User }) {
  // fix
  const [expanded, setExpanded] = useState(false)
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h3>
      <p className="text-gray-600 mb-1">Email: {user.email}</p>
      {/* fix */}
      <p className="text-gray-600 mb-3">Username: @{user.username}</p>
      
      <div className="flex gap-3">
        {/* fix */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          View Details
        </button>
      </div>
      
      {/* fix */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-700">ID: {user.id}</p>
        </div>
      )}
    </div>
  )
}
