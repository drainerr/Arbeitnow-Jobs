import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const JobsCtx = createContext();

const JobsContext = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unfilteredJobList, setUnfilteredJobList] = useState([]);
  const [remote, setRemote] = useState(false);
  const [chosenCity, setChosenCity] = useState('');
  const [enteredCity, setEnteredCity] = useState('');

  useEffect(() => {
    setLoading(true);
    axios('https://www.arbeitnow.com/api/job-board-api').then((data) => {
      setJobs([...data.data.data]);
      setLoading(false);
      setUnfilteredJobList([...data.data.data]);
    });
  }, []);
  return (
    <JobsCtx.Provider
      value={{
        jobs,
        setJobs,
        loading,
        unfilteredJobList,
        setRemote,
        setChosenCity,
        remote,
        chosenCity,
        enteredCity,
        setEnteredCity,
      }}>
      {props.children}
    </JobsCtx.Provider>
  );
};
export default JobsContext;
