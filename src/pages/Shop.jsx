import '../scss/style-shop.scss'
import Topbar from "../component/Topbar";
import Seemore from '../component/Seemore';
import { useEffect, useState } from 'react';
import ModalReview from "../component/ModalReview";
import ToTop from '../component/ToTop';
import ClassCardLatest from '../component/ClassCardLatest';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function Shop() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, [])
    
    // 控制 ModalReview 開啟狀態
    const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);
    const handleOpenModalReview = () => {
        setIsModalReviewOpen(true);  // 開啟 ModalReview
    };
    const handleCloseModalReview = () => {
        setIsModalReviewOpen(false);  // 關閉 ModalReview
    };

    const initialStyle = {
        position: "fixed",
        bottom: "20px",
        right: "10px",
    };


    return (
        <>
        <Helmet>
            <title>小自在工藝空間─Craftopia 藝嶼│一個由手工藝組成的烏托邦</title>
        </Helmet>
            <div id='body'>
                <main>
                    {/* 頁首區 */}
                    <Topbar bannerId='#banner-shop' />
                    { /* banner區 */}
                    <section id="banner-shop" >
                        <figure className="banner"><img src="./images/banner-shop.jpg" alt="" /></figure>
                        <figure><img src="" alt="" /></figure>
                    </section>
                    { /* 店家簡介 */}
                    <div id="introWrapper">
                        <div className="shopSticky" data-aos="fade-right">
                            <section id="shop-intro">
                                <div className="top">
                                    <img src="./images/shop-img.png" alt="" />
                                    <h2>小自在工藝空間</h2>
                                </div>
                                <div className="content">
                                    <img className="line" src="./images/shop-Vector.png" alt="" />
                                    <p><img src="./images/phone.svg" alt="" /> 02-2251-000</p>
                                    <p><img src="./images/locate.svg" alt="" /> 台北市大安區圈圈東路一段179號2樓</p>
                                    <p><img src="./images/Time.svg" alt="" /> 星期二~星期日 <br />11:30~18:00</p>
                                    <img className="line" src="./images/shop-Vector2.png" alt="" />
                                    <div className="feature-shop">
                                        <p><span>陶藝工作室</span></p>
                                        <p className='feat2-shop'><span>寵物友善</span></p>
                                        <p><span>鄰近捷運</span></p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div id="b-content">
                            <section id="content-shop" data-aos="fade-left">
                                <article id="box-list">
                                    <div className="img">
                                        <figure><img src="./images/shop-img1.png" alt="" /></figure>
                                        <figure><img src="./images/shop-img2.png" alt="" /></figure>
                                    </div>
                                    <p>小自在工藝空間一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。</p>
                                </article>
                            </section>
                            { /* 現有課程 */}
                            <section id="lesson-shop" >
                                <figure className="title-shop" data-aos="fade-right"><img src="./images/lesson.svg" alt="" /></figure>
                                
                                    <ClassCardLatest />
                                
                                {/* <button className="see-btn"data-aos="fade-left"/><img className='ball-shop' src="./images/Vector-circle-b.png" alt="" /> <span>See More</span><img className='arr-shop' src="./images/shop-arr.svg" alt="" /></button> */}
                            </section>
                            { /* 心得分享 */}
                            <section id="share">
                                <figure className="title-shop" data-aos="fade-right"><img src="./images/share.svg" alt="" /></figure>
                                <div id="share-img" data-aos="fade-left">
                                    <button  className='share-card' onClick={handleOpenModalReview}>
                                        <img src="./images/share-1.png" alt="" />
                                        <div className='shareHover'>
                                            <span>手捏陶 DIY 課程-溫潤陶杯<br />2024/10/11</span>
                                        </div>
                                    </button>
                                    <button className='share-card' onClick={handleOpenModalReview}>
                                        <img src="./images/share-2.png" />
                                        <div className='shareHover'>
                                            <span>居家擺飾陶器創作體驗<br />2024/12/13</span>
                                        </div>
                                    </button>
                                    <button className='share-card' onClick={handleOpenModalReview}>
                                        <img src="./images/share-3.png" />
                                        <div className='shareHover' >
                                            <span>陶藝進階挑戰！打造屬於自己的陶器<br />2024/9/21</span>
                                        </div>
                                    </button>
                                </div>
                                <div className="share-btn" data-aos="fade-right">
                                    {/* <Seemore text='See All' imgBall="./images/Vector-circle-b.png" href="https://www.google.com/webhp?hl=zh-TW&sa=X&ved=0ahUKEwjj157UwJnmAhVkL6YKHdSeA5IQPAgH" /> */}
                                    <button className="seemore-btn" onClick={handleOpenModalReview}>
                                        {/* ModalReview 元件 */}
                                        
                                        <img className="ball" src="./images/Vector-circle-b.png" alt="" />
                                        <span className="font">See All</span>
                                        <img className="arr" src="./images/Vector-arr.png" alt="" />
                                    </button>
                                </div>

                            </section>
                            {/* <figure id="blob-1"><img src="./images/Vector-1.png" alt="" /></figure> */}
                            {/* <figure id="blob-2"><img src="./images/Vector-2.png" alt="" /></figure> */}
                            {/* <figure id="blob-3"><img src="./images/Vector-3.png" alt="" /></figure> */}
                            {/* <figure id="blob-4"><img src="./images/Vector-4.png" alt="" /></figure> */}
                            {/* <figure id="blob-5"><img src="./images/Vector-5.png" alt="" /></figure> */}
                            {/* <figure id="blob-6"><img src="./images/Vector-6.png" alt="" /></figure> */}

                        </div>
                        <figure id="blob-1"><img src="./images/Vector-1.png" alt="" /></figure>
                        <figure id="blob-2-2"><img src="./images/Vector2-2.svg" alt="" /></figure>
                        <figure id="blob-3-2"><img src="./images/Vector3-2.svg" alt="" /></figure>
                        {/* <figure id="blob-2"><img src="./images/Vector-2.png" alt="" /></figure> */}
                        <figure id="blob-3"><img src="./images/Vector-3.png" alt="" /></figure>
                        {/* <figure id="blob-4"><img src="./images/Vector-4.png" alt="" /></figure> */}
                        {/* <figure id="blob-5"><img src="./images/Vector-5.png" alt="" /></figure> */}
                        <figure id="blob-6-2"><img src="./images/Vector6-2.svg" alt="" /></figure>
                        <figure id="Last1"><img src="./images/VectorLast1.svg" alt="" /></figure>
                        <figure id="Last2"><img src="./images/VectorLast2.svg" alt="" /></figure>
                        <figure id="Lastline"><img src="./images/VectorLastline.svg" alt="" /></figure>
                        <figure id="blob-7-2"><img src="./images/Vector7-2.svg" alt="" /></figure>
                        <figure id="foot2line1"><img src="./images/foot2line1.svg" alt="" /></figure>
                        {/* <figure id="blob-6"><img src="./images/Vector-6.png" alt="" /></figure> */}
                    </div>
                    <ToTop initialStyle={initialStyle} />
                     {/* Modal Review Component */}
                    <ModalReview
                        isOpen={isModalReviewOpen}
                        onClose={handleCloseModalReview}
                    />

                    { /* footer */}
                    <footer>
                        <div className="footer-bgDeco">
                            <img src="./images/footer-deco.png" alt="" />
                        </div>
                        <div className="foot-content">
                            <Link to='/'><img src="./images/footer-logo.svg" alt="" /></Link>
    
                            {/* 選單 */}
                            <ul className="menu">
                                <li id="home"><Link to='/'>首頁</Link></li>
                                <li>
                                    <Link to='/mapmain'>發掘店家</Link>
                                    <ul>
                                        <li><Link to='/mapmain'>金工</Link></li>
                                        <li><Link to='/mapmain'>陶藝</Link></li>
                                        <li><Link to='/mapmain'>皮革</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/classpage'>預約課程</Link>
                                    <ul>
                                        <li><Link to='/classpage'>熱門課程</Link></li>
                                        <li><Link to='/classpage'>最新課程</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/member'>會員中心</Link>
                                    <ul>
                                        <li><Link to='/member'>會員資料</Link></li>
                                        <li><Link to='/member'>預約紀錄</Link></li>
                                        <li><Link to='/member'>收藏紀錄</Link></li>
                                        <li><Link to='/member'>我的分享</Link></li>
                                    </ul>
                                </li>
    
                                <li>
                                    <Link to='/qa'>常見問題</Link>
                                    <ul>
                                        <li><Link  to='/qa'>會員相關</Link></li>
                                        <li><Link  to='/qa'>預約相關</Link></li>
                                        <li><Link  to='/qa'>課程相關</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <small> Copyright© 2024 CRAFTOPIA All rights reserved.此為學生練習作品，不作商業用途 </small>
    
                    </footer>     
                </main>
            </div>
        </>
    )
}