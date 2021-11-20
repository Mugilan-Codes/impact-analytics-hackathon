import Card from '../components/Card';
import '../styles/HomePage.css';

const HomePage = ({ candidates }) => {
  return (
    <div>
      <h1>Hello</h1>
      <div className='grid-container'>
        {candidates.map((candidate, idx) => (
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
