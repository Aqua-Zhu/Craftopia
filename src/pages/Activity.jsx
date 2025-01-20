import { useEffect, useState } from "react";
import ToTop from "../component/ToTop"; // 引入 ToTop 元件
import TopbarB from '../component/TopbarB';
import ModalLogIn from "../component/ModalLogIn"; // 引入 ModalLogIn 元件
import ClassCardLatest from "../component/ClassCardLatestClass"; // 引入 ClassCardLatest 元件
import GoogleMap from "../component/Google Map";
import AOS from 'aos';
import 'aos/dist/aos.css'; //載入node modules中的套件前面不加./
import '../scss/style-activity.scss';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ClassCardLatestClass from "../component/ClassCardLatestClass";


function Activity() {

    // 控制 ModalLogIn 開啟狀態
    const [isModalLogInOpen, setIsModalLogInOpen] = useState(false);
    const handleOpenModalLogIn = () => {
        setIsModalLogInOpen(true);  // 開啟 ModalLogIn
    };
    const handleCloseModalLogIn = () => {
        setIsModalLogInOpen(false);  // 關閉 ModalLogIn
    };

    //AOS淡入淡出套件
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init(); //初始化
    }, []
    );

    // ToTop按鈕樣式
    const initialStyle = {
        position: "fixed",
        bottom: "20px",
        right: "10px",
    };

    
    return (
        <>
        <Helmet>
            <title>最新活動資訊─Craftopia 藝嶼│一個由手工藝組成的烏托邦</title>
        </Helmet>
            <TopbarB />
            {/*獨立區 */}
            {/* ModalLogIn 元件 */}
            <ModalLogIn isOpen={isModalLogInOpen} onClose={handleCloseModalLogIn} />
            {/* TO TOp */}
            <ToTop initialStyle={initialStyle} />

            <main id='mainActivity'>
                <section className="activity-content">
                    <img className="titlePic" id="titleActivity" src="./images/title-activitynew.svg" alt="最新活動資訊" />
                    <p className="activity-date">2024.10.13</p>
                    <h2 className="activity-title">2024新北歡樂金工城★11/15盛大展開，八大亮點、四大展區打造連續48天最手工的璀璨城市！</h2>
                    <img src="./images/Vector-line2.svg" alt="" id='activity-line' />
                    <img src="./images/activity-main.jpg" alt="" id='activity-mainPic' />
                    <article className="article-wrap">
                        <h3>手作迷請注意！</h3>
                        <p>「2024新北歡樂金工城」於11月15日閃耀開幕！連續48天，四大展區攜手打造一座充滿創意與工藝靈感的城市。無論你是金工小白還是手作達人，都能在這裡找到屬於你的精彩亮點！</p>
                        <figure><img src="./images/activity-article-1.jpg" alt="活動照片" /><img src="./images/activity-article-2.jpg" alt="活動照片" /></figure>
                        <h3>八大必看亮點，讓你大呼值得！</h3>
                        <p>．超人氣名師快閃講堂：金工大師親授技巧，從基本打磨到雕花細節，秒變手作高手！<br />
                            ．百工展覽區：聚焦台灣工藝，超過50家品牌現場展示，讓你看見手工藝的無限可能。<br />
                            ．DIY體驗工作坊：現場親手製作專屬飾品，創造屬於你的獨一無二。<br />
                            ．金屬藝術街拍牆：五大主題裝置藝術，讓你的自拍充滿藝術氛圍。<br />
                            ．金工跳蚤市場：挖掘手工珍品，說不定就找到你的夢幻逸品！<br />
                            ．工藝互動市集：手作攤位好玩又好逛，還有手作點心加持！<br />
                            ．璀璨燈光秀：夜晚燈光點綴，讓整座城市成為拍照打卡熱點！<br />
                            ．金工迷你博物館：百年歷史工具與經典作品一次看！</p>
                        <figure><img src="./images/activity-article-3.jpg" alt="活動照片" /><img src="./images/activity-article-4.jpg" alt="活動照片" /></figure>
                        <h3>四大主題展區，手作世界任你遊！</h3>

                        <ul>
                            <li>
                                <span>展區一：創意工坊區</span><br />
                                這裡是手作人的夢工廠！數十個DIY體驗工作坊涵蓋金工、皮革、陶藝等各類工藝，專業導師手把手教學，讓你輕鬆完成屬於自己的作品。不管是打造一枚戒指還是捏製一個小陶碟，這裡絕對是收穫滿滿成就感的地方！

                            </li>
                            <li>
                                <span>展區二：藝術長廊區</span><br />
                                感受藝術與金屬的完美結合！該展區展示了多位知名金工藝術家的代表作品，從精緻飾品到大型金屬裝置藝術，每一件都令人驚嘆不已。現場還設有拍照牆，讓你輕鬆拍出充滿藝術感的靚照。

                            </li>
                            <li>
                                <span>展區三：金工歷史館</span><br />
                                走進金工的時光隧道！在這裡可以看到古老的金工工具與經典作品，了解金工藝術從傳統到現代的發展歷程。透過互動式展覽，還能親自嘗試古法工藝，感受百年工藝的魅力。

                            </li>
                            <li>
                                <span>展區四：手作市集區</span><br />
                                超過50個攤位雲集，這裡是手作好物的寶藏地！無論是精美的金屬飾品、獨特的陶瓷器皿，還是皮革小物，都讓人愛不釋手。此外，現場還有創意點心攤位，邊逛邊吃，享受最輕鬆的購物時光。

                            </li>
                        </ul>
                        <figure><img src="./images/activity-article-5.jpg" alt="活動照片" /></figure>
                        <p>時間不等人，現在就記下行程，
                            揪好友一起來，準備出發感受手作的無限魅力吧！</p>
                    </article>
                    {/* 泡泡區 */}
                    <div className="blobs_activity">
                        <figure className="deco-line" id="deco-line-1" ><img src="./images/decoline-activity.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-1" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class1.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-2" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class2.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-3" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class3.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-4" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class4.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-5" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class5.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-6" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class6.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-7" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class7.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-8" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class6.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-9" data-aos="fade-up" data-aos-duration="1800"><img src="./images/blobs-class3.svg" alt="" /></figure>
                    </div>
                </section>
                <section className="activity-location">
                    <figure><img src="./images/title-location.svg" alt="活動地點" className="titlePic" id="titleActivity-location" /></figure>
                    <div className="activity-detail">
                        {/* <figure><img src="./images/coursePic-1.jpg" alt="活動地點地圖" className="mapPic" id="titleActivity-map" /></figure> */}
                        <div><GoogleMap/></div>
                        <div id="location-wrap">
                            <p><span>📍 活動地址 </span><br />新北市板橋區文化路一段 123 號 （近板橋車站、新北市民廣場）</p>
                            <p><span>🕒 參觀時間</span><br />
                                平日：上午 10:00 - 晚上 9:00 <br />
                                假日：上午 9:00 - 晚上 10:00 <br />
                                燈光秀表演：每晚 7:30 與 8:30，於主廣場區展出</p>
                            <p><span>🚗 交通方式</span><br />
                                捷運：搭乘板南線（藍線）至板橋站，2 號出口步行 5 分鐘即達。<br />
                                火車/高鐵：至板橋車站南出口，步行 7 分鐘。<br />
                                公車：搭乘 264、310、786 至「板橋市民廣場」站下車。<br />
                                自行開車可使用鄰近停車場：板橋車站停車場、新北市民廣場地下停車場（收費依場地規定）。</p>
                            <p><span>🚴 友善自行車</span> <br />設有自行車停放區，支持環保出行！</p>
                        </div>
                    </div>
                </section>
                {/* 相關課程推薦recommend區 */}
                <section id='activity-recommend'>
                    <figure><img src="./images/title-rcm-activity.svg" alt="相關課程推薦" className="titlePic" id="titleRec" /></figure>
                    <div className='cardList'>
                        <ClassCardLatestClass/>
                    </div>
                    <div className="blobs_activity">
                        <figure className="blobs" id="blobs-10" data-aos="fade-up" data-aos-duration="800"><img src="./images/blobs-class3.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-11" data-aos="fade-up" data-aos-duration="800"><img src="./images/blobs-class4.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-12" data-aos="fade-up" data-aos-duration="800"><img src="./images/blobs-class1.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-13" data-aos="fade-up" data-aos-duration="800"><img src="./images/blobs-class4.svg" alt="" /></figure>
                        <figure className="blobs" id="blobs-14" data-aos="fade-up" data-aos-duration="800"><img src="./images/blobs-class9.svg" alt="" /></figure>
                    </div>
                </section>
            </main >
        
            {/* 頁尾區 */}
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

            <script src="./js/jquery-3.7.1.min.js"></script>
        </>
    )
}

export default Activity