import styles from './Selections.module.scss';
import {SubSample} from '../SubSample/SubSample';
import {IPropsSelections, ISelection} from '../../model/types';

export const Selections = ({selectionList}: IPropsSelections) => (
    <div className={styles.albumList}>
        {selectionList.map((selection: ISelection, i) => (
            <SubSample key={i} category={selection.header} selection={selection.selection}/>
        ))}
    </div>
);

