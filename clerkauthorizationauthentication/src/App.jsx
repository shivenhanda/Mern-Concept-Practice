import { Show, SignInButton, SignOutButton, UserButton } from '@clerk/react'
import './App.css'

function App() {
  return (
    <>
      <Show when="signed-in">
        <UserButton/>
      </Show>
      <Show when="signed-out">
        <SignInButton/>
        <SignOutButton/>
      </Show>
    </>
  )
}

export default App
