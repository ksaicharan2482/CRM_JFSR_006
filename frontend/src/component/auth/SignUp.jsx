import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="wrapper signUp border-0 w-full mx-auto flex justify-center items-center">
                <div className="form border-1 rounded-2xl bg-slate-200">
                  <div className="heading">Sign Up</div>
                  <form>
                    <div>
                      <label htmlFor="name" className='font-semibold'>Name</label>
                      <input type="text" id="name" placeholder="Enter your name" className='outline-0' />
                    </div>
                    <div>
                      <label htmlFor="name" className='font-semibold'>Email</label>
                      <input type="text" id="name" placeholder="Enter your mail" className='outline-0' />
                    </div>
                    <div>
                      <label htmlFor="password" className='font-semibold'>Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className='outline-0'
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className='font-semibold'>Confirm Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter your confirm password"
                        className='outline-0'
                      />
                    </div>
                    <button type="submit" className='cursor-pointer'>Submit</button>
                    <h2 align="center" className="or">
                      OR
                    </h2>
                  </form>
                  <p className='flex justify-center text-2xl'>
                     Have an account ? <Link to="SignUp" className='font-semibold'> Sign In </Link>
                  </p>
                </div>
              </div>
  );
}

export default SignUp
