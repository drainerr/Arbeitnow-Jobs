import Job from './Job/Job';
import styles from './Jobs.module.css';
import React, { useContext, useState } from 'react';
import { JobsCtx } from '../../../store/JobsContext';
import ReactPaginate from 'react-paginate';

const Jobs = (props) => {
  const { jobs, loading } = useContext(JobsCtx);
  const [currPage, setCurrPage] = useState(1);
  let output;

  const jobsPerPage = 5;
  const pageCount = Math.ceil(jobs.length / 5);
  const jobsSeen = currPage * jobsPerPage;
  const jobsToDisplay = jobs.slice(jobsSeen, jobsSeen + jobsPerPage).map((job, i) => {
    return (
      <Job
        key={i}
        id={i}
        company={job.company_name}
        position={job.title}
        remote={job.remote}
        url={job.url}
        city={job.location}
        date={job.created_at}></Job>
    );
  });

  if (loading) output = <div>Loading...</div>;
  if (!loading && jobs.length === 0) output = <div>Jobs not found!</div>;

  if (!loading && jobs.length !== 0) {
    // output = jobs.map((job, i) => {
    //   return (
    //     <Job
    //       key={i}
    //       id={i}
    //       company={job.company_name}
    //       position={job.title}
    //       remote={job.remote}
    //       url={job.url}
    //       city={job.location}
    //       date={job.created_at}></Job>
    //   );
    // });
    output = jobsToDisplay;
  }

  const onPageChangeHandler = ({ selected }) => {
    setCurrPage(selected);
  };

  return (
    <div className={styles.JobsWrapper}>
      <ul className={styles.Jobs}>{output}</ul>
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
    </div>
  );
};

export default Jobs;
