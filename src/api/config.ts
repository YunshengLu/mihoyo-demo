import axios from "axios";

export const baseURL = "http://localhost:8080";

// axios 实例及拦截配置
const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误');
    }
)

export {axiosInstance}