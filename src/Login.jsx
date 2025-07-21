import React from 'react'
import { Link, Routes } from "react-router"


const Login = () => {

  

  function handleSubmit(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Email:", email);
    console.log("Password:", password);
  
  }

  return (
    <div className='flex flex-row justify-center gap-6 items-center h-screen'>

      <div>
        <div className='max-w-[150px] rounded-full flex items-center justify-center border-2 bg-gray-200  overflow-hidden max-h-[150px] w-[100px] h-[100px]'>
          <img src="/images/profile.jpg" className="logo rounded-full w-[70%] object-cover h-[70%] " alt="" />
        </div>
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <h2 className='font-semibold text-[20px]'>Member Login</h2>
        
      <form className='flex flex-col gap-3' action={handleSubmit}>
          <input className='bg-gray-100 p-2 rounded-xl shadow-sm' placeholder='Email' type="text" name="email" id="email" />
          <input placeholder='Password' className='bg-gray-100 p-2 shadow-sm rounded-xl mb-5' type="text" name='password' id='password' />
          <button  className='bg-green-500 p-2 rounded-lg text-white font-semibold cursor-pointer hover:opacity-70 '>LOGIN</button>
          {/* <Link to="/register">Register</Link> */}
        </form>

        <button className=''>Create your Account</button>

      </div>

      

    </div>
  )
}

export default Login