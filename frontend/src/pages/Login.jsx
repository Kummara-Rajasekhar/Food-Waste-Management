import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { backendurl, token, setToken } = useContext(AppContext);
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const [res, setres] = useState('Receiver');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserType(e.target.value);
  };
  
``
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(`${backendurl}/api/user/register`, {
          name,
          email,
          password,
          userType,
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendurl}/api/user/login`, {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);


  return state && (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'}</p>

        {state === 'Sign Up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {(state === 'Sign Up' || state==='Login') && (
          <div>
            <h3 className="mb-3 font-bold">Are you a Donor or Receiver?</h3>
            <div className="mb-2">
              <input
                type="radio"
                id="donor"
                name="userType"
                value="Donor"
                checked={userType === 'Donor'}
                onChange={handleChange}
              />
              <label htmlFor="donor" className="ml-2">
                Donor
              </label>
            </div>

            <div className="mb-4">
              <input
                type="radio"
                id="receiver"
                name="userType"
                value="Receiver"
                checked={userType === 'Receiver'}
                onChange={handleChange}
              />
              <label htmlFor="receiver" className="ml-2">
                Receiver
              </label>
            </div>
          </div>
        ) 
      }


        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base" onClick={()=>navigate('/')}>
          {state === 'Sign Up'? 'Create account' : 'Login'}
        </button>

        {state === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className="text-primary underline cursor-pointer">
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{' '}
            <span onClick={() => setState('Sign Up')} className="text-primary underline cursor-pointer">
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
