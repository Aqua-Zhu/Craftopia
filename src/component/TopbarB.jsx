import { useState } from 'react';
import { Link } from "react-router-dom"
import ModalLogIn from "../component/ModalLogIn"; // 引入 ModalLogIn 元件
export default function TopbarB() {

    // 控制 ModalLogIn 開啟狀態
    const [isModalLogInOpen, setIsModalLogInOpen] = useState(false);
    const handleOpenModalLogIn = () => {
        setIsModalLogInOpen(true);  // 開啟 ModalLogIn
    };
    const handleCloseModalLogIn = () => {
        setIsModalLogInOpen(false);  // 關閉 ModalLogIn
    };
    return (
        <>
            <div id="topbar-b">
                <h1 className="logo">
                    <Link to="/" >
                        <img className="logo-b-b" src="./images/logo.svg" alt="" />
                    </Link>
                </h1>

                {/* 漢堡 */}
                <nav className="navigation">
                    <ul>
                        {/* ModalLogIn 元件 */}
                        <ModalLogIn isOpen={isModalLogInOpen} onClose={handleCloseModalLogIn} />
                        <li className="secondary3"><Link to="/mapmain"><img src="./images/findshop-btn.svg" alt="發掘店家" /></Link></li>
                        <li style={{cursor:"pointer"}} className="secondary2" onClick={handleOpenModalLogIn}><img src="./images/member-btn.svg" alt="會員中心" /></li>
                        <li className="secondary1"><Link to='/qa'><img src="./images/faq-btn.svg" alt="常見問題" /></Link></li>
                        <li className="secondary4 first"><Link to='/search'><img src="./images/search-btn.svg" alt="搜尋課程" /></Link></li>
                    </ul>

                    {/* 漢堡按鈕  */}
                    <button className="hamburger" onClick={() => {
                        let hamburgerStyle = document.querySelector('.hamburger');
                        hamburgerStyle.classList.toggle('click');
                        for (let i = 1; i <= 4; i++) {
                            let blockMove = document.querySelector(`.secondary${i}`);
                            blockMove.classList.toggle(`show${i}`)
                        }

                    }}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                </nav>

            </div>
        </>
    )
}
