'use client'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [postedData, setPostedData] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })

    const data = await res.json()
    setPostedData(data.body)

    // setPostedData(`作った値：${name}`)
  }

  return (
    // </main>
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Next JS APIのテスト</h1>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center"
        action="/api/form"
        method="POST"
      >
        <input
          value={name}
          onChange={onChangeHandler}
          type="text"
          name="name"
          placeholder="名前"
          className="border border-gray-400 rounded-lg py-2 px-4 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          送信
        </button>
      </form>
      <p className="text-lg font-medium mt-4">{postedData}</p>
    </main>
  )
}
