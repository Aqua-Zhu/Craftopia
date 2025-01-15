import Hearttoggle from "./Hearttoggle";

export default function ClassCard({classImage,classLevel,classTime,classTitle,classStoreName,classPrice}) {


    return (
        <>
            <div className="classCard">
                <a href="#">
                    <figure className="classPhoto">
                        <img className="Photo" src={classImage} alt="" />
                    </figure>
                    <div className="classTag">
                        <p className="classLevel">{classLevel}</p>
                        <p className="classTime">{classTime}</p>
                    </div>
                    <div className="classTitle">
                        <h3>{classTitle}</h3>
                        <span></span>
                    </div>
                    <div className="classPrice">
                        <p className="classStoreName">{classStoreName}</p>
                        <p className="classPrice">{classPrice}</p>
                    </div>
                </a>
                {/* <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure> */}
                <Hearttoggle heartFillId='heartfill5' heartStrikeId = 'heartstrike5' />
            </div>
        </>
    )
}