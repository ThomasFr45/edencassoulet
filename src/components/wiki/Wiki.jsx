import './wiki.css';
import wikiContent from '../../content/wikiContent';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../context/MyContext';

const Wiki = () => {
  const [search, setSearch] = useState('');
  const { language } = useContext(MyContext);
  return (
    <div className="wiki-container">
      <p className="wiki-infos">{language === 'en' ? "Here is the wiki page, you'll find some informations about endgame boss and dungeons, if you are looking for a specific boss or dungeon, type his name in the search bar, and you should get a result. If you can't find what you are looking for, you can pm ElMaou or ask one of Cassoulet's members" : 'Voici notre page de wiki, vous trouverez ici des informations sur les donjons et boss endgame. Si vous en cherchez un en particulier, tapez son nom dans la barre de recherche. Si vous ne trouvez pas ce que vous cherchez, vous pouvez mp ElMaou, on demander à un membre de Cassoulet.'}</p>
      <div className="wiki-search">
        <input placeholder='Recherche' type="text" className="wiki-searchbar" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className="wiki-result">
        {wikiContent.filter(good => good.name.toLowerCase().includes(search.toLowerCase()) || good.location.toLowerCase().includes(search.toLowerCase()) || good.short?.toLowerCase().includes(search.toLowerCase())).map(one => 
        <div className='wiki-item-container'>
          <Link to={`${one.link}`}>
          <div key={one.name} className="wiki-item">
          <div className="wiki-item-content">
            <img src={one.img ? one.img : "https://via.placeholder.com/150"} alt="boss-img" />
            <div className="wiki-item-infos">
              <ul>
                <li>{language === 'en' ? 'Name:' : 'Nom:'} {one.name}</li>
                <li>{language === 'en' ? 'Level:' : 'Niveau:'} {one.level}</li>
                <li>{one.location === '' ? '' : language === 'en' ? 'Location:' : 'Lieu:'}{one.location}</li>
                <li>{one.npc === '' ? '' : language === 'en' ? 'NPC:' : 'PNJ:'} {one.npc}</li>
                <li>{one.player === '' ? '' : language === 'en' ? 'Player(s):' : 'Joueur(s):'}{one.player}</li>
              </ul>
            </div>
          </div>
        </div>
        </Link>
        </div>
        )}
      </div>
    </div>
    );
}

export default Wiki;