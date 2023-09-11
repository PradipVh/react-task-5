import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationPage() {

    const navigate = useNavigate();
    const [userType, setUserType] = useState('staff');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [department, setDepartment] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = (event) => {
        event.preventDefault();

        const userData = {
            userType,
            firstName,
            lastName,
            email,
            contact,
            department,
            username,
            password,
        };

        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        registeredUsers.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        navigate('/'); // Redirect back to login page after registration
    };


    return (
        <div className='container'>
            <form className='col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 shadow p-4' onSubmit={handleRegister}>
                <div className='form-group'>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={() => setUserType('hod')}
                            className="form-check-input form-control"
                            type="radio"
                            name="userType"
                            id="hod"
                            checked={userType === 'hod'}
                        />
                        <label className="form-check-label" htmlFor="hod">
                            HOD
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={() => setUserType('staff')}
                            className="form-check-input form-control"
                            type="radio"
                            name="userType"
                            id="staff"
                            checked={userType === 'staff'}
                        />
                        <label className="form-check-label" htmlFor="staff">
                            Staff
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input onChange={(e) => setFirstName(e.target.value)} type="text" class="form-control" required />
                    </div>
                    <div class="col-md-6 form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input onChange={(e) => setLastName(e.target.value)} type="text" class="form-control" required />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="inputEmail4" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="contact">Contact</label>
                        <input onChange={(e) => setContact(e.target.value)} type="number" class="form-control" id="contact" required />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="department">Department</label>
                        <select onChange={(e) => setDepartment(e.target.value)} id="department" class="form-control" required>
                            <option selected>Select Department</option>
                            <option >Sports</option>
                            <option>Administration</option>
                            <option>Accounts</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" id="username" required />
                    </div>

                    <div class="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="password" required />
                    </div>
                </div>
                    <button to={-1}  style={{ backgroundColor: 'blue'}}  type='submit' className='my-3 btn btn-primary col-sm-12'>
                        Register
                    </button>

                <div className='col-sm-10 offset-sm-3'>
                    <span>
                        Already Registered?{' '}
                        <a onClick={() => navigate('/')} className='ml-4 text-primary' href='##javascript'>
                            Login
                        </a>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default RegistrationPage;
