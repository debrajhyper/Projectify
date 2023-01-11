import { useEffect } from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { axiosPrivate, CURRENT_USER } from '../api/api';
import { LOGIN_LINK } from '../routes/route';
import { getToken } from '../utils/localstorageItem';

const RequiredAuthPage = () => {
    const location = useLocation();
    const token = getToken();

    useEffect(() => {
        axiosPrivate.get(CURRENT_USER)
        .then(res => {
            console.log(res.data)
        })
    }, [token])
    
    return token ? <Outlet /> : <Navigate to={LOGIN_LINK} state={{ from: location }} replace />
}

export default RequiredAuthPage