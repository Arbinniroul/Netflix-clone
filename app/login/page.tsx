'use client';

import Input from '@/components/Input';
import React, { useCallback, useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState(''); 
  const [name, setName] = useState(''); 
  const [password, setPassword] = useState(''); 
  const[variant,setVariant] = useState('login');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here, like validation or API calls
    console.log("Form submitted with email:", email);
  };

  const toggleVariant=useCallback(()=>{
    setVariant((currentVariant)=>currentVariant==='login'?'register':'login')
  })

  
  return (
    <div className="relative h-full w-full bg-[url('/images/nbgimg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/nlogo.png" alt="logo" className="bg-transparent h-20" />
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl font-semibold">{variant==='login'?'Signin':'Register'}</h2>
              <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                {
                  variant==='register' && (
                    <Input 
                  id='name' 
                  label="Username" 
                  type='text' 
                  placeholder="" 
                  onChange={(e) => setName(e.target.value)} 
                  value={name} 
                />
                  )
                }

             
                <Input 
                  id='email' 
                  label="Email" 
                  type='email' 
                  placeholder="" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                />
                 <Input 
                  id='password' 
                  label="Password" 
                  type='password'   
                  placeholder="" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 transition  text-white font-semibold rounded-md mt-4"
                >
                  {
                    variant==='register'? 'Sign up' : 'Login'  
                  }
                  
                </button>
                <p className='text-neutral-500 mt-12'>
                  { variant==='login'?' First time using Netflix?':'Already have an account?'}
               
                <span className='text-white ml-1 hover:underline cursor-pointer' onClick={toggleVariant}>
                  {
                    variant==='login'? 'Create an account' : 'Login'
                  }
                 
                </span>
                </p>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Auth;
