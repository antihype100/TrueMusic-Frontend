import img from '../../../assets/png/forPlayer.png';
import './Track.scss';

interface ITrack {
  index: number;
}

const Track = ({ index }: ITrack) => {
  return (
    <div className='playerTrack'>
      <p className='playerTrack__numberPosition'>{index}</p>
      <img className='playerTrack__img' src={img} alt='' />
      <div className='playerTrack__infoWrapper'>
        <span className='playerTrack__authorName'>Kizaru</span>
        <span className='playerTrack__trackName'>Messege</span>
        <span className='playerTrack__presentTime'>00:40</span>
        <input className='inputDurationTrack slider-progress' type='range' />
      </div>
    </div>
  );
};

export { Track };
