import axios, { GENERATE_TOKEN } from '../api/api';

export const loginRequest = async ({email, password}) => {
    return await axios.post(GENERATE_TOKEN, {email, password})
}