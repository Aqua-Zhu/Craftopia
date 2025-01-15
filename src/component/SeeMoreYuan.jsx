import { useState } from "react";


export default function SeeMoreYuan({ text, imgBall, href }) {

    const [animationStage, setAnimationStage] = useState(0); // 用於控制動畫的階段

    const handleClick = (e) => {
        e.preventDefault();

        // 觸發第一階段動畫
        setAnimationStage(1);

        // 第二階段動畫
        setTimeout(() => {
            setAnimationStage(2);
        }, 300);

        // 第三階段動畫
        setTimeout(() => {
            setAnimationStage(3);
        }, 700);

        // 跳轉到新的頁面
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    };

    
    return (
        
            <a
                className={`seemore-Btn ${animationStage >= 1 ? 'shot' : ''}`}
                href={href}
                onClick={handleClick}
            >
                <img
                    className={`ball ${animationStage === 3 ? 'transform-delay2' : ''}`}
                    src={imgBall}
                    alt=""
                />
                <p
                    className={`font ${animationStage >= 2 ? 'transform-delay' : ''
                        } ${animationStage === 3 ? 'transform-delay2' : ''}`}
                >
                    {text}
                </p>
                <img
                    className={`arr ${animationStage >= 2 ? 'transform-delay' : ''
                        } ${animationStage === 3 ? 'transform-delay2' : ''}`}
                    src="./images/icon-tag/type=arrowRight_bold.svg"
                    alt=""
                />
            </a>
    )
}
