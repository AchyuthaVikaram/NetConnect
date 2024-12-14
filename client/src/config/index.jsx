import axios from "axios";

export const BASE_URL= 'https://netconnect-y2z3.onrender.com';
export const createServer= axios.create({
    baseURL:BASE_URL,
})