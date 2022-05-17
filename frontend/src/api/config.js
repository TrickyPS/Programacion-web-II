import axiosInstance from "axios"
const API_VERSION = "v1";
const BASE_PATH = `http://localhost:5000/api/${API_VERSION}/`;
export const  axios = axiosInstance.create({baseURL:BASE_PATH,})
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";