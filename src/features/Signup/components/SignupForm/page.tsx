'use client'
import { Button } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // フォームの送信処理
  }

  return (
    <>
      {isClient ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-md flex flex-col items-center"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Eメール
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              パスワード
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            新規作成
          </Button>
        </form>
      ) : (
        <div>Nothing...</div>
      )}
    </>
  )
}

export default SignUpForm
