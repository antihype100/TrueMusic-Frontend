import { useUserInfoStore } from '../../entities/User';
import { SignInUpButtons } from '../../features/AuthButton';
import { BaseLayout } from '../../app/layouts/baseLayout/BaseLayout';
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
