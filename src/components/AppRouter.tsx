import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import {
  AUTHOR,
  AUTHOR_ALBUM,
  AUTHOR_ALBUMS,
  AUTHOR_TRACK,
  HOME,
  LOGIN,
  REGISTER,
  USER_ALBUMS,
  USER_PLAYLISTS,
  USER_TRACKS
} from '../utils/routes';
import TracksAuthor from '../pages/author/tracks/Tracks';
import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import AlbumsAuthor from '../pages/author/albums/Albums';
import TracksUsers from '../pages/users/tracks/Tracks';
import AlbumsUsers from '../pages/users/albums/Albums';
import Playlist from '../pages/users/playlist/Playlist';
import AlbumPage from '../pages/author/albumPage/AlbumPage';
import TrackPage from '../pages/author/trackPage/TrackPage';

const AppRouter = () => (
  <Routes>
    <Route path={HOME} element={<Home />} />
    <Route path={LOGIN} element={<SignIn />} />
    <Route path={REGISTER} element={<SignUp />} />
    <Route path={AUTHOR} element={<TracksAuthor />} />
    <Route path={AUTHOR_ALBUMS} element={<AlbumsAuthor />} />
    <Route path={AUTHOR_ALBUM} element={<AlbumPage />} />
    <Route path={AUTHOR_TRACK} element={<TrackPage />} />
    <Route path={USER_TRACKS} element={<TracksUsers />} />
    <Route path={USER_ALBUMS} element={<AlbumsUsers />} />
    <Route path={USER_PLAYLISTS} element={<Playlist />} />
  </Routes>
);

export default AppRouter;
