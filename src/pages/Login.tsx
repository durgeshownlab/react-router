import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserThunk } from '../state/authSlice';
import type { AppDispatch, RootState } from '../state/store';
import { useSelector } from 'react-redux';


const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const isAuthenticated = useSelector((state: RootState)=>state.auth.isAuthenticated)

  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault()
    try {
      await dispatch(loginUserThunk({email, password}));
      navigate("/dashboard")
    } catch (error: any) {
      setError("Login failed, please try again")
    }
  }

  useEffect(()=>{
    if(isAuthenticated) {
      navigate("/dashboard")
    }
  }, [isAuthenticated, navigate])



  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <input 
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
          required
        />

        <input 
          type='password'
          placeholder='Email'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}
          required
        />

        {error && <p style={{color: "red"}} >{error}</p>}

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
