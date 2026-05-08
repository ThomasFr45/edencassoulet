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
        </div>
    );
}

export default Tk;