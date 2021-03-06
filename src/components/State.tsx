import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

function State() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'rohit',
      email: 'rohit@example.com',
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}

export default State