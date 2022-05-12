import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unfilteredJobList, setUnfilteredJobList] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios('https://www.arbeitnow.com/api/job-board-api').then((data) => {
      const specificJobsData = data.data.data.map((job, i) => {
        return {
          id: i,
          company_name: job.company_name,
          created_at: job.created_at,
          description: job.description,
          location: job.location,
          remote: job.remote,
          title: job.title,
          url: job.url,
        };
      });
      setJobs(specificJobsData);
      setLoading(false);
      setUnfilteredJobList(specificJobsData);
    });
  }, []);
  return [jobs, setJobs, loading, unfilteredJobList, setUnfilteredJobList];
};

export default useFetch;
