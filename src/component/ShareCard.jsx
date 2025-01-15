export default function ShareCard({expInfoName,imgSrc,avatarSrc,levelSrc,shareTime,expItem,expTxt}) {
    return (
        <div className="Exp">
            <div className="expPic">
                <img src={imgSrc} alt="" />
            </div>
            <div className="expContent">
                <div className="expInfo">
                    <img src={avatarSrc} alt="" />
                    <p>{expInfoName}</p>
                    <img src={levelSrc} alt="" />
                </div>
                <div className="expDate">
                    <p>{shareTime}</p>
                    {/* <span>‧</span> */}
                    <p className='expItem'>課程項目：{expItem}</p>
                </div>
                <p className="expTxt">{expTxt}</p>
            </div>
        </div>
        
    )
}