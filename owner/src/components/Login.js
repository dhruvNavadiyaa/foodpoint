import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';
import { setRestroDetails } from '../redux/features/RestaurantSlice'
const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [details, setDetails] = useState({});
    const [error,setError] = useState()

    const data = {
        email: email,
        password: password,
    }

    const getdata = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/Restaurant/signin', data,{withCredentials:true});
            // console.log(response.data)
            // const id = response.data.RestaurantInfo._id;
            if (response.data.login === true) {
                if(!response.data.RestaurantInfo.bankDetail){
                    dispatch(setRestroDetails(response.data))
                    navigate('RestroDetails',{ state: { id: response.data.RestaurantInfo._id } })
                }
                else{
                    dispatch(setRestroDetails(response.data))
                    navigate('/Home');
                }
            }
            else {
                setError("Incorrect Email Id or Password!")
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
        <div className="login-page  d-flex">
            <div className="login-container px-5 py-3 border rounded rounded-3" >
                <h2 className='fs-2 text-center fw-bold text-secondary'>Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2 mt-4">
                        <p className='mb-0'>Email</p>
                        <input
                            type="email"
                            id="email"
                            className='w-100 py-1 ps-2 '
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <p className='mb-0'>Password</p>
                        <input
                            type="password"
                            id="password"
                            className='w-100 py-1 ps-2'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <p className='mb-0 text-danger'>{error}</p>
                    <button type="submit" className='w-100 mt-3 mb-2 btn btn-outline-danger'>Log In</button>
                    <small className=''>Don't have account? <Link to={'/SignUp'}>Create One</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login;
