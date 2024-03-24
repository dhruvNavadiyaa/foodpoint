import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';

const Login = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState('');

    const data = {
        name: name,
        email: email,
        password: password,
        number: number
    }

    const sendData = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/delivery/signup', data);
            if(response.data.success) {
                navigate('/')    
            }
            else{
                setValid('Email alredy exist!')
            }
        } catch (error) {
            console.log('Error fetching data:',error);
        }
        // console.log(data)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password.length < 4) {
            setValid('Password should be more than 3 letters!')
        }
        else {
            sendData()
        }
    };

    return (
        <div className="login-page d-flex">
            <div className="login-container px-5 py-3 border rounded rounded-3">
                <h4 className='fs-2 text-center fw-bold text-secondary'>Register new Deliver Partner</h4>
                <form onSubmit={handleSubmit}>

                    <div className="mb-2">
                        <p className='mb-0'>Person Name</p>
                        <input
                            type="text"
                            id="name"
                            className='w-100'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <p className='mb-0'>Mobile Number</p>
                        <input
                            type="number"
                            id="number"
                            className='w-100'
                            value={number}
                            onChange={(e) => { setNumber(e.target.value) }}
                            maxLength={10}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <p className='mb-0'>Email</p>
                        <input
                            type="email"
                            id="email"
                            className='w-100'
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
                            className='w-100'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <small className='text-danger'>{valid}</small>
                    <button type="submit" className='btn btn-primary w-100 mt-3 '>Sign Up</button>
                    <small>If you have account! <Link to={'/'}>Login</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login;
