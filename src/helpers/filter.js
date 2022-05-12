export const filterJobs = (inputValue, jobs, remote, chosenCity, setJobs) => {
  let vacancies = jobs;
  const enteredCity = inputValue.toLowerCase();
  console.log(enteredCity);
  if (remote && chosenCity) {
    vacancies = vacancies.filter(
      (e) =>
        e.location.toLowerCase().startsWidth(enteredCity) && e.remote && chosenCity === e.location
    );
  } else if (remote) {
    vacancies = vacancies.filter(
      (e) => e.location.toLowerCase().startsWith(enteredCity) && e.remote
    );
  } else if (chosenCity) {
    vacancies = vacancies.filter(
      (e) => e.location.toLowerCase().startsWith(enteredCity) && chosenCity === e.location
    );
  } else {
    vacancies = vacancies.filter((e) => e.location.toLowerCase().startsWith(enteredCity));
  }
  setJobs(vacancies);
};
