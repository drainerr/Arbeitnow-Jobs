import styles from './JobPage.module.css';
import Button from '../../../UI/Button';
import { CgArrowLongLeft } from 'react-icons/cg';
import { Link, useParams } from 'react-router-dom';
import { JobsCtx } from '../../../../store/JobsContext';
import { useContext } from 'react';

const LeftPanel = () => {
  const { jobId } = useParams();
  const ctx = useContext(JobsCtx);
  const { url } = ctx.jobs[jobId];

  return (
    <div className={styles.LeftPanel}>
      <Link to="/" className={styles.GoBack}>
        <CgArrowLongLeft />
        <span>Back to search</span>
      </Link>
      <h5>How to apply</h5>
      <p>Please click the button below to see the original job post and apply</p>
      <Button className={styles.ApplyButton}>
        <a href={url} target="_blank" rel="noreferrer">
          Apply
        </a>
      </Button>
    </div>
  );
};

export default LeftPanel;
