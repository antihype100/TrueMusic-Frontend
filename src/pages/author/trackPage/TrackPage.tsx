import { useParams } from 'react-router-dom';
import React from 'react';
import styles from './TrackPage.module.scss';
import img from '../../../assets/sidebar/playlist/cover7.png';
import TrackAlbumPlaylistCover from '../../../entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import BaseLayout from '../../../app/layouts/baseLayout/BaseLayout';
import AuthorLayout from '../../../app/layouts/authorLayout/AuthorLayout';
import Comments from '../../../widgets/Comments/Comments';

const TrackPage = () => {
  const { name, trackName } = useParams();
  return (
    <BaseLayout>
      <AuthorLayout author={name}>
        <div className={styles.trackPageContentWrapper}>
          <TrackAlbumPlaylistCover img={img} likes={'234324'} listening={'23423'} title={trackName} />
          {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
          <TrackText />
          <Comments />
        </div>
      </AuthorLayout>
    </BaseLayout>
  );
};

const TrackText = () => {
  return (
    <div className={styles.textBody}>
      <div className={styles.text}>
        {Array.from(Array(5).keys()).map((_, i) => (
          <p key={i}>
            Я посылаю людям message (hold on) Если берусь за дело — настоящий savage Не нужен challenge, наношу огромный
            damage (большой урон) Ты микроб, ты распыляешься на мелочь (пиу!)
          </p>
        ))}
      </div>
    </div>
  );
};

export default TrackPage;
