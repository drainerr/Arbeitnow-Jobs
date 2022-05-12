import { useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { JobsCtx } from '../../../../store/JobsContext';
import styles from './JobPage.module.css';

const JobInfo = () => {
  const { jobId } = useParams();
  const ctx = useContext(JobsCtx);
  const { description } = ctx.jobs[jobId];

  return (
    <article
      className={styles.JobInfo}
      dangerouslySetInnerHTML={{ __html: description }}
    ></article>
  );
};

export default JobInfo;
