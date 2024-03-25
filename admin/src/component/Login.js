import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';
import { setAdminDetails } from '../redux/features/AdminSlice'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [details, setDetails] = useState("");

   

    const getdata = async () => {
        const data = {
            email: email,
            password: password,
        }
        try {
            setDetails('')
            const response = await axios.post('http://localhost:5000/api/admin/signin', data,{withCredentials:true});
            if (response.data.login === true) {
                dispatch(setAdminDetails(response.data))
                navigate('/Dashboard')
            }
            else {
                console.log(response.data)
                setDetails("Your Email Id and Password are incorrect!")
            }
        } catch (error) {
            console.log('Error fetching data:' , error);
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        getdata()
        // console.log(details)
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
                    <p className='text-danger'>{details}</p>
                    <button type="submit" className='w-100 mt-2 py-2 btn btn-outline-danger'>Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
