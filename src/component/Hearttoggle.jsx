import { useEffect, useRef } from "react";
import swal from 'sweetalert';


export default function Hearttoggle({ heartFillId, heartStrikeId , defaultChecked = false}) {

    let strikeheartRef = useRef(null);
    let fillheartRef = useRef(null);
    let CheckClass = () => {
        if (fillheartRef.current.classList.contains('click-h')) {
            swal('已加入最愛',
                 {buttons: false
                , timer: 2500,
            });
            setTimeout(() => {
                const overlay = document.querySelector('.swal-overlay');
                if (overlay) {
                    overlay.remove();
                }
            }, 2500);

        } else {
            swal('已取消最愛', {
                buttons: false, timer: 2500,
            });
            setTimeout(() => {
                const overlay = document.querySelector('.swal-overlay');
                if (overlay) {
                    overlay.remove();
                }
            }, 2500);
        }
    }

    useEffect(() => {
        if (defaultChecked && fillheartRef.current && strikeheartRef.current) {
            fillheartRef.current.classList.add('click-h');
            strikeheartRef.current.classList.add('click-h');
        }
    }, [defaultChecked]);

    
    return (
        <>
            <figure className="icons-heart" onClick={() => {
                fillheartRef.current.classList.toggle('click-h');
                strikeheartRef.current.classList.toggle('click-h');
                CheckClass();
            }}>
                <img ref={strikeheartRef} id={heartStrikeId} src="./images/icons-heart.png" alt="" />
                <img ref={fillheartRef} id={heartFillId} src="./images/icons-heart-hover.svg" alt="" />
            </figure>
        </>
    )
}