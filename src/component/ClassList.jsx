import { useEffect, useState } from "react";
import courseData from "./courseData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'csshake/dist/csshake.min.css';
import Hearttoggle from "./Hearttoggle";
import { Link } from 'react-router-dom';






function ClassList() {



    /* 篩選出熱門課程 */
    const hotCourse = courseData.filter((course) => course.sales > 20);



    /* 篩選出最新一個月內上架課程 */
    // 取得今天的日期
    const today = new Date();

    // 取得三個月前的日期
    const monthAgo = new Date();
    monthAgo.setMonth(today.getMonth() - 3);  //setMonth 設定月份

    // 篩選出最新課程
    const latestCourses = courseData.filter((course) => {
        const releaseDate = new Date(course.releaseDate); // 取得課程資料裡的上架日期
        return releaseDate >= monthAgo && releaseDate <= today; // 回傳 一個月內上架的課程&檢查上架日期是否在今天以前
    });



    /* see more 按鈕區 */
    const [visibleHotCount, setVisibleHotCount] = useState(6); // 初始顯示數量為 6
    const [visibleNewCount, setVisibleNewCount] = useState(3); // 初始顯示數量為 6

    // 點擊展開更多卡片 (熱門)
    const handleHotSeeMore = () => {
        setVisibleHotCount((prevCount) => prevCount + 3); // 每次多顯示3個
    };

    // 點擊展開更多卡片 (最新)
    const handleNewSeeMore = () => {
        setVisibleNewCount((prevCount) => prevCount + 3); // 每次多顯示3個
    };



    /* AOS初始化設定 */
    useEffect(() => {

        AOS.init(); // 初始化

    }, [])



    return (
        <>


            {/* 熱門推薦課程 */}
            <section id="hotRecommend" className="courseSection" data-aos="fade-up" data-aos-offset="100" >

                <figure className="listTitle">
                    <img src="./images/title-hotClass.svg" alt="" />
                </figure>

                <div className="classList">




                    {hotCourse.slice(0, visibleHotCount).map((course) => {


                        const courseDate = new Date(course.releaseDate); // 將課程日期轉為 Date 對象
                        const newest = courseDate >= monthAgo; // 判斷是否在三個月內

                        return (


                            <div data-aos="fade-up" data-aos-offset="50" key={course.id} className={`classCard`}>

                                <figure className="classPhoto">
                                    <Link to='/classpage'>

                                        <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                                        <img className="photo" src={`./images/course/${course.image}`} alt="" />

                                        <div className="tagHotorNew ">
                                            {course.sales > 20 && (

                                                <img src="./images/labels-hot.png" alt="" />

                                            )}
                                            {newest && (


                                                <img src="./images/labels-new.png" alt="" />

                                            )}
                                        </div>

                                    </Link>
                                </figure>
                                <div className="classTag">
                                    <p className="classLevel">{course.level}</p>
                                    <p className="classTime">{course.duration}hr</p>
                                </div>
                                <div className="classTitle">
                                    <h3><Link to='/classpage'>{course.courseName}</Link></h3>

                                    <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                                </div>
                                <div className="classPrice">
                                    <p className="classStoreName"><Link to='/shop'>{course.storeName}</Link></p>
                                    <p className="price">$ {course.price.toLocaleString()}</p>
                                </div>

                            </div>
                        )

                    }

                    )}

                </div>

                {visibleHotCount < hotCourse.length && (

                    <div data-aos="fade-right" className="seeMore" onClick={handleHotSeeMore}>
                        <p className="seemore-btn" href="#">
                            <img className="ball" src="./images/Vector-circle-b.png" alt="" />
                            <span className="font">see more</span>
                            <img className="arr" src="./images/icons-arrowDown.svg" alt="" />
                        </p>
                    </div>








                )}






            </section>






            {/* 最新上架課程 */}
            <section id="newestClass" className="courseSection" data-aos="fade-up">

                <figure className="listTitle">
                    <img src="./images/title-newClass.svg" alt="" />
                </figure>

                <div className="classList">

                    {latestCourses.slice(0, visibleNewCount).map((course) => {

                        return (

                            <div data-aos="fade-up" key={course.id} className={`classCard`}>

                                <figure className="classPhoto">
                                    <Link to='/classpage'>
                                        <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                                        <img className="photo" src={`./images/course/${course.image}`} alt="" />
                                        <div className="tagHotorNew">
                                            {course.sales > 20 && (
                                                <img src="./images/labels-hot.png" alt="" />
                                            )}



                                            <img src="./images/labels-new.png" alt="" />


                                        </div>


                                    </Link>
                                </figure>
                                <div className="classTag">
                                    <p className="classLevel">{course.level}</p>
                                    <p className="classTime">{course.duration}hr</p>
                                </div>
                                <div className="classTitle">
                                    <h3><Link to='/classpage'>{course.courseName}</Link></h3>
                                    <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                                </div>
                                <div className="classPrice">
                                    <p className="classStoreName"><Link to='/shop'>{course.storeName}</Link></p>
                                    <p className="price">$ {course.price.toLocaleString()}</p>
                                </div>

                            </div>


                        )

                    })}





                </div>



                {visibleNewCount < latestCourses.length && (

                    <div data-aos="fade-right" className="seeMore" onClick={handleNewSeeMore}>
                        <p className="seemore-btn" href="#">
                            <img className="ball" src="./images/Vector-circle-b.png" alt="" />
                            <span className="font">see more</span>
                            <img className="arr" src="./images/icons-arrowDown.svg" alt="" />
                        </p>
                    </div>


                )}



            </section>


        </>
    )






}


export default ClassList