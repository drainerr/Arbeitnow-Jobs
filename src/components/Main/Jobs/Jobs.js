import Job from './Job/Job';
import styles from './Jobs.module.css';
import React, { useContext, useState } from 'react';
import { JobsCtx } from '../../../store/JobsContext';
import ReactPaginate from 'react-paginate';

const Jobs = (props) => {
  const { jobs, loading } = useContext(JobsCtx);
  const [currPage, setCurrPage] = useState(0);
  let output;

  const jobsPerPage = 10;
  const pageCount = Math.ceil(jobs.length / 10);
  const jobsSeen = currPage * jobsPerPage;

  const mapJobs = (arr) => {
    return arr.map((job) => {
      return (
        <Job
          key={job.id}
          id={job.id}
          company={job.company_name}
          position={job.title}
          remote={job.remote}
          url={job.url}
          city={job.location}
          date={job.created_at}
        ></Job>
      );
    });
  };

  let jobsToDisplay;
  if (window.screen.width > 480) {
    const elements = jobs.slice(jobsSeen, jobsSeen + jobsPerPage);
    jobsToDisplay = mapJobs(elements);
  } else {
    jobsToDisplay = mapJobs(jobs);
  }

  const onPageChangeHandler = ({ selected }) => {
    setCurrPage(selected);
  };

  if (loading) output = <h3>Loading...</h3>;
  if (!loading && jobs.length === 0) output = <h3>Jobs not found!</h3>;
  if (!loading && jobs.length !== 0) {
    output = (
      <>
        <ul className={styles.Jobs}>{jobsToDisplay}</ul>
        {window.screen.width > 480 && (
          <ReactPaginate
            containerClassName={styles.PaginationContainer}
            onPageChange={onPageChangeHandler}
            pageCount={pageCount}
            previousLinkClassName={styles.PreviousLink}
            nextLinkClassName={styles.NextLink}
            activeClassName={styles.PaginationActive}
            breakClassName={styles.PaginationBreak}
            nextLabel=">"
            previousLabel="<"
          />
        )}
      </>
    );
  }

  return <div className={styles.JobsWrapper}>{output} </div>;
};

export default Jobs;
