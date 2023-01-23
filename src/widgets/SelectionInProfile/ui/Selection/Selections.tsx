import styles from './Selections.module.scss';
import SelectionList from '../SubSample/SelectionList';
import { IPropsSelections, ISelection } from '../../model/types';



export const Selections = ({ selectionList }: IPropsSelections) => {
    return (
        <div className={styles.albumList}>
            {selectionList.map((selection: ISelection, i) => (
                <SelectionList key={i} category={selection.header} selection={selection.selection} />
            ))}
        </div>
    );
};

