import styles from './Selections.module.scss'
import SelectionList from "./selectionList/SelectionList";

export interface IItemForSelection {
  trackName?: string,
  albumName: string,
  author: string
  cover: string
}

interface ISelection {
  header: string,
  selection: IItemForSelection[]
}

interface IPropsSelections {
  selectionList: ISelection[];
}

const Selections = ({selectionList}: IPropsSelections) => {

    return (
      <div className={styles.albumList}>
        {selectionList.map((selection: ISelection) =>
          (
            <SelectionList category={selection.header}
                           selection={selection.selection}
            />
          )
        )}

      </div>
    )
}

export {Selections}