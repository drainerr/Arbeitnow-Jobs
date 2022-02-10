import Filter from './Filter/Filter';
import Jobs from './Jobs/Jobs';
import styles from './Main.module.css';

const Main = (props) => {
  return (
    <div className={styles.MainWrapper}>
      <Filter></Filter>
      <Jobs></Jobs>
    </div>
  );
};

export default Main;
