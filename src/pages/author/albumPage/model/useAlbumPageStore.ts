import create from 'zustand';

interface IAlbumResponse {
    albumCoverPath: string
    albumDescription: string
    albumFormatRelease: string
    albumGenre: string
    albumName: string
    authorId: number
    authorName: string
    createdAt: string
    id: number
    updatedAt: string;
    usersLiked: number;
    isLiked: boolean
}
interface IAlbumPageStore {
    albumInfo: IAlbumResponse
    setAlbumInfo: (trackInfo: IAlbumResponse) => void
}

const useAlbumPageStore = create<IAlbumPageStore>((set) => ({
    albumInfo: {} as IAlbumResponse,
    setAlbumInfo: (albumInfo) => set(() => ({ albumInfo })),
}));

export {useAlbumPageStore};
