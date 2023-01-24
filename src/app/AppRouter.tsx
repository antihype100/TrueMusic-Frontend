import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Home } from '../pages/home/Home';
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
    USER_ALBUMS,
    USER_PLAYLIST,
    USER_TRACKS,
    RELEASE_UPLOAD_TRACK,
    USER_SETTING,
} from '../shared/helper/routes';
import SignIn from '../processes/signin/SignIn';
import SignUp from '../processes/signup/SignUp';
import TracksUsers from '../pages/users/tracks/Tracks';
import AlbumsUsers from '../pages/users/albums/Albums';
import Playlist from '../pages/users/playlist/Playlist';
import AlbumPage from '../pages/author/albumPage/AlbumPage';
import { TrackPage } from '../pages/author/trackPage/TrackPage';
import { Profile } from '../pages/profile/Profile';
import AuthorMainPage from '../pages/author/authorMainPage/AuthorMainPage';
import { CreateRelease } from '../processes/release/CreateRelease';
import { UploadTrack } from '../processes/release/UploadTrack/ui/UploadTrack';
import { useUserInfoStore } from '../entities/User/model/UserInfoStore';

const AppRouter = () => {
    const { setAuth, setRole, setUserName, auth } = useUserInfoStore((state) => state);
    useEffect(() => {
        axios.post('http://localhost:5000/user/refresh', { reload: true }, { withCredentials: true }).then((res) => {
            if (res.data.isLogin) {
                setAuth(true);
                setRole(res.data.user.role);
                setUserName(res.data.user.userName);
            }
        });
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
            <Route path={USER_TRACKS} element={<TracksUsers />} />
            <Route path={USER_ALBUMS} element={<AlbumsUsers />} />
            <Route path={USER_PLAYLIST} element={<Playlist />} />
        </Routes>
    );
};

export default AppRouter;
