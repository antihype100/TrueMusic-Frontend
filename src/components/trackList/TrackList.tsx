import { Track } from "./track/Track";
import "./TrackList.scss";


interface ITrackList {
  amountTracks: number;
}

const TrackList = ({ amountTracks }: ITrackList) => {

  // @ts-ignore
  return (
    <div className="trackListWrapper">
      <ul className="trackList">
        {Array.from(Array(amountTracks).keys()).map((value) => {
            return (
              <li>
                <Track index={value + 1}/>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export { TrackList };