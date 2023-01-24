export interface IItemForSelection {
    trackName?: string;
    albumName: string;
    author: string;
    cover: string;
}

export interface ISelection {
    header: string;
    selection: IItemForSelection[];
}

export interface IPropsSelections {
    selectionList: ISelection[];
}

export interface ISelectionList {
    category: string;
    selection: IItemForSelection[];
}