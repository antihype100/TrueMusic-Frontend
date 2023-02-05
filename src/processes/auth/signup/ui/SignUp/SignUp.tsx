import {ModalLayout} from '@app/layouts/modalLayout/ModalLayout';
import {useAuthRedirect} from '@app/hooks/useAuthRedirect';
import {AuthForm} from '@widgets/AuthForm';

export const SignUp = () => {
    useAuthRedirect();
    return (
        <ModalLayout>
            <AuthForm title='Регистрация'/>
        </ModalLayout>
    );
};

