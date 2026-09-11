import CcBossHeader from "./BossHeader";
import bossImg from "../../../content/images/celestialCorridor/aquaBoss.png";
import './ccBoss.css';
import aquariusInfo1 from "../../../content/images/celestialCorridor/aquariusInfo1.png";
import aquariusInfo2 from "../../../content/images/celestialCorridor/aquariusInfo2.png";
import aquariusInfo3 from "../../../content/images/celestialCorridor/aquariusInfo3.png";
import aquariusInfo4 from "../../../content/images/celestialCorridor/aquariusInfo4.png";
import aquariusInfo5 from "../../../content/images/celestialCorridor/aquariusInfo5.png";
import MyContext from '../../../context/MyContext';
import { useContext } from 'react';

const Aquarius = () => {
  let teamComp= {healer:"Adjudicator", debuffer:"Trainer", dps1:'Riffletear', dps2:'Annihilator', dps3:'Annihilator'}
  const { language } = useContext(MyContext);
  return (
    <div className="ccBossContainer">
      <CcBossHeader name='Libra' solo={false} dmg='N/A' comp={teamComp} img={bossImg}/>
      <div className="ccBossConcent">
        <h3>{language === 'en' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
          <li>1. {language === 'en' ? "Aquarius will push you back if you get too close." : "Aquarius vous repoussera si vous vous approchez trop."}</li>
          <li><img src={aquariusInfo1} alt="Too Close" /></li>
          <li>2. "My Ice is Fatal" : {language === 'en' ? "While you are fighting her, pay attention to the ground, mounds will appear. There will be a circle around the mound, make sure not to be in it (If you are in it, you will see a bomb on your head). If you stay in the circle, you will die." : "Pendant le combat, des tas de sable vont apparaître, ils auront une zone autours d'eux, si vous êtes dedans, vous aurez une bombe au dessus de la tête. Sortez de la zone avant qu'elle ne disparaisse, sans quoi vous mourrez."}</li>
          <li><img src={aquariusInfo2} alt="Bombes" /></li>
          <li>3. "Targeted Ice Barrage" : {language === 'en' ? "Around 75-60% HP, Aquarius will begin to ice the player with aggro, if you are too close to him, or on her attack path, you will be iced too. Make sure to stay away." : "Vers 75-60% HP, Aquarius va geler le joueur qu'elle cible et tout ceux qui sont proche de lui ou sur la trajectoire."}</li>
          <li><img src={aquariusInfo3} alt="Oh Cold" /></li>
          <li>4. "Purification Wave" : {language === 'en' ? "Aquarius will use this skill to debuff the whole party." : "Une AoE que Aquarius utilise régulièrement, elle vous retirera vos buffs."}</li>
          <li><img src={aquariusInfo4} alt="Debuff" /></li>
          <li>5. {language === 'en' ? "Around 80-70% HP, Aquarius will begin to summun a 'Healing Ice'. You have to kill the Healing Ice as fast as possible, however it can only be killed with FIRE DMG. Your annihilators will have to switch to fire ammo and kill it." : "Vers 80-70% HP, Aquarius invoquera une 'Healing Ice', qui ne peut être tué qu'avec des dégats de feu, ou un Time Totem. Les annihilateurs devront donc passer sur des dégats de feu et la tuer le plus rapidement possible."}</li>
          <li><h3>{language === 'en' ? "Notes :" : "Notez que :"}</h3></li>
          <li>{language === 'en' ? "Aquarius is immune to ICE DMG" : "Aquarius est immunisée aux dégats ICE."} <br/> {language === 'en' ? "As long as the 'Healing Ice' is alive, Aquarius will heal herself" : "Tant que 'Healing Ice' est en vie, Aquarius se soignera."} <br/> {localStorage.getItem('language') === 'EN' ? "If you take aggro but you are not supposed to, you can use smoke bombs !" :"Si vous avez l'aggro, et que vous n'êtes pas sencé l'avoir, vous pouvez utiliser des smoke bombs !"}</li>
          <li><img src={aquariusInfo5} alt="Positionning" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Aquarius;