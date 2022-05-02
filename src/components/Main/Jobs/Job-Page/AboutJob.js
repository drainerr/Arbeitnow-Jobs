import PublishDate from '../Job/PublishDate';
import styles from './JobPage.module.css';
import testImg from '../../../../assets/images/arbeitnow.jpg';
import Location from '../Job/Location';
import JobInfo from './JobInfo';
import Remote from '../Job/Remote';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { JobsCtx } from '../../../../store/JobsContext';
import { useContext } from 'react';

const AboutJob = () => {
  const { jobId } = useParams();
  const id = jobId;
  const ctx = useContext(JobsCtx);
  !ctx.jobs[id] && window.alert('Please go back and reload the page');
  const { title, created_at: date, company_name: company, remote, location } = ctx.jobs[id];
  return (
    <div className={styles.AboutJob}>
      <div className={styles.JobHeader}>
        <h2 className={styles.JobTitle}>{title}</h2>
        <Remote remote={remote} />
      </div>
      {/* <PublishDate date={date} /> */}
      <div className={styles.CompanyInfo}>
        <img src={testImg} alt="company" />
        <div className={styles.NameAndLocation}>
          <h4>{company}</h4>
          <Location Value={location} />
        </div>
      </div>
      <JobInfo />
    </div>
  );
};

export default AboutJob;
