import highcommon from './images/dDoor/80common.png';
import highuncommon from './images/dDoor/80uncommon.png';
import highrare from './images/dDoor/80rare.png';
import highepic from './images/dDoor/80epic.png';
import highlegendary from './images/dDoor/80legendary.png';
import highmythic from './images/dDoor/80common.png';
import lowcommon from './images/dDoor/70common.png';
import lowuncommon from './images/dDoor/70uncommon.png';
import lowrare from './images/dDoor/70rare.png';
import lowepic from './images/dDoor/70epic.png';
import lowlegendary from './images/dDoor/70legendary.png';
import lowmythic from './images/dDoor/70common.png';

const dDoor = [
    {
        lv:'70',
        img1:lowcommon,
        img2:lowuncommon,
        img3:lowrare,
        img4:lowepic,
        img5:lowlegendary,
        img6:lowmythic,
        day1:'N/A',
        day2:'Multiplayer dungeons',
        day3:'Trials',
        day4:'Mats',
        day5:'Aven',
        day6:'Roksha',
        day7:'N/A',
    },
    {
        lv:'80',
        img1:highcommon,
        img2:highuncommon,
        img3:highrare,
        img4:highepic,
        img5:highlegendary,
        img6:highmythic,
        day1:'Trials',
        day2:'Trials',
        day3:'Trials',
        day4:'Trials / Mats',
        day5:'Trials',
        day6:'Trials',
        day7:'Trials',
    }
];

export default dDoor;