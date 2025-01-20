import { useState } from "react";
import "../component/style_showQa.css";

export default function ShowQaClass() {


    // 可以修改資料的方式
    const [qaData, setQaData] = useState([
        {
            id: 1,
            question: '需要自備工具嗎？',
            ans: '上課教室提供個人獨立金工桌，以及整套的金工工具設備供學員使用，不需要自備任何工具，僅需攜帶一顆愉快的心即可！',
            isClicked: false,
        },
        {
            id: 2,
            question: '我沒有經驗也可以報名嗎？',
            ans: '只需要帶著一顆開放的心與充分的睡眠就可以報名喔!我們有專業的講師協助學員們完成自己的作品，老師們的授課經驗3年以上，保證新手都能輕易理解~動手玩創意!如果會擔心自己的速度跟不上，我們工作室有提供前導影片，只需要在付款完成後與我們聯絡就可以獲得影片連結~事先預習會操作的器具與工作室的安全須知~!',
            isClicked: false,
        },
        {
            id: 3,
            question: '完成後的成品多久可以拿？',
            ans: '若當天完成，可以直接領取成品，我們有提供包裝服務，可以現場加購。若當天無法完成成品，會由講師協助完成，我們有提供宅配、超商、實體門市取貨。',
            isClicked: false,
        },
        {
            id: 4,
            question: '報名費有包含材料費嗎？',
            ans: '本次課程已含基本材料費不含包裝費，當天可加購包裝服務，也有季節限定的裝飾寶石，可以加購讓成品更亮眼哦~!如果需要精緻的花束作搭配，我們有跟森樣花藝合作，只要出示購買構成的證明，最多可以享有9折折扣歐~',
            isClicked: false,
        },
        
    ]);


    // toDoList的方式：適合多選，可以一次展開多個選項，不會自動收合
    const toggleClick = (id) => {
        setQaData(qaData.map((data) => {
            return data.id === id
                ? { ...data, isClicked: !data.isClicked }
                : data
        }))
    }

    return (
        <>
            {
                qaData.map((item, index) => {
                    return (

                        <li className={`list-row ${index % 2 === 1 ? 'light' : ''}`} key={item.id}>
                            <div>
                                <p className="quest-mark">?</p>
                            </div>
                            <div className="QAset" >
                                <div className={item.isClicked ? 'question show' : 'question'} onClick={(e) => {
                                        e.stopPropagation(); // 防止冒泡
                                    toggleClick(item.id);}}>
                                    <p>{item.question}</p>

                                    <div className={item.isClicked ? 'icon-arrow show' : 'icon-arrow'}>
                                        <img className="QA-arrowDown" src="./images/type=arrowDown_bold.svg" alt="" />
                                    </div>
                                </div>
                                <div className={item.isClicked ? 'ansWrap show' : 'ansWrap'}>

                                    <div className="answer">
                                        <p>
                                            {item.ans}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </li>

                    )
                })
            }
        </>
    )
}

