import React from 'react';
import ModalLayout from '../../app/layouts/modalLayout/ModalLayout';
import { AuthForm } from '../../features/AuthForm/ui/AuthForm';
import { useAuthRedirect } from '../../shared/hooks/useAuthRedirect';

const SignUp = () => {
    useAuthRedirect();
    return (
        <ModalLayout>
            <AuthForm title='Регистрация' />
        </ModalLayout>
    );
};

export default SignUp;
