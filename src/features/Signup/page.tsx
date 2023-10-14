import SignUpForm from './components/SignupForm/page'

const Signup = () => {
  // Eメール・パスワードを入力し、新規作成ボタンで新規登録するHTMLを作成
  return (
    <div>
      <h1>新規登録</h1>
      <SignUpForm />
    </div>
  )
}

export default Signup
