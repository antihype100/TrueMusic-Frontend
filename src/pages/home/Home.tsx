import { useUserInfoStore } from '../../entities/User';
import { SignInUpButtons } from '../../shared/ui/AuthButton';
import { BaseLayout } from '../../app/layouts/baseLayout/BaseLayout';
import { ProfileButton } from '../../shared/ui/ProfileButton/ProfileButton';
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
