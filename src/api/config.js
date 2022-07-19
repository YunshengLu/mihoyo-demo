// 配置请求对象
import axios from 'axios';
export const baseUrl = 'http://localhost:3000';
// export const baseUrl = 'https://www.fastmock.site/mock/34068528d0ab010ea734437c0825fdc0/mihoyo';
const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
});

// 拦截器
// axiosInstance.interceptors.request.use(
//     req => {
//         console.log('开始请求....');
//         let localToken = '12345'
//         req.headers['Authorization'] =
//             'Bearer' + localToken
//         return req
//     },
//     err => {

//     }
// )
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误');
    }
)

export { axiosInstance };
