import './guild.css';

const Guild = () => {
    return (
    <div>
        <div className='guildTitle'>
            <img src='https://i.imgur.com/umJ9MGa.jpeg' alt="" className='guildImage'/>
            <h1 className='guildTitleText'>CassouletGaming</h1>
            <img src='https://i.imgur.com/umJ9MGa.jpeg' alt="" className='guildImage'/>
        </div>
        <div>
            <p className='guildText'>
                Notre guilde à été crée il y a maintenant plusieurs années et n'a pas toujours été nommée ainsi (Shinkoku par exemple). Mais malgré tout nous gardons toujours les mêmes motivations et ambitions : Avancer tout en s'amusant, et relever les défis que l'opposition nous imposera.
            </p>
            <p className='guildText'>Aujourd'hui notre guilde est toujours constituée de quelques membres motivés, certains étant avec nous depuis longtemps.</p>
            <p className='guildText'>Les plus anciens encore parmis nous sont : <br/>KoopDuMonde <br/> ElMaou / 0MaouSama0 / Ky0ryuu <br/> Sayo <br/> Sheihiko</p>
            <p className='guildText'>D'autre nous ont rejoins au cours de notre aventure dernièrement et ont pu faire leurs preuves : <br/> Yuroichi <br/> Pump <br/> </p>
            <p className='guildText'>Mais beaucoup sont tombés au combat, une petite pensée pour eux : <br/> Nado / Nadoru <br/> Kiros <br/> Cyprès <br/> Astrée <br/> Skylix <br/> Sony <br/> Homante <br/> GrandLoup <br/> Et plein d'autres encore.</p>
        </div>
    </div>
    );
}

export default Guild;