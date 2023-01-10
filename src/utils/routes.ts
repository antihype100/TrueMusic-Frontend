export const HOME = '/';

export const LOGIN = '/signin';
export const REGISTER = '/signup';

export const AUTHOR = '/author/:name/tracks';
export const AUTHOR_CABINET = '/author/personal-cabinet';
export const AUTHOR_TRACK = '/author/:name/tracks/:name';
export const AUTHOR_TRACKS = '/author/:name/tracks';
export const AUTHOR_ALBUMS = '/author/:name/albums';
export const AUTHOR_ALBUM = '/author/:name/albums/:name';
export const AUTHOR_ABOUT = '/author/:name/about';

export const PROFILE = '/myprofile/:name';
export const RELEASE = '/myprofile/:name/release-design';

export const USER = '/users/:name';
export const USER_TRACKS = '/users/:name/tracks';
export const USER_ALBUMS = '/users/:name/albums';
export const USER_PLAYLISTS = '/users/:name/playlists';
export const USER_PLAYLIST = '/users/:name/playlists/:name';

export const PUBLIC_ROUTE = [
  { path: HOME, Component: '' },
  { path: LOGIN, Component: '' },
  { path: REGISTER, Component: '' },
  { path: AUTHOR, Component: '' }
];