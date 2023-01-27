import React from 'react';
import {ModalLayout} from '../../../../../app/layouts/modalLayout/ModalLayout';
import { AuthForm } from '../../../../../widgets/AuthForm';
import { useAuthRedirect } from '../../../../../app/hooks/useAuthRedirect';

export const SignIn = () => {
    useAuthRedirect()
    return (
        <ModalLayout>
            <AuthForm title='Вход' />
        </ModalLayout>
    );
};
