import CcBossHeader from "./BossHeader";
import bossImg from "../../../content/images/celestialCorridor/leoBoss.png";
import "./ccBoss.css";
import leoInfo1 from "../../../content/images/celestialCorridor/leoInfo1.png";
import leoInfo2 from "../../../content/images/celestialCorridor/leoInfo2.png";
import MyContext from '../../../context/MyContext';
import { useContext } from 'react';

const Leo = () => {
    const { language } = useContext(MyContext);
  let teamComp = {
    healer: "Adjudicator / Totem Master / Paladin",
    debuffer: "Berserker",
    dps1: "Asura",
    dps2: "Executionner",
    dps3: "Assassin",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Leo"
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
            <li>
              1. Leo has 2 clones around him, one on the left and one on the
              right. They will use the same attacks as Leo. As long as they are
              in their prisons you can ignore them.
            </li>
          ) : (
            <li>
              1. Leo à deux clones autours de lui, un à droite et un à gauche.
              Ils utiliseront les mêmes attaques que Leo. Tant qu'ils sont dans
              leur cage, vous pouvez les ignorer.
            </li>
          )}
          {language === "en" ? (
            <li>
              2. Around 80% HP, Leo will start using "Pack Leader". When the
              skill is active, a 20 second times begins, after that, the clones
              will be freed. You must bring them to their prisons. <br /> If you
              don't take them back to their prisons in less than 15 seconds, the
              party gets wiped. <br /> Keep in mind that the clones can't fit in
              the same prison, you have to keep them separated. 2 different
              persons will have to take aggro of the clones to take them to
              their prisons.
            </li>
          ) : (
            <li>
              2. Vers 80% HP, Leo utilisera "Pack Leader". Quand cette
              compétence est active, un compte à rebours de 20 secondes sera
              lancé, après quoi, les clones seront libérés. Ils faut les ramener
              dans leurs cages respectives. <br /> Si vous ne les ramenez pas
              dans leurs cages en moins de 15 secondes, le groupe sera WIPE.{" "}
              <br /> NOTEZ que les clones ne peuvent pas être mis dans la même
              prison. Il faudra donc que deux personne différentes prennent
              l'aggro pour les séparer et les enmener dans leur PROPRE CAGE.
            </li>
          )}
          {language === "en" ? (
            <li>
              3. Around 50% HP, Leo will start to use "Pack Boy". This skill
              will be up for 5 seconds. When the skill is up, attacking Leo will
              give him "stacks". Each stacks will give him : DMG DEALT +3 % and
              DMG TAKEN -2%. This effect can be stacked up to 50 times, make
              sure you don't stack it too much !
            </li>
          ) : (
            <li>
              3. Vers 50% HP, Leo utilisera "Pack Boy". Cette compétence restera
              active 5 secondes, pendant lesquelles il "stackera" à chaque fois
              qu'il sera attaqué. Une stack lui donnera : DMG DEALT + 3% et DMG
              TAKEN - 2%. Cet effet peut être stacké 50 fois, il est donc
              conseillé d'arrêter de taper quand il utilise sa compétence.
            </li>
          )}
          <li>
            <img src={leoInfo1} alt="" />
            <br />
            <img src={leoInfo2} alt="" />
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
              Leo is IMMUNE to SLASH DMG. <br /> Leo clone's are immune to every
              DMG. You can kill them with a Time totem, however they will
              respawn instantly. <br /> It is recommended that you have as much
              SLASH resistance as possible.
            </li>
          ) : (
            <li>
              Leo est immunisé aux dégâts SLASH. <br /> Les clones sont
              immunisés à tout types de dégats. Vous pouvez les tuer avec un
              assassin ou un Time Totem, mais ils vont respawn directement.
              <br /> Il est conseillé d'avoir un maximum de résistance au slash.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Leo;