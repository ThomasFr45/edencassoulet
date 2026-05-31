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
        Monday:'Not today \n Pas aujoud\'hui',
        Tuesday:'Multiplayer dungeons',
        Wednesday:'Trials',
        Thursday:'Aven',
        Friday:'Aven',
        Saturday:'Roksha',
        Sunday:'Not today \n Pas aujoud\'hui',
    },
    {
        lv:'80',
        img1:highcommon,
        img2:highuncommon,
        img3:highrare,
        img4:highepic,
        img5:highlegendary,
        img6:highmythic,
        Monday:'Trials',
        Tuesday:'Trials',
        Wednesday:'Trials',
        Thursday:'Trials',
        Friday:'Trials',
        Saturday:'Trials',
        Sunday:'Trials',
    }
];

export default dDoor;