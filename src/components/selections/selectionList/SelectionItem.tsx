import React from 'react';
import { Link} from "react-router-dom";
import styles from './SelectionList.module.scss';
import { IItemForSelection } from "../Selections";

const SelectionItem = ({author, trackName, albumName, cover}: IItemForSelection) => {


  return (
      <section className={styles.albumBlock}>
        <img src={cover} className={styles.img} alt='img' />
        <Link className={styles.nameAuthor} to={`/author/${author.toLowerCase()}/profile`}>{author}</Link>

        {trackName ? <Link className={styles.nameAlbum} to={`/author/${author.toLowerCase()}/profile`}>{trackName}</Link> : null}
        <Link className={styles.nameAlbum} to={`/author/${author.toLowerCase()}/albums/${albumName.toLowerCase()}`}>{albumName}</Link>
      </section>
    )
}

export default SelectionItem;
