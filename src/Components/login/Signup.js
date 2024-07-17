import React, { useState } from 'react';
import './register.css';
import { Button, Form } from 'react-bootstrap';

export default function Signup() {
    const [emailId,setEmailId]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    function handleSignUp(){
        if(password!==''&& confirmPassword!=='' && password===confirmPassword){
            const req={
                emailId,
                password
                            }
                            console.log(req);
        }else{
            alert("password doesn't match");
        }
    }

    function validatePwd(e){
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        
        const minLength = 8;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

        let message = '';
        if (inputPassword.length < minLength) {
          message = `Password must be at least ${minLength} characters long.`;
        } else if (!hasNumber.test(inputPassword)) {
          message = 'Password must include at least one number.';
        } else if (!hasSpecialChar.test(inputPassword)) {
          message = 'Password must include at least one special character.';
        }

        if (message) {
          alert(message);
        }
       
    }
  return (
    <div className='signup-page'>
        <div className='signup'>
        <h2>Signup</h2>
        <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onBlur={(e)=>setEmailId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="passowrd" onBlur={(e)=>validatePwd(e)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="confirm passowrd" onBlur={(e)=>setConfirmPassword(e.target.value)}/>
      </Form.Group>
      <Button variant='primary' onClick={handleSignUp}>Signup</Button>
      </div>
        </div>
  )
}
