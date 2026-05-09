import { PiCornersOutLight } from "react-icons/pi";
import "./tk.css"
import { useState } from 'react';
import BossPage from "./BossPage.jsx";

const Tk = () => {
    const [tkSelected, setTkSelected] = useState();
    const handleClick = (boss) => {
        setTkSelected(boss);
        return
    }
    const handleDisplay = () => {
        if (tkSelected) {
            return <BossPage selected={tkSelected}/>
        }
    }
    return (
        <div className="tkBody">
            <h1 className="tkTitle">~ Temple Knight Trial ~</h1>
            <div className="tkInfos">
                <img src="https://i.imgur.com/WWxfDNh.png" alt="Tyrosen" className="tkInfosImage"/>
                <div className="tkInfosText">
                    <p>NPC Name : Tyrosen (x:325, yx275).</p>
                    <p>Lv: 80</p>
                    <p>5 players</p>
                    <p>Title : +10% all stats</p>
                </div>
            </div>
            <div className="tkTips">
                <p>Dans cette instance, vous aurez 5 combats à enchainer, avec un temps limité à 5 minutes à partir du moment ou vous parlez au pnj pour vaincre chaques boss. Pour chacuns de ces combats, il sera nécessaire qu'un des joueurs du groupe prenne le rôle du PNJ pendant le combat contre chacun des boss. De manière générale, il peut être conseillé de passer passer en priorité les gros DPS du groupe sur le premier et deuxième PNJ, le healer sur le 3 ème, et pour les deux derniers il n'y à que peu d'importance.</p>
                <p className="tkTipsBigger">Un joueur ne peut prendre ce rôle qu'une fois par jour, tout le monde devra donc le faire.</p>
            </div>
            <div className="tkBossList">
                <p className={tkSelected === 0 ? 'tkBossSelected1' : 'tkBossSelect1'} onClick={() => handleClick(0)}>Faya</p>
                <p className={tkSelected === 1 ? 'tkBossSelected' : 'tkBossSelect'} onClick={() => handleClick(1)}>Yukari</p>
                <p className={tkSelected === 2 ? 'tkBossSelected' : 'tkBossSelect'} onClick={() => handleClick(2)}>Carol</p>
                <p className={tkSelected === 3 ? 'tkBossSelected' : 'tkBossSelect'} onClick={() => handleClick('3')}>Reeft & Natalie</p>
                <p className={tkSelected === 4 ? 'tkBossSelected5' : 'tkBossSelect5'} onClick={() => handleClick('4')}>Augustus</p>
            </div>
            {tkSelected !== '0' ? handleDisplay() : ''}
        </div>
    );
}

export default Tk;