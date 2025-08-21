import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { username, password } = await request.json()

  // Simulate a login process
  if (username === 'admin' && password === 'password') {
    return new Response(JSON.stringify({ message: 'Login successful' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } else {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
