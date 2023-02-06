import {
    AUTHOR_ALBUM,
    AUTHOR_MAIN,
    AUTHOR_PROFILE,
    AUTHOR_SETTING,
    AUTHOR_TRACK,
    HOME,
    LOGIN,
    REGISTER,
    RELEASE,
    USER_PLAYLIST,
    RELEASE_UPLOAD_TRACK,
    USER_SETTING, USER_SWITCH_TO_AUTHOR, USER_FAVORITES,
} from '@shared/helper/routes';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '@pages/home/Home';
import { SignIn } from '@processes/auth/signin';
import { SignUp } from '@processes/auth/signup';
import { Playlist }from '@pages/users/playlist';
import { AlbumPage } from '@pages/author/albumPage';
import { TrackPage } from '@pages/author/trackPage';
import { Profile } from '@pages/profile/Profile';
import { AuthorMainPage } from '@pages/author/authorMainPage';
import { CreateRelease } from '@processes/release/CreateRelease';
import { UploadTrack } from '@processes/release/UploadTrack';
import {checkAuth} from "@shared/api/check_auth";
import {SwitchToAuthor} from "@processes/switchToAuthor/ui/SwitchToAuthor";
import {Favorites} from "@pages/users/favorites/Favorites";
import { useUserInfoStore } from '@entities/User';

const AppRouter = () => {
    const { setAuth, setRole, setUserName, auth } = useUserInfoStore((state) => state);

    useEffect(() => {
        checkAuth(setAuth, setRole, setUserName)
    }, [auth]);

    return (
        <Routes>
            <Route path={HOME} element={<Home />} />

            <Route path={LOGIN} element={<SignIn />} />
            <Route path={REGISTER} element={<SignUp />} />

            <Route path={AUTHOR_PROFILE} element={<Profile />} />
            <Route path={AUTHOR_SETTING} element={<Profile />} />
            <Route path={AUTHOR_MAIN} element={<AuthorMainPage />} />
            <Route path={AUTHOR_TRACK} element={<TrackPage />} />
            <Route path={AUTHOR_ALBUM} element={<AlbumPage />} />

            <Route path={RELEASE} element={<CreateRelease />} />
            <Route path={RELEASE_UPLOAD_TRACK} element={<UploadTrack />} />

            <Route path={USER_SETTING} element={<Profile />} />
            <Route path={USER_FAVORITES} element={<Favorites />} />
            <Route path={USER_PLAYLIST} element={<Playlist />} />
            <Route path={USER_SWITCH_TO_AUTHOR} element={<SwitchToAuthor/>} />
        </Routes>
    );
};

export default AppRouter;
