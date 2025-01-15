export default function ReserveCard({ imgSrc, stateTag, title, dateTime, attendees, classType, isFinished, buttonText }) {
    return (
        <div className={`reserve-row ${isFinished ? 'finish' : ''}`}>
            <div className="rowIMG">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="reserve-content">
                <div className="txt">
                    <p className="tag-state">{stateTag}</p>
                    <h3>{title}</h3>
                    <p>{dateTime}。{attendees}</p>
                    <p className="class-item">課程內容：{classType}</p>
                </div>
            </div>
            <div className="buttonWrap">
                <button className="btn-reserve">{buttonText}</button>
            </div>
        </div>
    )
}