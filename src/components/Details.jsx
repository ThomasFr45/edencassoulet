import { useParams } from 'react-router-dom';
import wikiContent from '../content/wikiContent';
import './details.css';

const Details = () => {
  const toSearch = useParams().boss;
  const result = wikiContent.filter(one => one.link === toSearch)[0];
  return (
    <div className="details-container">
      <h3 className="details-title">{result.name}</h3>
      <img src={result.img !== '' ? result.img : "https://via.placeholder.com/300"} alt={result.name} className="details-image" />
      <div className="details-text">
        {localStorage.getItem('language') === 'en' ? result.en.split('/n').map(one => <p key={one}>{one}</p>) : result.fr.split('/n').map(one => <p key={one}>{one}</p>)}
      </div>
    </div>
  );
}

export default Details;