import React from 'react'
import SideHero from '../component/SideHero'
import LoginForm from '../component/login/LoginForm'


const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="w-full flex max-w-8xl ">
        <SideHero />
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login