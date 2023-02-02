import axios from "./axios";

export const checkAuth = (
    setAuth: (isAuth: boolean) => void,
    setRole: (role: string) => void,
    setUserName: (userName: string) => void,
) => {
    axios.post('/user/refresh', { reload: true }, { withCredentials: true }).then((res) => {
        if (res.data.isLogin) {
            setAuth(true);
            setRole(res.data.user.role);
            setUserName(res.data.user.userName);
        }
    });
}