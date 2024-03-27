import React from "react";
import { PageLayout, Signup } from "./component";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;
