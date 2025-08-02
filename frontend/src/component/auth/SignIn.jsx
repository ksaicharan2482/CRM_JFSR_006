import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const SignIn = () => {
  return (
      <div className="wrapper signUp border-0 w-full mx-auto flex justify-center items-center">
            <div className="form border-1 rounded-2xl bg-slate-200">
              <div className="heading">Sign In</div>
              <form>
                <div>
                  <label htmlFor="name" className='font-semibold'>Email</label>
                  <input type="text" id="name" placeholder="Enter your Email" className='outline-0' />
                </div>
                <div>
                  <label htmlFor="password" className='font-semibold'>Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter you password"
                    className='outline-0'
                  />
                </div>
                <button type="submit" className='cursor-pointer'>Submit</button>
                <h2 align="center" className="or">
                  OR
                </h2>
              </form>
              <p className='flex justify-center text-2xl'>
                 Don't have an account ?  <Link to="SignUp" className='font-semibold'> Sign Up </Link>
              </p>
            </div>
          </div>
  )
}

export default SignIn
