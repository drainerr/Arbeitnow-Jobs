import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import DetailedInfo from "./components/Main/Jobs/Job-Page/JobPage";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <span>Arbeitnow</span> Jobs
      </header>
      <Switch>
        <Route exact path="/">
          <Search />
          <Main />
        </Route>
        <Route path="/detailed/:jobId">
          <DetailedInfo />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
