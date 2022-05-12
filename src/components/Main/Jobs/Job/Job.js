import styles from './Job.module.css';
import Location from './Location';
import PublishDate from './PublishDate';
import randomImg from '../../../../assets/images/arbeitnow.jpg';
import Remote from './Remote';
import { Link } from 'react-router-dom';
const Job = (props) => {
  const { id, date, city, company, position, remote } = props;
  return (
    <div className={styles.JobWrapper}>
      <img src={randomImg} className={styles.img} alt="jobImg" />
      <div className={styles.JobDescription}>
        <h6 className={styles.Company}>{company}</h6>
        <Link to={`/detailed/${id}`} className={styles.JobLabel}>
          {position}
        </Link>
        <div className={styles.JobDetails}>
          {remote ? <Remote /> : <div></div>}
          <div className={styles.LocationDateWrapper}>
            <Location Value={city} />
            {/* <PublishDate date={date} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
