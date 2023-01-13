import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import {
  AUTHOR_ALBUM, AUTHOR_MAIN,
  AUTHOR_PROFILE, AUTHOR_SETTING,
  AUTHOR_TRACK,
  HOME,
  LOGIN,
  REGISTER,
  USER_ALBUMS,
  USER_PLAYLIST,
  USER_TRACKS
} from "../utils/routes";
import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import TracksUsers from '../pages/users/tracks/Tracks';
import AlbumsUsers from '../pages/users/albums/Albums';
import Playlist from '../pages/users/playlist/Playlist';
import AlbumPage from '../pages/author/albumPage/AlbumPage';
import TrackPage from '../pages/author/trackPage/TrackPage';
import Profile from '../pages/author/profile/Profile';
import AuthorMainPage from "../pages/author/authorMainPage/AuthorMainPage";

const AppRouter = () => (
  <Routes>
    <Route path={HOME} element={<Home />} />

    <Route path={LOGIN} element={<SignIn />} />
    <Route path={REGISTER} element={<SignUp />} />

    <Route path={AUTHOR_PROFILE} element={<Profile />} />
    <Route path={AUTHOR_SETTING} element={<Profile />} />
    <Route path={AUTHOR_MAIN} element={<AuthorMainPage />} />
    <Route path={AUTHOR_TRACK} element={<TrackPage />} />
    <Route path={AUTHOR_ALBUM} element={<AlbumPage />} />


    {/* Страницы указаны некоректно */}
    {/* <Route path={AUTHOR_CABINET} element={<Profile />} /> */}
    <Route path={AUTHOR_PROFILE} element={<Profile />} />

    <Route path={USER_TRACKS} element={<TracksUsers />} />
    <Route path={USER_ALBUMS} element={<AlbumsUsers />} />
    <Route path={USER_PLAYLIST} element={<Playlist />} />
  </Routes>
);

export default AppRouter;
