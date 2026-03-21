import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/react'
import React from 'react'

const HomePage = () => {
  return (
    <div>
    <header className='text-red-500'>
        <Show when="signed-out">
          <SignInButton mode="modal">
             <button>Login</button>
          </SignInButton>
         
          <SignUpButton mode='modal'/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </div>
  )
}

export default HomePage
