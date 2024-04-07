import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import '../css/Login.css';

const Login = () => {
    
    const mobileNumberRegex = /^\d{10}$/;
    const navigate = useNavigate()
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

    //SIGN IN API CALL
    const sendData = async () => {
        try {
            setError('')
            const response = await axios.post('http://localhost:5000/api/user/signup', data);
            console.log(response.data)
            if (response.data.success) {
                navigate('/')
            }
            else {
                setError({emailExist: "Email is already in exist" })
            }

        } catch (error) {
            console.log('Error fetching data:');
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

    // SUBMIT BUTTON HANDLE FUNCTION
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
        <div className="login-page">
            <div className="login-container">
                <h2>Register new User</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Mobile Number</label>
                        <input
                            type="text"
                            maxLength={10}
                            id="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    </div>
                    <p className='text-danger'>{error.number}</p>
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
                    <p className='text-danger'>{error.emailExist}</p>
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
                    <p className='text-danger'>{error.password}</p>
                    <button type="submit" disabled={name === '' || number === '' || email === '' || password === ''}>SIgn Up</button>
                    <small>If you have account! <Link to={'/'}>Login</Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login;
