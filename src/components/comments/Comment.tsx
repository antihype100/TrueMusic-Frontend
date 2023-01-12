import styles from './Comments.module.scss';
import img from '../../assets/png/forPlayer.png';
import like from '../../assets/svg/like.svg'

interface IComment {
  author: string;
  commentText: string;
  timeAgo: number;

}


const Comment = () => {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentAuthorWrapper}>
        <img className={styles.imgAuthor} src={img} alt='img' />
        <span className={styles.author}>Metro4akin</span>
      </div>
      <div className={styles.commentTextWrapper}>
        <p className={styles.commentText}>
          Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно
          вот этого вот почаще?
        </p>
        <div className={styles.likeWrapper}>
          <span className={styles.time}>3 ч.</span>
          <img src={like} className={styles.likeIcon} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Comment;
