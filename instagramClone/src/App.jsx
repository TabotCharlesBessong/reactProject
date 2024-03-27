import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PageLayout } from "./component";
import { AuthPage, Homepage } from "./pages";

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;
