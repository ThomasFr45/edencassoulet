import tkContent from "../../../content/tkContent";
import './bossPage.css';
import { animateScroll } from 'react-scroll';

const BossPage = ({ selected }) => {
    const options = {
  duration: 500,
  smooth: true,
};
animateScroll.scrollTo(750, options);
    return (
        <div className="tkBossContainer">
            <h1 className='tkBossName'>~ {tkContent[selected].name} ~</h1>
            <p className="tkBossBp">BP: {tkContent[selected].bp}</p>
            <div className="tkBossImages">
                <img src={tkContent[selected].skill1} alt="" />
                <img src={tkContent[selected].skill2} alt="" />
                <img src={tkContent[selected].skill3} alt="" />
                <img src={tkContent[selected].skill4} alt="" />
                <img src={tkContent[selected].skill5} alt="" />
                <img src={tkContent[selected].skill6} alt="" />
            </div>
            <div className="tkBossInfos">
                {tkContent[selected].infos.split('\n').map( line => <p>{line}</p>)}
            </div>
        </div>
    )
}

export default BossPage;