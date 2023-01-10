import './Player.scss';
import img from '../../assets/png/forPlayer.png';
import { repeat, like, next, prev, play } from '../../utils/importSvg';

const Player = () => (
  <div className='player'>
    <div className='player__contentWrapper'>
      <div className='player__leftContent'>
        <img className='player__img' src={img} alt='' />

        <div className='player__infoWrapper'>
          <span className='player__authorName'>Kizaru</span>
          <span className='player__trackName'>Messege</span>
          <span className='player__presentTime'>00:40</span>
        </div>

        <div className='player__iconsWrapper'>
          <img className='player__repeatIcon' src={repeat} alt='' />
          <img className='player__likeIcon' src={like} alt='' />
        </div>
      </div>

      <div className='player__play-stopWrapper'>
        <img src={prev} alt='' />
        <img src={play} alt='' />
        <img src={next} alt='' />
      </div>

      <span className='player__duration'>02:32</span>
    </div>

    <input className='inputDuration slider-progress' type='range' />
  </div>
);

export default Player;
