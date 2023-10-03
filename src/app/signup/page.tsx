'use client'
import { Amplify } from 'aws-amplify'
// import { useRouter } from 'next/navigation'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsExports from '../../aws-exports'

Amplify.configure(awsExports)

// next authenticator provider
// https://ui.docs.amplify.aws/react/connected-components/authenticator/advanced
// https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial

export default function App() {
  //   const router = useRouter()
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut, user }) => {
        // if (user) router.push(`/dashboard`)
        return (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )
      }}
    </Authenticator>
  )
}
