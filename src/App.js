import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CandidatePage from './pages/CandidatePage';
import ShorlistedPage from './pages/ShorlistedPage';
import RejectedPage from './pages/RejectedPage';

import { REJECT_PAGE, SHORTLIST_PAGE } from './constants/routes';

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
          path={SHORTLIST_PAGE}
          element={<ShorlistedPage candidates={candidates} />}
        />
        <Route
          path={REJECT_PAGE}
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
      </Routes>
    </Router>
  );
}

export default App;
