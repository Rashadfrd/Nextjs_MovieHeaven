import LoginPage from '@/components/login'
import React from 'react'

// async function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

async function Login() {
  // await delay(3000)
  return (
    <div>
     <LoginPage />
    </div>
  )
}

export default Login
