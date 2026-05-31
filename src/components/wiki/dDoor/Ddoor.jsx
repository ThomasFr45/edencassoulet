import dDoor from '../../../content/dDoor';
import './dDoor.css';
import { useState, useContext } from 'react';
import myContext from '../../../context/MyContext';

const Ddoor = () => {
    const { language } = useContext(myContext);
    const localTime = new Date();
    const serverTimeZone = "Canada/Eastern"
    const serverTime = new Intl.DateTimeFormat('en-US', {
        timeZone: serverTimeZone,
        dateStyle: 'full',
        timeStyle: 'full',
    }).format(localTime)
    const day = serverTime.split(',')[0];
    const [ selected, setSelected ] = useState(day);
    const handleDaySelection = (clickedDay, dayId) => {
        setSelected(clickedDay);
        return;
    };
    return (
        <div>
            <div className='weekContainer'>
                <div className={selected === 'Monday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Monday",0)
                }}>Monday</div>
                <div className={selected === 'Tuesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Tuesday",1)
                }}>Tuesday</div>
                <div className={selected === 'Wednesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Wednesday",2)
                }}>Wednesday</div>
                <div className={selected === 'Thursday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Thursday",3)
                }}>Thursday</div>
                <div className={selected === 'Friday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Friday",4)
                }}>Friday</div>
                <div className={selected === 'Saturday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Saturday",5)
                }}>Saturday</div>
                <div className={selected === 'Sunday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Sunday",6)
                }}>Sunday</div>
            </div>
            <div className='dayInfos'>
                <p className='dayFirstInfo'>DoubleDoor (Lv70): {language === 'en' ? dDoor[0][selected].split('\n')[0] : dDoor[0][selected].split('\n')[1] ? dDoor[0][selected].split('\n')[1] : dDoor[0][selected].split('\n')[0]}</p>
                <p>Ma'Kai (Lv80): {language === 'en' ? dDoor[1][selected].split('\n')[0] : dDoor[1][selected].split('\n')[1]  ? dDoor[1][selected].split('\n')[1] : dDoor[1][selected].split('\n')[0]}</p>
            </div>
        </div>
    )
};
// weekDaySelected
export default Ddoor;