import axios from "axios";

const instance = axios.create({
  baseURL: 'https://truemusic-test.ru'
});
instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
export default instance