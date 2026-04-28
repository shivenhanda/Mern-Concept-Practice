import React from 'react'

export default function Login() {
  return (
    <>
    <h1 className='text-3xl text-center m-5 font-bold text-green-600'>Login into your Account</h1>
      <form action="" className='flex justify-center items-center bg-white p-2 md:p-5 border flex-column rounded-xl border-transparent'>
        <p className='text-2xl text-center font-bold text-green-400'>Login</p>
        <label htmlFor="email" className='flex flex-start w-full'>Email
        </label>
        <input className="border border-gray-300 rounded-xl w-100 p-2" type="email" name="email" id="email" placeholder='demo@gmail.com'/>
        <label htmlFor="password" className='flex flex-start w-full'>
          Password
        </label>
        <input className="border border-gray-300 rounded-xl w-100 p-2" type="password" name="password" id="password" placeholder='Enter your password'/>
        <button className='text-center font-bold p-2 bg-green-600 text-white w-full rounded-2xl'>Login</button>
        <button className='text-center p-2 w-full rounded-2xl'>Sign in With Google</button>
      </form>
    </>
  )
}
