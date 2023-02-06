import {BaseLayout} from '@app/layouts/baseLayout/BaseLayout';
import {MainPLayList} from '@widgets/MainPlaylist';

export const Home = () => (
    <BaseLayout>
        <MainPLayList target='HOME'/>
    </BaseLayout>
);
