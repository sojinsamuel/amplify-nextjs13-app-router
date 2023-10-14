import Head from 'next/head'

export default function LoginGptCreate() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Sign In</h1>
          <a href="#" className="text-blue-500 hover:underline">
            Create Account
          </a>
        </div>
        <div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Password"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Sign in
          </button>
        </div>
        <a
          href="#"
          className="block text-center mt-4 text-blue-500 hover:underline"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  )
}
