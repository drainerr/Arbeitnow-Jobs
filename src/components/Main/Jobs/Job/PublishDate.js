import { AiOutlineClockCircle } from 'react-icons/ai';
import styles from './Job.module.css';
const PublishDate = (props) => {
  const getDateDifference = () => {
    return Math.floor(
      (new Date().getTime() - new Date(props.date).getTime()) /
        (24 * 3600 * 1000 * 1000)
    );
  };
  const daysAgo = getDateDifference();
  return (
    <div className={styles.Published}>
      <AiOutlineClockCircle /> <span>{daysAgo} days ago</span>
    </div>
  );
};

export default PublishDate;
