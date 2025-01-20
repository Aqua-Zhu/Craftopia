import { useEffect, useRef, useState } from "react";
import swal from 'sweetalert';


export default function Hearttoggle2({ defaultChecked = false }) {



    // 使用 useState 來控制愛心的狀態
    const [isLiked, setIsLiked] = useState(defaultChecked);

    // 初始化時根據 defaultChecked 設定狀態
    // useEffect(() => {
    //     setIsLiked(defaultChecked);
    // }, [defaultChecked]);

    // 點擊愛心的處理邏輯
    // const handleHeartClick = () => {
    //     const newLikedState = !isLiked; // 切換狀態
    //     setIsLiked(newLikedState);

    //     // 彈窗提示
    //     if (newLikedState) {
    //         swal('已加入最愛', { buttons: false, timer: 2500 });
    //     } else {
    //         swal('已取消最愛', { buttons: false, timer: 2500 });
    //     }
    // };


    const handleHeartClick = () => {
        setIsLiked((prevLiked) => {
            const newLikedState = !prevLiked;

            // 彈窗提示
            if (newLikedState) {

                swal("已加入最愛", { buttons: false, timer: 2500 });
                
                setTimeout(() => {
                    const overlay = document.querySelector('.swal-overlay');
                    if (overlay) {
                        overlay.remove();
                    }
                }, 2500);
                    
                } else {

                    swal("已取消最愛", { buttons: false, timer: 2500 });
                    setTimeout(() => {
                        const overlay = document.querySelector('.swal-overlay');
                        if (overlay) {
                            overlay.remove();
                        }
                    }, 2500);
                }
            console.log(newLikedState);
                return newLikedState; 

            });
    }





    return (
        <figure className="icons-heart2" onClick={handleHeartClick}>
            {/* 根據 isLiked 狀態切換顯示的圖片 */}
            {!isLiked ? (
                <img
                    id="heartStrike"
                    src="./images/icons-heart.png"
                    alt="未點擊"
                />
            ) : (
                <img
                    id="heartFill"
                    src="./images/icons-heart-hover.svg"
                    alt="已點擊"
                />
            )}
        </figure>

    );
}