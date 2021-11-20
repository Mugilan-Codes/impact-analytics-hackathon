import { Link } from 'react-router-dom';

import Card from '../components/Card';

const ShorlistedPage = ({ candidates }) => {
  const shortlistedCandidates = candidates.filter(
    (candidate) => candidate.status === 'Shortlisted'
  );

  return (
    <div className='text-center'>
      <h1>Shortlisted Candidates</h1>

      <div className='list-container'>
        {shortlistedCandidates.map((candidate, idx) => (
          <Card
            imageUrl={candidate.Image}
            name={candidate.name}
            id={candidate.id}
            status={candidate.status}
            key={idx}
          />
        ))}
      </div>

      <div className='go-back'>
        <Link to='/'>Go Back</Link>
      </div>
    </div>
  );
};

export default ShorlistedPage;
