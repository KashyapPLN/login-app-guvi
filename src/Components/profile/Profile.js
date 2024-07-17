import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './profile.css';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        emailId:localStorage.getItem("emailId"),
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

    useEffect(()=>{
             fetch(`http://localhost:4000/user-data/${localStorage.getItem("emailId")}`, {
                 headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(data => {
                    setFormData({
                        name:data.name,
                        age:data.age,
                        mobile:data.mobile,
                        dob:data.dob,
                        gender:data.gender
                    })
                                    })
                .catch(error => {
                    console.error('Error:', error);
                });
    },[])

    const handleSubmit = () => {
        if (formData.name && formData.age && formData.mobile && formData.dob && formData.gender) {
            console.log(formData);
            fetch('http://localhost:4000/user-data', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => response.json())
                .then(data => {
                    alert(data.msg);
                                    })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            alert('Please fill in all the fields');
        }
    };
function handleLogout(){
    localStorage.clear();
    navigate('/login');
}
    return (
        <div className='profile-page'>
            <div className='logout'>
                <Button style={{fontWeight:500,fontSize:"1vw"}} variant='text' onClick={handleLogout}>logout</Button>
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
