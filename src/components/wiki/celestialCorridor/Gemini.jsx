import CcBossHeader from "./BossHeader";
import bossImg from "../../../content/images/celestialCorridor/geminiBoss.png";
import "./ccBoss.css";
import geminiInfo from "../../../content/images/celestialCorridor/geminiInfo.png";
import geminiInfo2 from "../../../content/images/celestialCorridor/geminiInfo2.png";
import geminiStatues1 from "../../../content/images/celestialCorridor/geminiStatues1.png";
import geminiStatues2 from "../../../content/images/celestialCorridor/geminiStatues2.png";
import geminiStatues3 from "../../../content/images/celestialCorridor/geminiStatues3.png";
import geminiStatues4 from "../../../content/images/celestialCorridor/geminiStatues4.png";
import geminiInfo3 from "../../../content/images/celestialCorridor/geminiInfo3.png";
import MyContext from '../../../context/MyContext';
import { useContext } from 'react';

const Gemini = () => {
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
        name="Gemini"
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
          <li>
            {language === "en"
              ? "1. Holy Twin and Dark Twin must be kept away from each other, else they will drain 5% of your MP per second."
              : `1. Holy Twin et Dark Twin doivent être séparés (En utilisant la poussée du Berserker par exemple), sinon ils vous retireront 5% de vos MP par secondes.`}
          </li>
          <li>
            2.{" "}
            {language === "en"
              ? "There are different stages"
              : 'Le donjon se déroule en plusieurs "étapes"'}{" "}
            :
          </li>
          <li>
            <img src={geminiInfo} alt="The Dark Swin Spirit" />
          </li>
          <li>
            3.{" "}
            {language === "en"
              ? "There are 4 different statues you have to disable when they shoot ice or fire balls."
              : "Il y a 4 statues différentes, qu'il faudra désactiver lorsqu'elles envoie du feu ou de la glace."}
          </li>
          <li>
            <img src={geminiInfo2} alt="" />
          </li>
          <li>
            {language === "en"
              ? "To turn them off, you have to go interract with the corresponding statue."
              : "Pour les désactiver, il faut aller à la statue qui correspond"}{" "}
            :
          </li>
          {language === "en" ? (
            <li>
              Statue 1 controls Statue 4 {<br />} Statue 2 controls Statue 3{" "}
              {<br />} Statue 3 controls Statue 1 {<br />} Statue 4 controls
              Statue 2
            </li>
          ) : (
            <li>
              La statue 1 contrôle la statue 4 {<br />} La statue 2 contrôle la
              statue 3 {<br />} La statue 3 contrôle la statue 1 {<br />} La
              statue 4 contrôle la statue 2
            </li>
          )}
          <li>
            <img src={geminiStatues1} alt="Statues" />
          </li>
          <li>
            <img src={geminiStatues2} alt="Statues" />
          </li>
          <li>
            <img src={geminiStatues3} alt="Statues" />
          </li>
          <li>
            <img src={geminiStatues4} alt="Statues" />
          </li>
          {language === "en" ? (
            <li>
              4. "Dark Twin" will give you the "Enter Darkness" debuff. This
              debuff will stay on you 2s, and then summon a purple pool at your
              feet. It deals high damage over time, be sure to avoid it. It is
              recommended to get away from your teammates when you get the
              debuff.
            </li>
          ) : (
            <li>
              4. "Dark Twin" vous appliquera un débuff : "Enter Darkness". Ce
              débuff restera 2s, après quoi une flaque violette apparaîtra à vos
              pieds. Elle fera de gros dégâts à vous et vos alliés. Essayez de
              vous éloigner du groupe quand vous avez ce débuff !
            </li>
          )}
          <li>
            <img src={geminiInfo3} alt="Enter Darkness" />
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
              Gemini is immune to DARK DMG. <br /> There will be a zone
              announcement every time a statue is activated, pay attention to
              it, it will tell you which element to active too. <br /> "Holy
              Twin" can pull you in and stun you.
              <br /> If you kill one of the twins, you must kill the other
              within 30s.{" "}
            </li>
          ) : (
            <li>
              Gemini est immunisé aux dégâts de type DARK. <br /> Il y aura un
              message en zone à chaque fois qu'une statue est activée, le
              message vous fera savoir quel élément est activé. Il est
              recommandé que tout les membres du groupes, sauf le healer,
              courrent vers une statue pour les activer au plus vite. <br />{" "}
              "Light Twin" peut vous tirer vers lui et vous stun. <br /> Les
              Twins doivent être tués à 30 secondes maximum d'intervale. <br />{" "}
              Il est conseillé d'avoir entre 70 et 85 de résistances au Holy et
              Dark.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Gemini;