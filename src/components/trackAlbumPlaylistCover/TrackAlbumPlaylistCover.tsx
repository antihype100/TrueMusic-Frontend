import React from "react";
import styles from "./TrackAlbumPlaylistCover.module.scss";
import like from '../../assets/svg/like.svg'
import { headphones } from "../../utils/importSvg";

interface IPageCover {
  trackName?: string,
  img: string;
  likes: string;
  listening: string;
}

const TrackAlbumPlaylistCover = ({ img, likes, listening, trackName }: IPageCover) => {

  // @ts-ignore
  const resultName = trackName.charAt(0).toUpperCase() + trackName.slice(1);

  return (
    <div className={styles.coverWrapper}>

      <h2 className={styles.nameAlbum}>{resultName}</h2>
      <img src={img} className={styles.imgAlbum} alt="album" />
      <div className={styles.stats}>
        <div>
          <span>{likes}</span>
          <img className={styles.likeIcon} src={like} alt="" />
        </div>
        <div>
          <span>{listening}</span>
          <img src={headphones} alt="headphones" />
        </div>
      </div>
    </div>
  );
};

export default TrackAlbumPlaylistCover;
