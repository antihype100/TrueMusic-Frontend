export const HOME = '/';

export const LOGIN = '/signin';
export const REGISTER = '/signup';

export const AUTHOR_SETTING = '/author/:name';
export const AUTHOR_PROFILE = '/author/:name/profile';
export const AUTHOR_MAIN = '/author/:name/authorMainPage';
export const AUTHOR_TRACK = '/author/:name/tracks/:trackName';
export const AUTHOR_ALBUM = '/author/:name/albums/:albumName';
export const AUTHOR_CABINET = '/:name';

export const RELEASE = '/:name/release-design';
export const RELEASE_UPLOAD_TRACK = '/:name/upload-track';

export const USER_SETTING = '/user/:name';
export const USER_TRACKS = '/user/:name/tracks';
export const USER_ALBUMS = '/user/:name/albums';
export const USER_PLAYLISTS = '/user/:name/playlists';
export const USER_PLAYLIST = '/user/:name/playlists/:playlistName';

// export const PUBLIC_ROUTES = [
//   { path: LOGIN, Component: SignIn },
//   { path: REGISTER, Component: SignUp },
//   { path: AUTHOR, Component: TracksAuthor },
//   { path: AUTHOR_ALBUMS, Component: AlbumsAuthor },
//   { path: USER_TRACKS, Component: TracksUsers },
//   { path: USER_ALBUMS, Component: AlbumsUsers },
//   { path: USER_PLAYLISTS, Component: Playlist }
// ];
