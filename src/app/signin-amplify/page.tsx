'use client'
import { Amplify } from 'aws-amplify'
import { useRouter } from 'next/navigation'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsExports from '../../aws-exports'

Amplify.configure(awsExports)

// TODO:
// goからspabaseにアクセス
// next.jsからapiを叩く

const SignIn = () => {
  const router = useRouter()
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut, user }) => {
        if (user) router.push(`/dashboard`)
        return (
          <main>
            <button onClick={signOut}>Sign out</button>
          </main>
        )
      }}
    </Authenticator>
  )
}

export default SignIn
