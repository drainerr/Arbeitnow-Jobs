import styles from './Filter.module.css';
import { IoMdGlobe } from 'react-icons/io';
import { useContext } from 'react';
import { JobsCtx } from '../../../store/JobsContext';
import { filterJobs } from '../../../helpers/filter';
import usePrevious from '../../../hooks/usePrevious';

const Filter = () => {
  const ctx = useContext(JobsCtx);
  const {
    setJobs,
    setChosenCity,
    chosenCity,
    setRemote,
    remote,
    jobs,
    unfilteredJobList,
    enteredCity,
    setEnteredCity,
  } = ctx;

  const radioHandler = (e) => {
    const chosenCity = e.target.value;
    setChosenCity(chosenCity);
    if (enteredCity === '') {
      let jobList = jobs.length > 0 ? jobs : unfilteredJobList;
      jobList = jobList.filter((job) => chosenCity === job.location);
      setJobs(jobList);
    } else {
      setChosenCity('');
    }
  };

  const prevJobs = usePrevious(jobs);
  const checkBoxHandler = (e) => {
    if (e.target.checked) {
      let jobList = jobs;
      jobList = jobList.filter((job) => job.remote);
      setRemote(true);
      setJobs(jobList);
    } else {
      setRemote(false);
      setJobs(() => (prevJobs.length !== 0 ? prevJobs : unfilteredJobList));
    }
  };

  const onChangeHandler = (e) => {
    const givenCity = e.target.value;
    setEnteredCity(givenCity);
    if (givenCity !== '') {
      if (chosenCity) setChosenCity('');
      filterJobs(givenCity, jobs, remote, chosenCity, setJobs, setChosenCity, setRemote, prevJobs);
    } else {
      if (remote) {
        let remoteJobs = unfilteredJobList.filter((job) => job.remote);
        setJobs(remoteJobs);
      } else {
        setChosenCity('');
        setRemote(false);
        setJobs(unfilteredJobList);
        setEnteredCity('');
      }
    }
  };

  return (
    <div className={styles.FilterWrapper}>
      <div className={styles.FulltimeWrapper}>
        <label>
          <input type="checkbox" value="remote" onChange={checkBoxHandler} checked={remote}></input>
          Remote
        </label>
      </div>
      <div className={styles.Location}>
        <label htmlFor="location">LOCATION</label>
        <div className={styles.LocationInputWrapper}>
          <span className={styles.GlobeIcon}>
            <IoMdGlobe />
          </span>
          <input
            id="location"
            placeholder="Filter by city name"
            value={enteredCity}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className={styles.Cities} onChange={radioHandler}>
          <label>
            <input type="radio" value="London" name="city" checked={chosenCity === 'London'} />
            <span>London</span>
          </label>
          <label>
            <input
              type="radio"
              name="city"
              value="Amsterdam"
              checked={chosenCity === 'Amsterdam'}
            />
            <span>Amsterdam</span>
          </label>
          <label>
            <input type="radio" name="city" value="Berlin" checked={chosenCity === 'Berlin'} />
            <span>Berlin</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
