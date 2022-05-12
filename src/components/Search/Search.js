import { useContext, useState } from 'react';
import { MdWorkOutline } from 'react-icons/md';
import usePrevious from '../../hooks/usePrevious';
import { JobsCtx } from '../../store/JobsContext';
import Button from '../UI/Button';
import styles from './Search.module.css';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const ctx = useContext(JobsCtx);
  const { setJobs, unfilteredJobList, jobs, setChosenCity, setRemote, setEnteredCity } = ctx;

  const prevJobs = usePrevious(jobs);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onClickHandler = () => {
    let vacancies = jobs;
    if (inputValue !== '') {
      vacancies = vacancies.filter(
        (e) => e.company_name.includes(inputValue) || e.title.includes(inputValue)
      );
      setJobs(vacancies);
    } else {
      if (prevJobs.length > 0) {
        setJobs(prevJobs);
      } else {
        setChosenCity('');
        setRemote(false);
        setEnteredCity('');
        setJobs(unfilteredJobList);
      }
    }
  };

  return (
    <div className={styles.Main}>
      <div className={styles.SearchContainer}>
        <div className={styles.InputWrapper}>
          <MdWorkOutline />
          <input
            type="text"
            value={inputValue}
            placeholder="Title, company"
            onChange={onChangeHandler}
          ></input>
        </div>
        <Button className={styles.SearchButton} onClick={onClickHandler}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
