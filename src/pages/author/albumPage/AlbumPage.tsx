import React from 'react';
import { useParams } from 'react-router-dom';
import img from '../../../assets/sidebar/playlist/cover7.png';
import TrackAlbumPlaylistCover from '../../../components/trackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import { TrackList } from '../../../components/trackList/TrackList';
import BaseLayout from '../../../components/layouts/baseLayout/BaseLayout';
import AuthorLayout from '../../../components/layouts/authorLayout/AuthorLayout';
import styles from './AlbumPage.module.scss';
import Comments from '../../../components/comments/Comments';

const tracksList = [
  { author: 'Kizaru', trackName: 'Messege', duration: 534, likes: 234234, audition: 846532 },
  { author: '6BLACK', trackName: 'Ex Calling', duration: 234, likes: 3244, audition: 9805 },
  { author: 'Instasamka', trackName: 'Pop star', duration: 349, likes: 243674, audition: 35325 },
  { author: 'Cold carti', trackName: 'ILY', duration: 434, likes: 234234, audition: 324679 },
  { author: 'DJ Snake', trackName: 'Middle', duration: 134, likes: 34324, audition: 65332 },
  { author: 'Kizaru', trackName: 'Мне это не нужно', duration: 224, likes: 8709, audition: 2167976 },
];

const AlbumPage = () => {
  const { albumName, name } = useParams();

  return (
    <BaseLayout>
      <AuthorLayout author={name}>
        <div className={styles.albumPageContentWrapper}>
          <TrackAlbumPlaylistCover img={img} likes={'241'} listening={'124001'} title={albumName} />
          <TrackList amountTracks={5} tracksList={tracksList} />
          <Comments />
        </div>
      </AuthorLayout>
    </BaseLayout>
  );
};

export default AlbumPage;
