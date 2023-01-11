import axios, { GENERATE_TOKEN } from '../api/api';

export const loginRequest = async ({email, password}) => {
    const credentials = {
        username: email,
        password: password
    };
    console.log("credentials", credentials)
    return await axios.post(GENERATE_TOKEN, credentials)
    .then(res => res.data);
}