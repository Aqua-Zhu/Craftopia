
import { useEffect, useState } from 'react';
import '../scss/MapMain.scss';
import MapSelect from '../component/MapSelect';
import MyGmap from '../component/MyGmap';
import markersData from '../component/markersData';
import Hearttoggle from '../component/Hearttoggle';
import ToTop from '../component/ToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'csshake/dist/csshake.min.css';
import TopbarB from '../component/TopbarB';
import { Link } from 'react-router-dom';
import Hearttoggle2 from '../component/Hearttoggle2';
import { Helmet } from 'react-helmet-async';




function MapMain() {

  // 管理課程搜尋篩選條件
  const [filteredStore, setFilteredStore] = useState(markersData); //初始狀態未篩選顯示所有課程
  
  // 管理搜尋輸入匡輸入的店名
  const [searchTerm, setSearchTerm] = useState(""); 


  /* 搜尋處理條件設定 */
  const handleSearch = (filters) => {

    const { location, type } = filters;
    const filtered = markersData.filter((store) => {

      const matchesLocation = location ? store.location === location : true;
      const matchesType = type ? store.type === type : true;

      // 新增根據店名的條件
      const matchesName = !searchTerm || store.storeName.includes(searchTerm);

      return matchesLocation && matchesType && matchesName;

    });

    setFilteredStore(filtered);
  };


  /* AOS 初始化 */
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init(); // 初始化

  }, [])



  /* totop 位置設定 */
  const initialStyle = {
    position: "fixed",
    bottom: "20px",
    right: "10px",
  };



  return (
    <>
  <Helmet>
    <title>發掘店家工作室─Craftopia 藝嶼│一個由手工藝組成的烏托邦</title>
  </Helmet>
      <TopbarB/>

      <main id="MapPage">



        <section className="map">
          <MyGmap filteredStore={filteredStore} />

          <MapSelect handleSearch={handleSearch} searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} />


        </section>


        <section className="searchWorkShop">


          <figure data-aos="fade-up" data-aos-offset="40" className="listTitle">
            <img src="./images/title-discoverWorkShop.svg" alt="" />

          </figure>

          {filteredStore.length > 0 ? (
            <>
              <div className="storeList">

                {
                  filteredStore.map((store) => (
                    <div data-aos="fade-zoom-in" key={store.id} className="storeCard">

                      <figure className="storePhoto">

                        <Link to='/shop'>
                          <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                          <img className="photo" src={`./images/store/${store.image}`} alt="" />

                        </Link>
                      </figure>
                      <div className="storeTag">
                        <p className={`storeType ${store.tag === "pottery" ? "pottery" : ""}`} style={{
                          backgroundImage: `url('./images/tag-${store.tag}.svg')`,
                        }}>{store.type}</p>
                        <p className="storeLocation">{store.location}</p>
                      </div>
                      <div className="storeName">
                        <h3><Link to='/shop'>{store.storeName}</Link></h3>
                        <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                        
                         {/* <Hearttoggle2  defaultChecked={false}></Hearttoggle2> */}
                      </div>
                      <div className="storeDetail">

                        <div >
                          <img src="./images/icons-mapStoreTime.svg" alt="" />
                          <p className="storeTime" >{store.time}</p>


                        </div>
                        <div>
                          <img src="./images/icons-mapWorkshopLocation.svg" alt="" />
                          <p className="storeAddress">{store.address}</p>


                        </div >

                      </div>

                    </div>
                  ))
                }

              </div>


            </>

          ) : (
            <p className="noresult">沒有符合的店家，換個條件試試看吧！</p>
          )}


        {/*  <figure className="decor-clip custom-shake-h  shake-constant">
            <img src="./images/decor-clip.svg" alt="" />
          </figure>

          <figure className="decor-smooth custom-shake-h  shake-constant">
            <img src="./images/decor-smooth.svg" alt="" />
          </figure> */}


        </section>

      </main>

      {/* TO TOp */}
      <ToTop initialStyle={initialStyle} />
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


    </>
  )
}

export default MapMain
