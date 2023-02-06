import create from 'zustand';

interface INavLinkState {
    id: number,
    title: string,
    apiPath: string,
    active: boolean
}

interface IPlaylistStore {
    navLinkState: INavLinkState,

    setNavLinkState: (navLinkState: INavLinkState) => void
}

const useGlobalPlaylistStore = create<IPlaylistStore>((set) => ({
    navLinkState: {id: 2, title: 'True-Top', apiPath: 'track/all', active: true},

    setNavLinkState: (navLinkState) => set(() => ({ navLinkState })),
}));

export {useGlobalPlaylistStore};
