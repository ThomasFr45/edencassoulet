import dDoor from '../../../content/dDoor';
import './dDoor.css';
import { useState } from 'react';

const Ddoor = () => {
    const localTime = new Date();
    const serverTimeZone = "Canada/Eastern"
    const serverTime = new Intl.DateTimeFormat('en-US', {
        timeZone: serverTimeZone,
        dateStyle: 'full',
        timeStyle: 'full',
    }).format(localTime)
    const day = serverTime.split(',')[0];
    const [ selected, setSelected ] = useState(day)
    const handleDaySelection = (clickedDay) => {
        setSelected(clickedDay);
        return;
    };
    return (
        <div>
            <div className='weekContainer'>
                <div className={selected === 'Monday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Monday")
                }}>Monday</div>
                <div className={selected === 'Tuesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Tuesday")
                }}>Tuesday</div>
                <div className={selected === 'Wednesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Wednesday")
                }}>Wednesday</div>
                <div className={selected === 'Thursday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Thursday")
                }}>Thursday</div>
                <div className={selected === 'Friday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Friday")
                }}>Friday</div>
                <div className={selected === 'Saturday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Saturday")
                }}>Saturday</div>
                <div className={selected === 'Sunday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Sunday")
                }}>Sunday</div>
            </div>
        </div>
    )
};
// weekDaySelected
export default Ddoor;