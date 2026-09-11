import CcBossHeader from "./BossHeader";
import bossImg from "../../../content/images/celestialCorridor/SagiBoss.png";
import "./ccBoss.css";
import sagiInfo from "../../../content/images/celestialCorridor/sagiInfo.png";
import sagiInfo2 from "../../../content/images/celestialCorridor/sagiInfo2.png";
import sagiInfo3 from "../../../content/images/celestialCorridor/sagiInfo3.png";
import MyContext from '../../../context/MyContext';
import { useContext } from 'react';

const Sagittarius = () => {
    const { language } = useContext(MyContext);
  let teamComp = {
    healer: "Adjudicator",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Assassin",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Sagittarius"
        solo={false}
        dmg="Pierce"
        comp={teamComp}
        img={bossImg}
      />
      <div className="ccBossConcent">
        <h3>
          {language === "en"
            ? "Boss mechanics :"
            : "Méchanique du boss:"}
        </h3>
        <ul className="ccBossMecha">
          {language === "en" ? (
            <li>
              1. Every 35 seconds, Sagittarius will receive a buff : "Rage of
              the Archer". The next player to attack her will receive the "Holy
              Bomb" debuff. After 3s, this debuff will cause a bomb to explode
              on you and kill every teammates around you. It is recommended that
              you get away from the party until the bombs procs.
            </li>
          ) : (
            <li>
              1. Toutes les 35 secondes, Sagittarius va recevoir un buff : "Rage
              of the Archer". La prochaine personne qui l'attequera recevra un
              debuff : "Holy Bomb", pendant 3s. Après ces 3s les membres du
              groupes à moins de 10 mètres mourront. Il faut donc faire
              attention à ce débuff et s'éloigner du groupe quand vous l'avez.
            </li>
          )}
          <li>
            {" "}
            <img src={sagiInfo} alt="Archer Spirit" />
          </li>
          {language === "en" ? (
            <li>
              2. Sagittarius will summon turrets for 8 secondes, while turrets
              are active, Sagittarius is immune to damage, and cannot attack.
            </li>
          ) : (
            <li>
              2. Sagittarius invoquera des tourelles de manière aléatoire et ce
              pendant 8 secondes, tant qu'elles sont actives, Sagittarius ne
              prendra pas de dégats.
            </li>
          )}
          <li>
            <img src={sagiInfo2} alt="Magic Arrows" />
          </li>
          <li>
            <h3>
              {language === "en"
                ? "Notes :"
                : "Notez que :"}
            </h3>
          </li>
          {language === "en" ? (
            <li>
              Sagittarius is IMMUNE to PIERCE DMG. <br /> It is recommended to
              have your Executionner take the Flame protection, and the Frost
              protection to your healer. The other classes can take any
              blessing.
            </li>
          ) : (
            <li>
              Sagittarius est immunisée aux dégats persée. <br /> Il est
              conseillé de faire prendre la Flame protection à l'Executionner,
              et la Frost protection au Healer. Les autres classes peuvent
              prendre ce qu'elles veulent.
            </li>
          )}
          <li>
            <img src={sagiInfo3} alt="Elemental Protections" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sagittarius;