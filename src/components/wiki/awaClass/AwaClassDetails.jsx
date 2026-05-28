import './awaClassDetails.css';
import { useParams } from 'react-router-dom';
import awaClass from '../../../content/awaClass';
import { useContext } from 'react';
import MyContext from '../../../context/MyContext';

const AwaClassDetails = () => {
    const awaClassId = useParams().class;
    const { language } = useContext(MyContext);
    return (
        <div>
            <h1 className='awaClassTitle'>{language === 'en' ? 'Awaken Class' : 'Classe Éveillée'}</h1>
            <div className='awaClassDetailSubtitle'>
                <img src={awaClass[awaClassId].image} alt="" />
                <h2 className='awaClassTitle'>{awaClass[awaClassId].name}</h2>
                <img src={awaClass[awaClassId].image} alt="" />
            </div>
            <div className='awaClassDetailContainer'>
                <p>Voici les objectifs des différentes quêtes :</p>
                <div className='awaClassObjectivesContainer'>
                    <div className='awaClassObjectives'>
                            <p>Quête 1 :</p>
                            <ul>
                                {awaClass[awaClassId].quest1.split('\n').map(one => <li>{one}</li>)}
                            </ul>
                        </div>
                        <div className='awaClassObjectives'>
                            <p>Quête 2 :</p>
                            <ul>
                                {awaClass[awaClassId].quest2.split('\n').map(one => <li>{one}</li>)}
                            </ul>
                        </div>
                        <div className='awaClassObjectives'>
                            <p>Quête 3 :</p>
                            <ul>
                                {awaClass[awaClassId].quest3.split('\n').map(one => <li>{one}</li>)}
                            </ul>
                       </div>
                </div>
            </div>
        </div>
    );
}

export default AwaClassDetails;
{/* <ul className='awaClassObjectives'>
                        <li>Quête 1 :</li>
                        {awaClass[awaClassId].quest1.split('\n').map(one => <li>{one}</li>)}
                        <li>Quête 2 :</li>
                        {awaClass[awaClassId].quest2.split('\n').map(one => <li>{one}</li>)}
                        <li>Quête 3 :</li>
                        {awaClass[awaClassId].quest3.split('\n').map(one => <li>{one}</li>)}
                    </ul>  */}