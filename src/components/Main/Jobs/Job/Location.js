import styles from './Job.module.css';
import { IoMdGlobe } from 'react-icons/io';
const Location = (props) => {
  return (
    <div className={styles.Location}>
      <IoMdGlobe /> <span>{props.Value}</span>
    </div>
  );
};

export default Location;
