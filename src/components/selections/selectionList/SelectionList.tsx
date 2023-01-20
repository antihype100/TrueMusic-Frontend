import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './SelectionList.module.scss';
import { IItemForSelection } from '../Selections';
import SelectionItem from './SelectionItem';

interface ISelectionList {
  category: string;
  selection: IItemForSelection[];
}

const SelectionList = ({ category, selection }: ISelectionList) => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [arrLength, setArrLength] = useState(3);
  const [more, setMore] = useState(false);

  const showMore = () => {
    setArrLength(selection.length);
    setMore(true);
  };

  const showLess = () => {
    setArrLength(3);
    setMore(false);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <h2>{category}</h2>
        {!more ? (
          <button type="button" onClick={showMore}>
            Показать все
          </button>
        ) : (
          <button type="button" onClick={showLess}>
            Скрыть
          </button>
        )}
      </div>
      <ul className={styles.list}>
        {selection
          .map((item: IItemForSelection) => (
            <li
              key={item.cover}
              onClick={() =>
                navigate(
                  item.trackName
                    ? `/author/${name}/tracks/${item.trackName.toLowerCase()}`
                    : `/author/${name}/albums/${item.albumName.toLowerCase()}`,
                )
              }
            >
              <SelectionItem
                cover={item.cover}
                albumName={item.albumName}
                trackName={item.trackName}
                author={item.author}
              />
            </li>
          ))
          .slice(0, arrLength)}
      </ul>
    </section>
  );
};

export default SelectionList;
