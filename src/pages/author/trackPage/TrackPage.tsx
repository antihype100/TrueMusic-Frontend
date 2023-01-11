import AuthorLayout from "../../../components/layouts/authorLayout/AuthorLayout";
import styles from "./TrackPage.module.scss";
import { arrow, headphones } from "../../../utils/importSvg";
import img from "../../../assets/album.png";
import LikeIcon from "../../../components/icon/LikeIcon";
import Comments from "../../../components/comments/Comments";
import BaseLayout from "../../../components/layouts/baseLayout/BaseLayout";

const TrackPage = () => {
  return (
    <BaseLayout>
      <AuthorLayout author={"Dora"}>
        <div className={styles.wrapper}>
          <div className={styles.nameAlbumBlock}>
            <h2 className={styles.nameTrack}>Messege: jojolo</h2>
            <h3 className={styles.nameAlbum}>Say No Mo</h3>
          </div>
          <div className={styles.body}>
            <img src={img} className={styles.imgAlbum} alt="album" />
            <div className={styles.stats}>
              <span className={styles.date}>16 декабря 2016</span>
              <div>
                <span>10</span>
                <LikeIcon />
              </div>
              <div>
                <span>129</span>
                <img src={headphones} alt="headphones" />
              </div>
            </div>
          </div>
          <div className={styles.textBody}>
            <div className={styles.text}>
              {Array.from(Array(5).keys()).map((_, i) => (
                <p key={i}>
                  Я посылаю людям message (hold on)
                  Если берусь за дело — настоящий savage
                  Не нужен challenge, наношу огромный damage (большой урон)
                  Ты микроб, ты распыляешься на мелочь (пиу!)
                </p>
              ))}
            </div>
            <button type="button" className={styles.arrow}>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
          <Comments />
        </div>
      </AuthorLayout>
    </BaseLayout>
  );
};

export default TrackPage;
