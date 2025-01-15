import { useState } from "react";

export default function ShowQa({ data }) {



    const [qaData, setQaData] = useState(data);


    // toDoList的方式：適合多選，可以一次展開多個選項，不會自動收合
    const toggleClick = (id) => {
        setQaData(qaData.map((item) => {
            return item.id === id
                ? { ...item, isClicked: !item.isClicked }
                : item;
        }));
    };

    // 建立切換 雙向展開收合 的函式，但會有一點暈
    // const toggleClick = (id) => {
    //     setQaData(qaData.map((data) => {
    //         return {
    //             ...data,
    //             isClicked: data.id === id ? !data.isClicked : false,
    //         };
    //     }))
    // }

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
                                <div className={item.isClicked ? 'question show' : 'question'} onClick={() => toggleClick(item.id)}>
                                    <p>{item.question}</p>

                                    <div className={item.isClicked ? 'icon-arrow show' : 'icon-arrow'}>

                                        <img className="QA-arrowDown" src="./images/icon-tag/type=arrowDown_bold.svg" alt="" />


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

                    );
                })
            }
        </>
    );
}




