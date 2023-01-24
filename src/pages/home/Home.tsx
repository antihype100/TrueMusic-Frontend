import { SignInUpButtons } from '../../features/AuthButton';
import BaseLayout from '../../app/layouts/baseLayout/BaseLayout';
import { useUserInfoStore } from '../../entities/User/model/UserInfoStore';
import { ProfileButton } from '../../entities/ProfileButton/ProfileButton';
import { MainPLayList } from '../../widgets/MainPlaylist';

export const Home = () => {

    const { auth } = useUserInfoStore((state) => state);

    return (
        <BaseLayout>
            <MainPLayList/>
            {auth ? <ProfileButton /> : <SignInUpButtons />}
        </BaseLayout>
    );
};
