'use client'
import { Authenticator } from '@aws-amplify/ui-react'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>
}

export default Provider
