import './awaClass.css';
import { useContext } from 'react';
import MyContext from '../../../context/MyContext';
import awaClassGeneral from '../../../content/awaClassGeneral';

const AwaClass = () => {
    const [ awaClassGenInfos ] = awaClassGeneral;
    const { language } = useContext(MyContext);
    return (
        <div className='awaClassContainer'>
            <h1 className='awaClassTitle'>{language === 'fr' ? 'Classes Éveillées' : 'Awaken Classes'}</h1>
            <div className='awaClassGeneral'>
                {language === 'fr' ? awaClassGenInfos.fr.split('\n').map(line => <p>{line}</p>) : 'Not translated yet'}
            </div>
        </div>
    )
};

export default AwaClass;