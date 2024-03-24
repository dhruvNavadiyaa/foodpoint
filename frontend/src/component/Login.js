import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';
import { setUserDetails } from '../redux/features/userSlice'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState("")
    const data = {
        email: email,
        password: password,
    }

    const getdata = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/user/signin', data,{ withCredentials: true});
            // console.log(response.data)
            if (response.data.login === true) {
                localStorage.setItem('resfreshToken', response.data.refreshToken);
                dispatch(setUserDetails(response.data))
                navigate('/Home')
            }
            else{
                setShowError("Email or Password is incorrect.")
            }

        } catch (error) {
            console.error('Error login !', error);
        }
    }
    const useinfo = useSelector(state => state.user)
    const handleSubmit = async (event) => {
        event.preventDefault();
        getdata()
        // console.log(useinfo)
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login to Your Account</h2>
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
                    <p className='text-danger'>{showError}</p>
                    <button type="submit">Log In</button>
                    <small className=''>Don't have account? <Link to={'/SignUp'}>Create One</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login;
