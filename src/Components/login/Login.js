import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Login() {
    const [emailId,setEmailId]=useState('');
    const [password,setPassword]=useState('');
    function handleLogin(){
if(emailId!==''&&password!==''){
    const req={
        emailId,
        password
                    }
                    console.log(req);
}
    }
  return (
    <div className='login-page'>
    <div className='login'>
        <h2>Login</h2>
        <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onBlur={(e)=>setEmailId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="passowrd" onBlur={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant='success' onClick={(e)=>handleLogin()}>Login</Button>
    </div>
    </div>
  )
}
