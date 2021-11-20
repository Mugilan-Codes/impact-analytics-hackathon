import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

const HomePage = ({ candidates }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  const searchCandidates = (text) => {
    let query = text.toLowerCase();
    if (query === '') {
      setFilteredCandidates(candidates);
    }
    let newCandidateList = [];

    for (const c of candidates) {
      let candidateName = c.name.toLowerCase();

      let filtered = candidateName.search(query);

      if (filtered > -1) {
        newCandidateList.push(c);
      }
    }

    setFilteredCandidates(newCandidateList);
  };

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
    searchCandidates(e.target.value);
  };

  useEffect(() => {
    setFilteredCandidates(candidates);
  }, [candidates]);

  return (
    <div className='text-center'>
      <h1>Candidates</h1>

      <input
        className='search-bar'
        type='search'
        value={searchText}
        onChange={handleOnChange}
        placeholder='Search Candidates...'
      />

      <div>
        <Link to='/shortlist' className='button green'>
          Shortlisted Candidates
        </Link>
        <Link to='/rejects' className='button red'>
          Rejected Candidates
        </Link>
      </div>

      <div className='list-container'>
        {filteredCandidates.map((candidate, idx) => (
          <Card
            imageUrl={candidate.Image}
            name={candidate.name}
            id={candidate.id}
            status={candidate.status}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
