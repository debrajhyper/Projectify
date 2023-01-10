import axios from 'axios';

export const BACKEND_BASE_URL='http://localhost:5050';
export const GENERATE_TOKEN='/generate-token';

export default axios.create({
    baseURL: BACKEND_BASE_URL
})