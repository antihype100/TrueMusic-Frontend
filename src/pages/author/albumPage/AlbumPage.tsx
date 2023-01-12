import img from '../../../assets/album.png';
import PageCover from '../../../components/pageCover/PageCover';
import { TrackList } from '../../../components/trackList/TrackList';
import React from 'react';

const AlbumPage = () => {
  return (
    <PageCover
      img={img}
      author={'Kizaru'}
      likes={'241'}
      listening={'124001'}
      name={'Relax'}
      release={'16 декабря 2016'}
    >
      <TrackList amountTracks={5} />
    </PageCover>
  );
};

export default AlbumPage;
