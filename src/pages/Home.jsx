import Seemore from "../component/Seemore";
import Topbar from "../component/Topbar";
import "../scss/style.scss"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ToTop from "../component/ToTop";
import { Link } from "react-router-dom";     


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, [])

    const initialStyle = {
        position: "fixed",
        bottom: "20px",
        right: "10px",
    };
    return (
        <>
            <div id="body">
                {/* 頁首區 */}
                <Topbar bannerId='#banner' />

                {/* 主要內容區 */}
                <main>
                    {/* banner*/}
                    <section id="first-space">
                        <header id="banner-B">
                            <figure id="banner"><img src="./images/banner.jpg" alt="craftopia橫幅" /></figure>
                            <figure className="blob-1"><img src="./images/blob-home1.svg" alt="" /></figure>
                            <figure className="blob-2"><img src="./images/blob-home2.svg" alt="" /></figure>
                            <figure className="blob-3"><img src="./images/blob-home3.svg" alt="" /></figure>
                            <figure className="blob-4"><img src="./images/blob-home4.svg" alt="" /></figure>
                            <figure className="banner-arr"><img src="./images/banner-arr.png" alt="" /></figure>
                        </header>
                        {/* 課程種類 */}
                        <section id="lesson" >
                            <header>
                                <figure className="title" data-aos="fade-up">
                                    <img src="./images/title-lesson.png" alt="" />
                                </figure>
                                <p className="lesson-text" data-aos="fade-up">想要動手做專屬於你的工藝最品嗎？<br />
                                    Craftopia 一次搜羅台北地區的 <span>金工／陶藝／皮革</span>特色手作工作室。<br />
                                    清晰的<span>地圖</span>與<span>品牌</span>介紹，輕鬆探索有趣課程，一鍵預約，說走就走！<br />
                                    不論是初次嘗試還是老手上陣，獨自挑戰或揪團同樂，都能在這裡找到讓你心動的手作體驗！</p>
                            </header>
                            <div className="wrapper" data-aos="fade-left">
                                <Link to='/search' className="card contain1">
                                    <h3 className="title-class">皮<br />革</h3>
                                    <h3 className="flex pt1">皮革</h3>
                                    <p className="flex pt3">點擊查看更多</p>
                                    <p className="flex pt2">皮革工藝涵蓋多元的技法：手縫、打孔、染色、壓紋、編織等，每個步驟都需要耐心與專注。
                                        隨著使用時間的累積，皮革製品會因使用者的愛護而產生獨特的包漿與風韻，展現出歲月淬煉的美感。</p>
                                    <img id="card1" src="./images/leather.jpg" alt="" />
                                </Link>
                                <Link to='/search' className="card contain2">
                                    <h3 className="title-class">金<br />工</h3>
                                    <h3 className="flex pt1">金工</h3>
                                    <p className="flex pt3">點擊查看更多</p>
                                    <p className="flex pt2">「金工」可以說是金屬工藝，而不是只限於「金」，我們最常使用的創作材料包含純銀、黃銅、紅銅。甚至也不只限於用金屬材料來加工，也有「蠟雕」、「翻模」等方式，都可以協助金屬工藝的創作！</p>
                                    <img id="card2" src="./images/jewelry.jpg" alt="" />
                                </Link>
                                <Link to='/search' className="card contain3">
                                    <h3 className="title-class">陶<br />瓷</h3>
                                    <h3 className="flex pt1">陶瓷</h3>
                                    <p className="flex pt3">點擊查看更多</p>
                                    <p className="flex pt2">陶瓷泛指以黏土塑形，再經過燒製成形的器物。陶器，一般用黏土或陶土，經捏製成形後燒製而成；瓷器則由瓷石、高嶺土等組成，外表施釉或經手工彩繪，高溫（約1200℃–1400℃）窯內燒製而成。</p>
                                    <img id="card3" src="./images/clay.jpg" alt="" />
                                </Link>
                            </div>
                            {/* 裝飾物件 */}
                            <figure id="line-1" data-aos="fade-up"><img src="./images/line-1.png" alt="" /></figure>
                            <figure id="tool" data-aos="fade-up"><img src="./images/compass.svg" alt="" /></figure>
                            <figure id="title-2" data-aos="fade-up"><img src="./images/title-choice-lesson.png" alt="" /></figure>
                            <figure className="blob-5"><img src="./images/blob-home5.svg" alt="" /></figure>
                            <figure className="blob-6"><img src="./images/blob-6.svg" alt="" /></figure>
                            <figure className="blob-7"><img src="./images/blob-7.svg" alt="" /></figure>
                            <figure className="blob-8"><img src="./images/blob-8.svg" alt="" /></figure>
                        </section>
                    </section>

                    {/* 精選課程 */}
                    <header>
                        {/* 預留給標題 */}
                        {/* <a className="btn-classes" href=""><span>All class</span></a> */}
                        <p className="btn-classes" data-aos="fade-up"><Seemore text={'All class'} imgBall={"./images/Vector-circle-b.png"} href='/classpage' /></p>
                    </header>
                    <section id="choice">
                        <div className="arr1">
                            <article id="cho-1" data-aos="fade-right">
                                <div className="indexHotPic1">
                                    <img src="./images/cho-1.png" alt="" />
                                </div>


                                <ul className="cho-content">
                                    <h2>聖誕節前夕來場約會!!<br />『 TAO TAO 工作室』雙人陶藝體驗課</h2>
                                    <li>課程中可學習陶藝基本技法，以引導的方式讓兩人共同創作，若有任何製作上的需求，可以在課程中與老師討論。</li>
                                    <li>報名多堂課程及團體課程，皆有相關優惠，歡迎詢問報名。</li>
                                </ul>
                                {/* <a href=""><span>see more</span> </a> */}
                                <Seemore text={'see more'} imgBall={"./images/Vector-circle-y.png"} href='/classpage' />

                            </article>
                            <article id="cho-2" data-aos="fade-right">
                                <div className="indexHotPic2">
                                    <img src="./images/cho-2.png" alt="" />
                                </div>
                                <ul className="cho-content">
                                    <h2>聖誕節前夕來場約會!!<br />『 TAO TAO 工作室』雙人陶藝體驗課</h2>
                                    <li>課程中可學習陶藝基本技法，以引導的方式讓兩人共同創作，若有任何製作上的需求，可以在課程中與老師討論。</li>
                                    <li>報名多堂課程及團體課程，皆有相關優惠，歡迎詢問報名。</li>
                                </ul>
                                <Seemore text={'see more'} imgBall={"./images/Vector-circle-db.png"} href='/classpage' />
                            </article>

                        </div>
                        <article id="cho-3" data-aos="fade-right">
                            <div className="indexHotPic3">
                                <img src="./images/cho-3.png" alt="" />
                            </div>
                            <div className=" indexHotCon3">
                                <ul className="indexHotCon3-text">
                                    <h2>聖誕節前夕來場約會!!<br />『 TAO TAO 工作室』雙人陶藝體驗課</h2>
                                    <li>課程中可學習陶藝基本技法，以引導的方式讓兩人共同創作，若有任何製作上的需求，可以在課程中與老師討論。</li>
                                    <li>報名多堂課程及團體課程，皆有相關優惠，歡迎詢問報名。</li>
                                </ul>

                                <Seemore text={'see more'} imgBall={"./images/Vector-circle-b.png"} href='/classpage' />
                            </div>
                        </article>

                        {/* 裝飾物件 */}
                        <figure id="tool-2" data-aos="fade-up"><img src="./images/jewelrySaw.png" alt="" /></figure>
                        <figure id="tool-3"><img src="./images/woodStick.png" alt="" /></figure>
                        <figure id="line-2"><img src="./images/line-2.png" alt="" /></figure>
                        <figure className="blob-9"><img src="./images/blob-9.svg" alt="" /></figure>
                        <figure className="blob-10"><img src="./images/blob-10.svg" alt="" /></figure>
                        <figure className="blob-11"><img src="./images/blob-11.svg" alt="" /></figure>
                    </section>

                    {/* 活動資訊 */}
                    <section id="activity">
                        <div id="act-bg">
                            <header>
                                <figure className="title" data-aos="fade-down">
                                    <img className="actTitle-str" src="./images/title-activity.png" alt="" />
                                    <img className="actTitle-row" src="./images/title-activity-row.svg" alt="" />
                                </figure>
                            </header>
                            <article >
                                <div className="act" data-aos="flip-up">
                                    <img src="./images/act-1.png" alt="" />
                                    <div className="act-content">
                                        <p>2024 年 10 月 13 日</p>
                                        <h2>2024新北歡樂金工城★11/15盛大展開，八大亮點、四大展區打造連續48天最手工的璀璨城市！</h2>
                                        <div className="a">
                                            <Link to='/act'>see more</Link>
                                        </div>
                                    </div>
                                </div>
                                <figure id="act-line"><img src="./images/act-line.png" alt="" /></figure>
                                <div className="act" data-aos="flip-up">
                                    <img src="./images/act-2.png" alt="" />
                                    <div className="act-content">
                                        <p>2024 年 10 月 13 日</p>
                                        <h2>2024新北歡樂金工城★11/15盛大展開，八大亮點、四大展區打造連續48天最手工的璀璨城市！</h2>
                                        <div className="a">
                                            <Link to='/act'>see more</Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <figure className="blob-12"><img src="./images/blob-12.svg" alt="" /></figure>
                        <figure className="blob-13"><img src="./images/blob-13.svg" alt="" /></figure>
                        <figure className="blob-14"><img src="./images/blob-14.svg" alt="" /></figure>
                        <figure id="tool-4"><img src="./images/cSeat.png" alt="" /></figure>
                        <figure className="line-3"><img src="./images/line-3.png" alt="" /></figure>
                        <p className="Info-btn" href="" data-aos="fade-up"><Seemore text={'All Info'} imgBall={"./images/Vector-circle-b.png"} href='#/classpage' /></p>

                    </section>
                    {/* 關於我們 */}
                    {/* <figure id="us-bg"><img src="./images/aboutus-bg.png" alt="" /></figure> */}
                    <div id="feature-all">
                        <section id="about" data-aos="flip-up">
                            <header>
                                <figure className="title"><img src="./images/title-aboutus.svg" alt="" /></figure>
                            </header>

                            <article>
                                <h2><span>「藝嶼」</span></h2>
                                <h3>一個由手工藝組成的烏托邦。</h3>
                                <p>在這裡，我們攜手體驗者與工作室完成每一次的課程，<br />
                                    三方共同創造的回憶，如同寶物般珍貴。</p>
                                <p>
                                    在旅途上一路蒐集的寶物，形成生活中的調味劑，<br />
                                    我們除了希望體驗者獲得心靈平衡 ，<br />
                                    也企圖讓手工藝的生態可以更加的蓬勃均衡發展。<br />
                                </p>
                            </article>
                            <figure className="about-blob1"><img src="./images/about-blob1.png" alt="" /></figure>
                            <figure className="about-blob2"><img src="./images/about-blob2.png" alt="" /></figure>
                            <figure className="about-blob3"><img src="./images/about-blob3.png" alt="" /></figure>
                            <figure className="about-blob4"><img src="./images/about-blob4.png" alt="" /></figure>
                            <figure className="about-blob5"><img src="./images/about-blob5.png" alt="" /></figure>
                            <figure className="about-blob6"><img src="./images/about-blob6.png" alt="" /></figure>
                        </section>
                        {/* 我們的特色 */}
                        <section id="feature">
                            <header>
                                <figure className="title" data-aos="fade-up"><img src="./images/title-feature.png" alt="" /></figure>
                            </header>
                            <div className="feat-content" data-aos="fade-up">
                                {/* 圓圈跟線段分開-動畫 */}
                                <article className="feat1 pointblob">
                                    <img className="featureInside" src="./images/feature1-inside.svg" alt="" />
                                    <img className="feature-outside feature-outside1" src="./images/feature-outside.svg" alt="" />
                                    <p><strong>point 1</strong></p>
                                    <p><strong>發掘大台北手工藝商家地圖</strong></p>
                                </article>
                                <article className="feat2 pointblob">
                                    <img className="featureInside2" src="./images/feature2-inside.svg" alt="" />
                                    <img className="feature-outside feature-outside2" src="./images/feature-outside.svg" alt="" />
                                    <p><strong>point 2</strong></p>
                                    <p><strong>預約各式各樣手作課程</strong></p>
                                </article>
                                <article className="feat3 pointblob">
                                    <img className="featureInside" src="./images/feature3-inside.svg" alt="" />
                                    <img className="feature-outside feature-outside3" src="./images/feature-outside.svg" alt="" />
                                    <p><strong>point 3</strong></p>
                                    <p><strong>與他人分享體驗成果</strong></p>
                                </article>
                            </div>
                            <div className="last" >
                                <p data-aos="fade-up"><strong>
                                    Find<br />
                                    Your Own<br />
                                    Craftopia !<br />
                                </strong>
                                </p>
                                <div className="last-btn" data-aos="fade-up">
                                    <Link to='/mapmain'><button>挖掘店家<img src="./images/arrow.right.png" alt="" /></button></Link>
                                    <Link to='/search'><button>搜尋課程<img src="./images/arrow.right.png" alt="" /></button></Link>
                                </div>
                            </div>
                        </section>
                        <figure className="blob-15"><img src="./images/blob-15.svg" alt="" /></figure>
                        <figure className="blob-16"><img src="./images/blob-16.svg" alt="" /></figure>
                        <figure className="blob-17"><img src="./images/blob-17.svg" alt="" /></figure>
                        <figure className="blob-18"><img src="./images/blob-18.svg" alt="" /></figure>
                        <figure className="blob-19"><img src="./images/blob-19.svg" alt="" /></figure>
                        <figure className="blob-20"><img src="./images/blob-20.svg" alt="" /></figure>
                        <figure className="blob-21"><img src="./images/blob-21.svg" alt="" /></figure>
                    </div>

                </main>
                <ToTop initialStyle={initialStyle} />
                {/* 頁尾區 */}
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
            </div>

        </>
    )
}