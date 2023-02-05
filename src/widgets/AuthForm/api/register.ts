import axios from '../../../shared/api/axios';
import {IAuthFormValues} from '../model/types';


export const registerPost = (
    data: IAuthFormValues,
    setAuth: (auth: boolean) => void,
    setRole: (role: string) => void,
    setUserName: (userName: string) => void,
    setUserId: (userId: number) => void
) => {
    axios.post(
        '/user/register',
        data,
        {
            withCredentials: true,
        }
    ).then((res) => {
        if (res.data.isLogin) {
            setAuth(true);
            setRole(res.data.user.role);
            setUserName(res.data.user.userName);
            setUserId(res.data.user.id)
            localStorage.setItem('accessToken', res.data.accessToken)
        }
    });
}