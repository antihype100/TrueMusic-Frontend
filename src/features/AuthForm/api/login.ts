import axios from '../../../shared/helper/axios';
import {IAuthFormValues } from '../model/types';


export const loginPost = (data: IAuthFormValues,
                             setAuth: (auth: boolean) => void,
                             setRole: (role: string) => void,
                             setUserName: (userName: string) => void) => {
    axios.post('/user/login', data, { withCredentials: true }).then((res) => {
        if (res.data.isLogin) {
            setAuth(true);
            console.log(res.data.user.role);
            setRole(res.data.user.role);
            setUserName(res.data.user.userName);
        }
    });
}