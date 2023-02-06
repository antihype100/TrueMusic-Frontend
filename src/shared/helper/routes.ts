export const HOME = '/';

export const LOGIN = '/signin';
export const REGISTER = '/signup';

export const AUTHOR_SETTING = '/author/:name';
export const AUTHOR_PROFILE = '/author/:name/profile';
export const AUTHOR_MAIN = '/author/:name/authorMainPage';
export const AUTHOR_TRACK = '/author/:name/tracks/:trackName';
export const AUTHOR_ALBUM = '/author/:name/albums/:albumName';
export const AUTHOR_CABINET = '/:name';

export const RELEASE = '/release-design/';
export const RELEASE_UPLOAD_TRACK = '/upload-Track';

export const USER_SETTING = '/my-profile';
export const USER_FAVORITES = '/user/favorites';
export const USER_PLAYLIST = '/user/:name/playlists/:playlistName';
export const USER_SWITCH_TO_AUTHOR = '/user/switch-to-author';

// export const PUBLIC_ROUTES = [
//   { path: LOGIN, Component: SignIn },
//   { path: REGISTER, Component: SignUp },
//   { path: AUTHOR, Component: TracksAuthor },
//   { path: AUTHOR_ALBUMS, Component: AlbumsAuthor },
//   { path: USER_TRACKS, Component: TracksUsers },
//   { path: USER_ALBUMS, Component: AlbumsUsers },
//   { path: USER_PLAYLISTS, Component: TrackList }
// ];
