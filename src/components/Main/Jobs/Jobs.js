import Job from './Job/Job';
import styles from './Jobs.module.css';
import { useContext } from 'react';
import { JobsCtx } from '../../../store/JobsContext';
const Jobs = (props) => {
  const { jobs, loading } = useContext(JobsCtx);

  return (
    <ul className={styles.Jobs}>
      {!loading && jobs.length !== 0 ? (
        jobs.map((job, i) => {
          return (
            <Job
              key={i}
              id={i}
              company={job.company_name}
              position={job.title}
              remote={job.remote}
              url={job.url}
              city={job.location}
              date={job.created_at}
            ></Job>
          );
        })
      ) : jobs.length === 0 ? (
        <div>Jobs not found!</div>
      ) : (
        <div>Loading...</div>
      )}
    </ul>
  );
};

export default Jobs;
