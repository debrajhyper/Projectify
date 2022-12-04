import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { LOGIN_LINK } from '../routes/route';

const RequiredAuthPage = () => {
    const location = useLocation();
    const isLoggedIn = true;

    return isLoggedIn ? <Outlet /> : <Navigate to={LOGIN_LINK} state={{ from: location }} replace />
}

export default RequiredAuthPage