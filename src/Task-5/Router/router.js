import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouterLayout from './RouterLayout/RouterLayout';
import LoginPage from '../Pages/LoginPage';
import RegistrationPage from '../Pages/RegistrationPage';
import StaffPage from '../Pages/StaffPage';
import HODpage from '../Pages/HODpage';
import LeaveDetails from '../Pages/LeaveDetails';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RouterLayout />}>
            <Route index element={<LoginPage />} />
            <Route path='RegistrationPage' element={<RegistrationPage />} />
            <Route path='staffPage' element={<StaffPage />} />
            <Route path='staffPage/leaveDetails' element={<LeaveDetails />} />
            <Route path='HODpage' element={<HODpage />} />
        </Route>
    )
);

