import axios from "axios";

axios.defaults.baseURL = "https://ci-walkthrough-rest-0d3c72236631.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();