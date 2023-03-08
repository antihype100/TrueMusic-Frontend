import create from 'zustand';
import {ITrackResponse} from "@widgets/Player/model/playerStore";


interface ITrackPageStore {
    trackInfo: ITrackResponse
    setTrackInfo: (trackInfo: ITrackResponse) => void
}

const useTrackPageStore = create<ITrackPageStore>((set) => ({
    trackInfo: {} as ITrackResponse,
    setTrackInfo: (trackInfo) => set(() => ({ trackInfo })),
}));

export {useTrackPageStore};
