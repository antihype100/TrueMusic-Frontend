import create from 'zustand';

interface INavLinkState {
    id: number,
    title: string,
    apiPath: string,
    active: boolean
}

interface INavMenuTrackListStore {
    navLinkState: INavLinkState,
    setNavLinkState: (navLinkState: INavLinkState) => void
}

const useNavMenuTrackListStore = create<INavMenuTrackListStore>((set) => ({
    navLinkState: {id: 2, title: 'True-Top', apiPath: 'track/all', active: true},
    setNavLinkState: (navLinkState) => set(() => ({ navLinkState })),
}));

export {useNavMenuTrackListStore};
