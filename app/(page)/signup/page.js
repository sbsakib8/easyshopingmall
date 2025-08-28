'use client'
import { FcGoogle } from "react-icons/fc";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';


function Signup() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setpassword] = useState('');
  const [showpassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { fullName, email, number, password });
  }

  return (
    <div className='flex justify-center items-center h-auto py-20 bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-[95%] md:w-[500px] lg:w-[600px] '>
        <h1 className='text-2xl font-medium mb-4'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='space-y-4 mt-16'>
          <div className=' '>
            <Box
              component="form"
             className=' w-full! space-y-4!'
              noValidate
              autoComplete="off"
            >
             <div className=' h-[60px] '>
               <TextField type='text' className=' w-full!' value={fullName} onChange={(e) => setFullName(e.target.value)} id="FullName" label="FullName" variant="outlined" required/>
             </div>
             <div className=' h-[60px] '>
               <TextField type='email' className=' w-full!' value={email} onChange={(e) => setEmail(e.target.value)} id="email" label="Email" variant="outlined" required  />
             </div>
             <div className=' h-[60px] '>
               <TextField type='text' className=' w-full!' value={number} onChange={(e) => setNumber(e.target.value)} id="number" label="Number" variant="outlined" required />
             </div>
             <div className=' h-[60px] relative'>
                           <TextField type={showpassword ? 'text' : 'password'} className=' w-full!' value={password} onChange={(e) => setpassword(e.target.value)} id="password" label="Password" variant="outlined" required/>
                           <div onClick={() => setShowPassword(!showpassword)} className='absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer text-gray-500'>
                            {showpassword ? <FaRegEye className='text-xl'/> : <FaEyeSlash className='text-xl' />}
                           </div>
                   </div>
             

            </Box>


          </div>
          <button type='submit' className='w-full bg-primary-color text-white py-2 rounded-md hover:bg-[#609283] cursor-pointer transition duration-200'>Sign Up</button>

          <span className='flex justify-center items-center'>Or</span>
          
            
            <div type='button' className='w-full flex justify-center items-center  text-black border border-primary-color py-3 rounded-md hover:bg-gray-200 cursor-pointer transition-all duration-300 delay-200'>
              <FcGoogle className='text-2xl mr-2' />
              <button>Sign Up with Google</button>
            
          </div>
          <p className='text-center text-sm text-gray-600'>Already have an account? <a href='/signin' className='text-blue-600 hover:underline'>SignIn</a></p>
        </form>
      </div>
    </div>
  )
}

export default Signup