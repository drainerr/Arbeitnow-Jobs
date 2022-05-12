import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const JobsCtx = createContext();

const JobsContext = (props) => {
  const [remote, setRemote] = useState(false);
  const [chosenCity, setChosenCity] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [jobs, setJobs, loading, unfilteredJobList] = useFetch();
  useFetch();

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
      }}
    >
      {props.children}
    </JobsCtx.Provider>
  );
};
export default JobsContext;
