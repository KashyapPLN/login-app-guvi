import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleLogin() {
        if (emailId !== '' && password !== '') {
            const req = {
                emailId,
                password
            }
            console.log(req);
            fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            }).then(response => response.json())
                .then(data => {
                    localStorage.setItem("token",data.token);
                    localStorage.setItem("emailId",data.emailId);
                    alert(data.msg);
                    navigate('/profile');                  
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
    return (
        <div className='login-page'>
            <div className='login'>
                <h2>Login</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onBlur={(e) => setEmailId(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onBlur={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <a href="/register">Don't have an account? then Register</a>
                <Button variant='success' onClick={(e) => handleLogin()}>Login</Button>
            </div>
        </div>
    )
}
