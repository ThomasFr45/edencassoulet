import "./tk.css"

const Tk = () => {
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
        </div>
    );
}

export default Tk;