import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CandidatePage from './pages/CandidatePage';
import ShorlistedPage from './pages/ShorlistedPage';
import RejectedPage from './pages/RejectedPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);

  const getCanditates = async () => {
    try {
      const res = await fetch(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
      );

      const data = await res.json();

      for (let index in data) {
        data[index].status = 'N/A';
      }

      setCandidates(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCanditates();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage candidates={candidates} />} />
        <Route
          path='shortlist'
          element={<ShorlistedPage candidates={candidates} />}
        />
        <Route
          path='rejects'
          element={<RejectedPage candidates={candidates} />}
        />
        <Route
          path=':id'
          element={
            <CandidatePage
              candidates={candidates}
              setCandidates={setCandidates}
            />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
