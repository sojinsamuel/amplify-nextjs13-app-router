import dynamic from 'next/dynamic'

const LoginGptCreate = dynamic(() => import('@/features/LoginGptCreate/page'), {
  ssr: false,
})

const loginGapCreatePage = () => {
  return (
    <div>
      <LoginGptCreate />
    </div>
  )
}

export default loginGapCreatePage
