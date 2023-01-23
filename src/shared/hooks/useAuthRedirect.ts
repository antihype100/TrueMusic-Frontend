import { useUserInfoStore } from '../../entities/User/model/UserInfoStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { HOME } from '../helper/routes';

export const useAuthRedirect = () => {
    const { auth } = useUserInfoStore((state) => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            navigate(HOME);
        }
    }, [auth]);
}