import { Link } from 'react-router-dom';

import Card from '../components/Card';

const RejectedPage = ({ candidates }) => {
  const rejectedCandidates = candidates.filter(
    (candidate) => candidate.status === 'Rejected'
  );

  return (
    <div className='text-center'>
      <h1>Rejected Candidates</h1>

      <div className='list-container'>
        {rejectedCandidates.map((candidate, idx) => (
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

export default RejectedPage;
