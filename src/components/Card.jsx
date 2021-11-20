import { Link } from 'react-router-dom';

const Card = ({ id, imageUrl, name, status }) => {
  return (
    <div key={id} className='card'>
      <img src={imageUrl} alt='Avatar' />

      <div className='container'>
        <h4>
          <b>{name}</b>
        </h4>

        <p>Status: {status}</p>
      </div>

      <Link to={`/${id}`}>More</Link>
    </div>
  );
};

export default Card;
