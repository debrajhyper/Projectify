import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { LOGIN_LINK } from '../routes/route';

const RequiredAuthPage = ({isLoggedIn}) => {
    const location = useLocation();
    // let isLoggedIn = localStorage.getItem('isLoggedIn');

    return isLoggedIn?.login ? <Outlet /> : <Navigate to={LOGIN_LINK} state={{ from: location }} replace />
}

export default RequiredAuthPage