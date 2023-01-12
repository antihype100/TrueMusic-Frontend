import React from "react";
import styles from "./AlbumList.module.scss";
import LikeIcon from "../icon/LikeIcon";
import img from "../../assets/album.png";
import { headphones } from "../../utils/importSvg";
import { Link } from "react-router-dom";
import { AUTHOR } from "../../utils/routes";

const Album = () => {
  return (
    <section className={styles.albumBlock}>
      <img src={img} className={styles.img} alt="img" />
      <div className={styles.stats}>
        <div>
          <span>4546446</span>
          <img src={headphones} alt="headphones" />
        </div>
        <div>
          <span>32335</span>
          <LikeIcon />
        </div>
      </div>
      {/*<div>*/}
      <Link to={AUTHOR}>
        <span className={styles.nameAlbum}>
          Kizaru
        </span>
      </Link>
        {/*<span className={styles.nameAuthor}>*/}
        {/*  Kizaru*/}
        {/*</span>*/}
        {/*<span className={styles.nameAuthor}>*/}
        {/*  Message*/}
        {/*</span>*/}
      {/*</div>*/}
    </section>
  );
};

export default Album;