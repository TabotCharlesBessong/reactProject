import React from 'react'
import { PageLayout } from './component'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route
            path="/"
            element={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laboriosam ipsum pariatur maxime hic beatae natus ea rerum nesciunt dolores sint quod blanditiis libero eius esse voluptates repellendus aspernatur in!"
            }
          />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App