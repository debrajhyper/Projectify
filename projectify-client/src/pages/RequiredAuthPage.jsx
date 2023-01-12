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
    const { auth } = useAuth();

    // useEffect(() => {
    //     axiosPrivate.get(CURRENT_USER)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // }, [token])

    // useEffect(() => {
    //     if(isLoggedIn) {
    //         dispatch(getCurrentUser());
    //     }
    // }, [isLoggedIn, dispatch]);
    
    // useEffect(() => {
    //     if(!token) {
    //         navigate(LOGIN_LINK)
    //     } 
    // }, [token]);

    
    console.log(auth);
    return ( 
        token && auth?.roles?.find(role => allowedRoles?.includes(role?.authority))?.authority
        ? <Outlet /> 
        : auth?.email
            ? <Navigate to={UNAUTHORIZED_LINK} state={{ from: location }} replace />
            : <Navigate to={LOGIN_LINK} state={{ from: location }} replace />
    )
}

export default RequiredAuthPage