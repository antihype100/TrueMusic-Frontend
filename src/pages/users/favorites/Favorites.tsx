import {BaseLayout} from '@app/layouts/baseLayout/BaseLayout';
import {MainPLayList} from '@widgets/MainPlaylist';

export const Favorites = () => (
    <BaseLayout>
        <MainPLayList target='FAVORITES'/>
    </BaseLayout>
);
