import axios from "axios";

axios.defaults.baseURL = "https://bakers-drfapi-f4c1c693be28.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();