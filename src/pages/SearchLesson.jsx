import { useEffect, useState } from 'react';
import '../scss/searchLesson.scss';
import SearchSection from '../component/SearchSection';
import Results from '../component/Results';
import ClassList from '../component/ClassList';
import courseData from "../component/courseData";
import 'csshake/dist/csshake.min.css';
import TopbarB from '../component/TopbarB';
import AOS from 'aos';
import { Link } from 'react-router-dom';




export default function SearchLesson() {
      useEffect(() => {
          window.scrollTo(0, 0);
          AOS.init();
      }, []);
  // 課程搜尋篩選條件
  const [filteredCourses, setFilteredCourses] = useState(courseData); //初始狀態未篩選顯示所有課程
  const [selectedOption , setSelectedOption] = useState({ location: null, type: null });

  const handleSearch = (filters) => {

    const { location, type, date, adults, children } = filters;
    const filtered = courseData.filter((course) => {
      // 目前篩選條件只有地點與類型，後續可加入日期與人數
      const matchesLocation = location ? course.location === location : true;
      const matchesType = type ? course.type === type : true;

      return matchesLocation && matchesType;

    });

    setFilteredCourses(filtered);
    setSelectedOption(filters);
  };


  // 管理點擊搜尋課程後顯示搜尋結果
  const [resultVisible, setResultVisible] = useState(false);

  // 點擊搜尋按鈕時的行為
  const handleSearchResult = () => {
    setResultVisible(false); // 先隱藏結果
    setTimeout(() => {
      setResultVisible(true); // 再次顯示搜尋結果
    }, 0); // 設置一個短暫延遲 (100ms)
  };

  

  return (
    <>
    <TopbarB/>
      <main id='searchlesson'>

        <section id="SearchBanner">
          <h2 className='engTitle'>Discover Your Next Creative Journey !</h2>
          <h2>想去哪裡體驗什麼?</h2>

          <SearchSection handleSearch={handleSearch} handleSearchResult={() => handleSearchResult()} />

          <figure className="left-filled custom-shake-v shake-constant"><img src="./images/decor-searchBanner-leftbubbleFilled.png" alt="" /></figure>
          <figure className="left-stroke custom-shake-h shake-constant"><img src="./images/decor-searchBanner-leftbubbleStroke.png" alt="" /></figure>
          <figure className="left-tool custom-shake-t shake-constant"><img src="./images/decor-searchBanner-LeftTool.png" alt="" /></figure>
          <figure className="right-filled custom-shake-v shake-constant"><img src="./images/decor-searchBanner-rightbubbleFilled.png" alt="" /></figure>
          <figure className="right-stroke custom-shake-h shake-constant"><img src="./images/decor-searchBanner-rightbubbleStroke.png" alt="" /></figure>
          <figure className="right-tool custom-shake-t shake-constant"><img src="./images/decor-searchBanner-RightTool.png" alt="" /></figure>

        </section>
        
        
        <Results filteredCourses={filteredCourses} resultVisible={resultVisible} selectedOption={selectedOption}/>

        <ClassList />



      </main>


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

    </>
  )
}


