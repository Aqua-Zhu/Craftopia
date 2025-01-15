import '../scss/style-shop.scss'
import Topbar from "../component/Topbar";
import Seemore from '../component/Seemore';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Shop() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])



    const introRef = useRef(null);
    const stopIntro =()=>{
        window.scrollTo({

        })
    }

    return (
        <>
            <div id='body'>
                <main>
                    {/* 頁首區 */}
                    <Topbar bannerId='#banner-shop' />
                    { /* banner區 */}
                    <section ref={introRef} id="banner-shop">
                        <figure className="banner"><img src="./images/banner-shop.jpg" alt="" /></figure>
                        <figure><img src="" alt="" /></figure>
                    </section>

                    { /* 店家簡介 */}
                    <section id="shop-intro">
                        <div className="top">
                            <img src="./images/shop-img.png" alt="" />
                            <h2>小自在工藝空間</h2>
                        </div>
                        <div className="content">
                            <img className="line" src="./images/shop-Vector.png" alt="" />
                            <p><img src="./images/phone.png" alt="" /> 0800-000-000</p>
                            <p><img src="./images/locate.png" alt="" /> 台北市大安區復興南路一段150號2樓</p>
                            <p><img src="./images/Time.png" alt="" /> 星期二~星期日 <br />11:30~18:00</p>
                            <img className="line" src="./images/shop-Vector2.png" alt="" />
                            <div className="feature-shop">
                                <p><span>皮革工作室</span></p>
                                <p className='feat2-shop'><span>寵物友善</span></p>
                                <p><span>鄰近捷運</span></p>
                            </div>
                        </div>
                    </section>
                    <div id="b-content">
                        <section id="content-shop">
                            <article id="box-list">
                                <div className="img">
                                    <figure><img src="./images/shop-img1.png" alt="" /></figure>
                                    <figure><img src="./images/shop-img2.png" alt="" /></figure>
                                </div>
                                <p>小自在工藝空間一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。</p>
                            </article>
                        </section>
                        { /* 現有課程 */}
                        <section id="lesson-shop">
                            <figure className="title-shop"><img src="./images/lesson.svg" alt="" /></figure>
                            <div className="class-row">
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-01.png" alt="" />
                                            <img className="tagHotorNew" src="./images/labels-hot.png" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 3800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-02.jpg" alt="" />
                                            <img className="tagHotorNew" src="./images/labels-new.png" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 3800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                            </div>
                            <div className="class-row">
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-03.jpg" alt="" />
                                            <img className="tagHotorNew" src="./images/labels-hot.png" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 4300</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-04.jpg" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">4hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 1800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                            </div>
                            <div className="class-row">
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-05.jpg" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 4300</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-06.jpg" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">4hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 1800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                            </div>
                            <button className="see-btn"><img className='ball-shop' src="./images/Vector-circle-b.png" alt="" /> <span>See More</span><img className='arr-shop' src="./images/shop-arr.svg" alt="" /></button>
                        </section>
                        { /* 心得分享 */}
                        <section id="share">
                            <figure className="title-shop"><img src="/images/share.svg" alt="" /></figure>
                            <div id="share-img">
                                <a href='#' className='share-card'>
                                    <img src="./images/share-1.png" alt="" />
                                    <div className='shareHover' id=''>手捏陶 DIY 課程-溫潤陶杯<br />2024/10/11
                                    </div>

                                </a>
                                <a href='#' className='share-card'><img src="./images/share-2.png" alt="" /></a>
                                <a href='#' className='share-card'><img src="./images/share-3.png" alt="" /></a>
                            </div>
                            <div className="share-btn">
                                <Seemore text='See All' imgBall="./images/Vector-circle-b.png" href="https://www.google.com/webhp?hl=zh-TW&sa=X&ved=0ahUKEwjj157UwJnmAhVkL6YKHdSeA5IQPAgH" />
                            </div>

                        </section>
                        <figure id="blob-1"><img src="./images/Vector-1.png" alt="" /></figure>
                        <figure id="blob-2"><img src="./images/Vector-2.png" alt="" /></figure>
                        <figure id="blob-3"><img src="./images/Vector-3.png" alt="" /></figure>
                        <figure id="blob-4"><img src="./images/Vector-4.png" alt="" /></figure>
                        <figure id="blob-5"><img src="./images/Vector-5.png" alt="" /></figure>
                        <figure id="blob-6"><img src="./images/Vector-6.png" alt="" /></figure>

                    </div>
                    { /* 店家內容 */}



                    { /* footer */}
                    <footer>
                        <div className="footer-bgDeco">
                            <img src="./images/footer-deco.png" alt="" />
                        </div>
                        <div className="foot-content">
                            <a href="craftopia-01.html"><img src="./images/footer-logo.svg" alt="" /></a>
    
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