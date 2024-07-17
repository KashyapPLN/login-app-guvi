import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './profile.css';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    dob: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.age && formData.mobile && formData.dob && formData.gender) {
      console.log(formData);
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div className='profile-page'>
        <div className='logout'>
              <Button variant='text'>logout</Button>
              </div>
       <div className='profile'>
        <h2>Profile</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="age" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="mobile number" 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            id='inline-radio-1'
            value="male"
            onChange={handleChange}
            required 
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            id='inline-radio-2'
            value="female"
            onChange={handleChange}
            required 
          />
        </Form.Group>
        <Button variant='primary' onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
