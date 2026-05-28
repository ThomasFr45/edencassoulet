import './awaClass.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
import awaClassGeneral from '../../../content/awaClassGeneral';
import awaClass from '../../../content/awaClass';
import rak from '../../../content/images/rakshasa.webp'

const AwaClass = () => {
    const [ awaClassGenInfos ] = awaClassGeneral;
    const { language } = useContext(MyContext);
    return (
        <div className='awaClassContainer'>
            <h1 className='awaClassTitle'>{language === 'fr' ? 'Classes Éveillées' : 'Awaken Classes'}</h1>
            <div className='awaClassGeneral'>
                {language === 'fr' ? awaClassGenInfos.fr.split('\n').map(line => <p>{line}</p>) : 'Not translated yet'}
            </div>
            <div className='awaClassList'>
                {awaClass.map(one => <Link to={one.name}>
                    <div className='awaClassCard'>
                        <h4 className='awaClassCardTitle'>~ {one.name} ~</h4>
                        <img src={one.image} alt="" className='awaClassImage'/>
                        <p className='awaClassBase'>{one.base}</p>
                    </div>
                </Link>)}
            </div>
        </div>
    )
};

export default AwaClass;