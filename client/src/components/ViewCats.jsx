import { useState } from 'react';
import { Error } from '../components/Error';
import { getRandomTag } from '../helpers/getRandomTag';
import "../styles/App.css";

const ViewCats = () => {
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="cats-container">
      {isError && <Error message={errorMessage} />}
      {[]?.cats?.map((cat) => (
        <div className="cat-wrapper" key={cat.id}>
          <img src={`https://cataas.com/cat/${getRandomTag()}`} alt="A cat" className="cat-image" />
          <div className="cat-info">
            <h2>{cat?.name}</h2>
            <p>{cat?.description}</p>
            <p>{`Age - ${cat?.age}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ViewCats };
