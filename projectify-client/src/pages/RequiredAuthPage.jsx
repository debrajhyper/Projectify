import { useEffect } from 'react';
import { useLocation, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { axiosPrivate, CURRENT_USER } from '../api/api';
import useAuth from '../hooks/useAuth';
import { LOGIN_LINK, UNAUTHORIZED_LINK } from '../routes/route';
import { getToken } from '../utils/localstorageItem';

const RequiredAuthPage = ({ allowedRoles }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const token = getToken();
    const { auth, user } = useAuth();
    
    // console.log("Context provider -> ", auth, user);
    return ( 
        auth?.isLoggedIn && auth?.roles?.find(role => allowedRoles?.includes(role?.authority))?.authority
        ? <Outlet /> 
        : auth?.email
            ? <Navigate to={UNAUTHORIZED_LINK} state={{ from: location }} replace />
            : <Navigate to={LOGIN_LINK} state={{ from: location }} replace />
    )
}

export default RequiredAuthPage