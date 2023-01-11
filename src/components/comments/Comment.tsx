import styles from "./Comments.module.scss";
import img from "../../assets/png/forPlayer.png";
import LikeIcon from "../icon/LikeIcon";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.sender}>
        <img src={img} alt='img' />
        <span>Metro4akin</span>
      </div>
      <div className={styles.text}>
        <p>
          Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно
          вот этого вот почаще?
        </p>
        <span>3 ч.</span>
        <LikeIcon className={styles.svg}/>
      </div>
    </div>
  );
};

export default Comment;