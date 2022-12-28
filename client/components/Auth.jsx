import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth.jsx';

const RequireAuth = ( { children } ) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        // auth.username ? children : <Navigate to='/' />
        children
    )

}

export default RequireAuth;