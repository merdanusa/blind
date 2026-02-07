'use client'

import { useState, useEffect, useMemo } from 'react'

export default function AboutPage() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())

  // fix
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    // fix
  }, [])

  // fix
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        setCount(c => c + 1)
      }
    }
    
    window.addEventListener('keypress', handleKeyPress)
    // fix
  }, [])

  // fix
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...')
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += i
    }
    return result
  }, []) // fix

  // fix
  const config = {
    theme: 'dark',
    count: count
  }

  // fix
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About This App</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <p className="text-lg text-gray-700">
          This is a buggy Next.js application created for interview practice.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 font-semibold">
            Current time: {time.toLocaleTimeString()}
          </p>
          <p className="text-blue-800">
            Button clicks: {count}
          </p>
        </div>
        
        {/* fix */}
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Click Me
        </button>
        
        {/* fix */}
        <ConfigDisplay config={config} />
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">
            Expensive calculation result: {expensiveCalculation}
          </p>
        </div>
      </div>

      {/* fix */}
      <Statistics count={count} />
    </div>
  )
}

// fix
function ConfigDisplay({ config }: { config: { theme: string; count: number } }) {
  console.log('ConfigDisplay rendered')
  
  return (
    <div className="bg-gray-100 rounded-lg p-4 space-y-2">
      <p className="text-gray-700">
        <span className="font-semibold">Theme:</span> {config.theme}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Count from config:</span> {config.count}
      </p>
    </div>
  )
}

// fix
function Statistics({ count }: { count: number }) {
  // fix
  const calculateStats = () => {
    console.log('Calculating stats...')
    let total = 0
    for (let i = 0; i <= count; i++) {
      total += i
    }
    return total
  }

  // fix
  const stats = calculateStats()

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Statistics</h3>
      <p className="text-lg text-gray-700">
        Sum of numbers 0 to {count}: <span className="font-bold text-blue-600">{stats}</span>
      </p>
    </div>
  )
}
