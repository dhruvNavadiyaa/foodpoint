import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';

const Login = () => {

    const navigate = useNavigate()
    const mobileNumberRegex = /^\d{10}$/;
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        emailExist: "",
        number: "",
        password:""
    });

    const data = {
        name: name,
        email: email,
        password: password,
        number: number
    }

    const sendData = async () => {
        try {
            // setError('')
            const response = await axios.post('http://localhost:5000/api/Restaurant/signup', data);
            // console.log(response.data)
            if (response.data.success) {
                navigate('/')
            }
            else {
                setError({emailExist: "Email is already in exist" })
            }   
        } catch (error) {
            console.log('Error fetching data:',error);
        }
    }

    // VALIDATION OF FORM
    const validateForm=()=>{
        let newErrors = {};

        if (!mobileNumberRegex.test(number)) {
            newErrors.number = "Please enter valid Number!";
        }
        if(password.length < 3){
            newErrors.password = "Password must be More than 3 Characters!";
        }
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isvalid = validateForm();
        if(isvalid){
            sendData()
            // console.log(data)
        }
        else{
            console.log("form validation failed!")
        }
    };

    return (
        <div className="login-page d-flex">
            <div className="login-container px-5 py-3 border rounded rounded-3">
                <h4 className='fs-2 text-center fw-bold text-secondary'>Register new Restaurant</h4>
                <form onSubmit={handleSubmit}>

                    <div className="mb-2">
                        <p className='mb-0'>Owner Name</p>
                        <input
                            type="text"
                            id="name"
                            className='w-100 border border-1 border-secondary rounded p-2'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <p className='mb-0'>Mobile Number</p>
                        <input
                            type="text"
                            id="number"
                            className='w-100 border border-1 border-secondary rounded p-2'
                            value={number}
                            onChange={(e) => { setNumber(e.target.value) }}
                            maxLength={10}
                            required
                        />
                    </div>
                    <p className='text-danger'>{error.number}</p>
                    <div className="mb-2">
                        <p className='mb-0'>Email</p>
                        <input
                            type="email"
                            id="email"
                            className='w-100  border border-1 border-secondary rounded p-2'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <p className='text-danger'>{error.emailExist}</p>
                    <div className="mb-2">
                        <p className='mb-0'>Password</p>
                        <input
                            type="password"
                            id="password"
                            className='w-100 border border-1 border-secondary rounded p-2'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <p className='text-danger'>{error.password}</p>
                    <button type="submit" className='w-100 mt-3 '>Sign Up</button>
                    <small>If you have account! <Link to={'/'}>Login</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login;
