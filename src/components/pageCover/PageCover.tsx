import React from 'react';
import styles from './PageCover.module.scss';
import LikeIcon from '../icon/LikeIcon';
import { headphones } from '../../utils/importSvg';
import { TrackList } from '../trackList/TrackList';
import Comments from '../comments/Comments';
import AuthorLayout from '../layouts/authorLayout/AuthorLayout';
import BaseLayout from '../layouts/baseLayout/BaseLayout';

interface IPageCover {
  name: string;
  author: string;
  img: string;
  release: string;
  likes: string;
  listening: string;
  children: any;
}

const PageCover = ({ img, likes, listening, name, release, author, children }: IPageCover) => {
  return (
    <BaseLayout>
      <AuthorLayout author={author}>
        <div className={styles.wrapper}>
          <h2 className={styles.nameAlbum}>{name}</h2>
          <div className={styles.body}>
            <img src={img} className={styles.imgAlbum} alt='album' />
            <div className={styles.stats}>
              <span className={styles.date}>{release}</span>
              <div>
                <span>{likes}</span>
                <LikeIcon />
              </div>
              <div>
                <span>{listening}</span>
                <img src={headphones} alt='headphones' />
              </div>
            </div>
          </div>
          {children}
          <Comments />
        </div>
      </AuthorLayout>
    </BaseLayout>
  );
};

export default PageCover;
