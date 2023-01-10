import axios from "axios";
import { BACKEND_BASE_URL } from "../api/api";

const client  = axios.create({
    baseURL: BACKEND_BASE_URL
})

export const request = ({...options}) => {
    const onSuccess = response => response
    const onError = error => {
        return error
    }
    return client(options).then(onSuccess).catch(onError)
}