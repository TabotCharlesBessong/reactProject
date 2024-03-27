import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthForm, PageLayout } from "./component";

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<AuthForm />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;
