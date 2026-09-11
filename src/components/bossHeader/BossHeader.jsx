import "./bossHeader.css";
import MyContext from '../../context/MyContext';

const BossHeader = (props) => {
  return (
    <div className="BossHeader">
      <div className="BossProfil">
        <img
          src={props.img}
          alt="BossImg"
          title="BossImg"
          className="BossProfilPic"
        />
        <div className="BossProfilInfo">
          <p>{language === 'en' ? "Name" : "Nom"} : {props.name}</p>
          <p>Solo : {props.solo ? "Oui" : "Non"}</p>
          <p>{language === 'en' ? "DMG" : "Dégâts"} : {props.dmg}</p>
        </div>
      </div>
      <div className="BossComp">
        <h3>{language === 'en' ? "Recommended Classes :" : "Composition de groupe conseillée :"}</h3>
        <ul>
          <li>{props.comp.debuffer}</li>
          <li>{props.comp.dps1}</li>
          <li>{props.comp.dps2}</li>
          <li>{props.comp.dps3}</li>
          <li>{props.comp.healer}</li>
        </ul>
      </div>
    </div>
  );
};

export default BossHeader;