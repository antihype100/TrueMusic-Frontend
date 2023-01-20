import axios from 'axios/index';
import type { IFormValues } from '../components/authForm/AuthForm';

const baseUrl = 'http://localhost:5000';

export const register = (data: any) => {
  axios.post<IFormValues>(`/user/register`, data).then((res) => console.log(res));
};

export const login = (data: IFormValues) => {
  axios.post<IFormValues>(`/user/login`, data).then((res) => console.log(res));
};
