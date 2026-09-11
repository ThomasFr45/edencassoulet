import CcBossHeader from "./BossHeader";
import bossImg from "../../../content/images/celestialCorridor/LibraBoss.png";
import "./ccBoss.css";
import blessingsImg from "../../../content/images/celestialCorridor/blessings.png";
import MyContext from '../../../context/MyContext';
import { useContext } from 'react';

const Libra = () => {
    const { language } = useContext(MyContext);
  let teamComp = {
    healer: "Adjudicator / Totem Master",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Assassin",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Libra"
        solo={false}
        dmg="Holy, Dark"
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
            <li>{`1. Speak to <The Scales Spirit Guardian> Luna and obtain a blessing. There are 5 blessings, every party members must take a DIFFERENT one.`}</li>
          ) : (
            <li>
              {
                "1. Parlez à <The Scales Spirit Guardian> Luna et prenez une blessing. Il y a 5 blessings, chaque membre du groupe doit en prendre une différente."
              }
            </li>
          )}
          <img src={blessingsImg} alt="" className="ccBossInfoImg" />
          {language === "en" ? (
            <li>{`2. There are 4 different pools representing 4 different elements : Nature, Lightning, Fire and Ice (Turn FX ON).`}</li>
          ) : (
            <li>
              {
                "2. Il y a 4 zones correspondant à des éléments: Nature, Lightning, Fire et Ice (il faut activer les FX pour les voir)."
              }
            </li>
          )}
          {language === "en" ? (
            <li>
              {`Libra will announce two elements in zone chat, 4 party members must split so that 2 people are on each elements Libra announced. When Libra makes an announcement, you have 7s to run to the element. If you do not, party gets wiped.`}{" "}
              <br /> {`The 5th member of the party can stay in the middle.`}{" "}
              <br />{" "}
              {
                "This mechanic starts around 90% HP and will occur every 45 seconds."
              }
            </li>
          ) : (
            <li>
              {
                "Libra annoncera en chat zone 2 elements, 4 des membres du groupe devront se séparer en 2 groupes de 2, et aller sur les éléments cités. Une fois l'annonce faite, vous aurez 7s pour vous placer. Si vous n'êtes pas placé au bout des 7s, le groupe sera wipe."
              }
              <br />
              {"Notez que le 5ème joueur restera au milieu."}
              <br />
              {
                "Cette méchanique commence à partir de 90% HP et ce toutes les 45 secondes."
              }
            </li>
          )}
          {language === "en" ? (
            <li>
              If you die while fighting Libra, you have to speak again to Luna
              and retake your blessing. <br /> If possible, try not to stack on
              your party members, Libra's skills are linear AOE, directed to all
              players.
            </li>
          ) : (
            <li>
              {
                "Si vous mourrez pendant le combat, pensez à reparler à Luna et à reprendre votre blessing."
              }
              <br />
              {
                "Si possible, évitez de tous vous mettre au même endroit, Libra lance ses attaques vers TOUT les membres de groupe en ligne droite, si vous êtes tous au même endroit, vous risquez d'être touché par les attaques destinées aux autres."
              }
            </li>
          )}
          {localStorage.getItem('language') === 'EN' ? <li>Around 40% HP, Libra will summon Dark and Holy
              soldiers, that will attack in a linear path. They will decrease
              your holy and Dark resistances by 15. They can't be killed. <br />{" "}
              It is recommended to have around 70 to 80 holy and dark
              resistances.</li> : <li>
            {
              "Vers 40% hp Libra invoquera des soldats qui attaqueront en ligne droite. Il réduiront vos résistances au Dark et Holy de 15. Il n'est pas possible de les tuer."
            }
            <br />
            {
              "Il est conseillé d'avoir au minimum 70-80 de résistances Holy et Dark."
            }
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Libra;