import axios from "axios";
import {BASE_URL} from '../../../config'

const instance = axios.create({
  baseURL: BASE_URL
});
instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
export default instance