import { useParams, Link, useNavigate } from 'react-router-dom';

const CandidatePage = ({ candidates, setCandidates }) => {
  const params = useParams();
  const navigate = useNavigate();

  let candidate = candidates.filter((obj) => obj.id === params.id)[0];

  if (!candidate) {
    return (
      <div className='center-card'>
        <h1>Candidate Not Found</h1>

        <div class='go-back'>
          <Link to='/'>Go To Home</Link>
        </div>
      </div>
    );
  }

  const handleOnClick = (choice) => {
    let msg;
    switch (choice) {
      case 's':
        msg = 'Shortlisted';
        break;
      case 'r':
        msg = 'Rejected';
        break;
      default:
        msg = 'N/A';
    }

    const newCandidates = candidates.map((obj) => {
      if (obj.id === candidate.id) {
        obj.status = msg;
      }
      return obj;
    });
    setCandidates(newCandidates);

    navigate('/');
  };

  return (
    <div className='center-card'>
      <div className='card'>
        <img src={candidate.Image} alt={candidate.name} />

        <h1>{candidate.name}</h1>

        <p>Current Status: {candidate.status}</p>

        <div>
          <button className='button green' onClick={() => handleOnClick('s')}>
            Shorlist
          </button>
          <button className='button red' onClick={() => handleOnClick('r')}>
            Reject
          </button>
        </div>
      </div>

      <div class='go-back'>
        <Link to='/'>Go Back</Link>
      </div>
    </div>
  );
};

export default CandidatePage;
