import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const updateDates = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage startDate={startDate} endDate={endDate} />
          </Route>

          <Route path="/">
            <Home
              startDate={startDate}
              endDate={endDate}
              handleUpdate={updateDates}
            />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
