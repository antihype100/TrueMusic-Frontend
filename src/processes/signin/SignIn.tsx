import React from 'react';
import ModalLayout from '../../app/layouts/modalLayout/ModalLayout';
import { AuthForm } from '../../features/AuthForm';
import { useAuthRedirect } from '../../shared/hooks/useAuthRedirect';

const SignIn = () => {
    useAuthRedirect()
    return (
        <ModalLayout>
            <AuthForm title='Вход' />
        </ModalLayout>
    );
};

export default SignIn;
