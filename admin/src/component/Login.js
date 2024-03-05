import React, { useEffect, useState } from 'react';
// import { UseDispatch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';
// import { setUserDetails } from '../redux/user/userSlice'

const Login = () => {

    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [details, setDetails] = useState({});

    const data = {
        email: email,
        password: password,
    }

    const getdata = async () => {
        // try {
            // // const response = await axios.post('http://localhost:5000/api/user/signin', data);
            // // console.log(details)
            // if (!response.data.loginUser) {
            //     alert("Pleas Enter valid detail!")
            // }
            // else {
            //     setDetails(response.data.loginUser)
            //     // console.log(details);
            //     // dispatch(setUserDetails(details))
            //     navigate('/')
            // }
        // } catch (error) {
        //     console.log('Error fetching data:');
        // }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // getdata()
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className='text-center'>Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='w-100 mt-2 py-2 btn btn-outline-danger'>Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
