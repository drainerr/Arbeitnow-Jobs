import AboutJob from './AboutJob';
import styles from './JobPage.module.css';
import LeftPanel from './LeftPanel';
const DetailedInfo = (props) => {
  return (
    <div className={styles.Container}>
      <LeftPanel />
      <AboutJob />
    </div>
  );
};

export default DetailedInfo;
