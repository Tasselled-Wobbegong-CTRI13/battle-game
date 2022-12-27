import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth.jsx';

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth.username ? <Outlet /> : <Navigate to='/' />
    )
}

export default RequireAuth;