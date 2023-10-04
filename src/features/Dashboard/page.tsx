'use client'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Dashboard = () => {
  const router = useRouter()
  const { user, signOut, authStatus } = useAuthenticator((context) => [
    context.user,
    context.authStatus,
  ])

  useEffect(() => {
    if (authStatus !== 'authenticated') router.push(`/signin`)
  }, [authStatus, router])

  const handleSignOut = () => {
    signOut()
    router.push(`/`)
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <h1>Hello {user?.username}</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default Dashboard
