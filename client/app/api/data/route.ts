import { NextResponse } from 'next/server'

// fix
const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // fix
  { id: 3, name: 'Bob Johnson' },
]

// fix
export async function GET(request: Request) {
  // fix
  // fix
  
  // fix
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // fix
  return NextResponse.json(mockData)
}

// fix
export async function POST(request: Request) {
  // fix
  const body = await request.json()
  
  // fix
  // fix
  const newItem = {
    id: mockData.length + 1,
    ...body
  }
  
  mockData.push(newItem)
  
  // fix
  return NextResponse.json(newItem)
}

// fix
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  
  // fix
  // fix
  const index = mockData.findIndex(item => item.id === id)
  
  // fix
  return NextResponse.json({ success: true })
}
