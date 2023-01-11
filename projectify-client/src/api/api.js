import axios from 'axios';
import { getToken, removeToken } from '../utils/localstorageItem';
import jwtDecode from 'jwt-decode';
export const BACKEND_BASE_URL='http://localhost:5050';
export const GENERATE_TOKEN='/generate-token';
export const CURRENT_USER='/current-user';

const TOKEN_HEADER = 'Authorization';
// export const JWT_TOKEN = 'jwtToken';

export const config = {
    headers: {
        'content-type': 'multipart/form-data; boundary=<calculated when request is sent>'
    }
}

export default axios.create({
    baseURL: BACKEND_BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BACKEND_BASE_URL
});

// axiosPrivate.defaults.headers.common[TOKEN_HEADER] = `Bearer ${jwtToken}`;
axiosPrivate.interceptors.request.use(config => {
    const jwtToken = getToken();
    
    const verify = verifyToken(jwtToken);
    if(verify) {
        config.headers[TOKEN_HEADER] = `Bearer ${jwtToken}`;
    }
    else {
        removeToken();
    }
    
    return config;
});

export const verifyToken = jwtToken => {
    if(jwtToken === undefined || jwtToken === null) {
        return false;
    }
    const expires_at = new Date(jwtDecode(jwtToken).exp * 1000);
    return (new Date(expires_at) > new Date()) ? true : false;
}