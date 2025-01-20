import { Link } from "react-router-dom";
import Hearttoggle from "./Hearttoggle";
import Hearttoggle2 from "./Hearttoggle2";

// 變數名稱大家可以改成寫死的文字或是自己的資料




function ClassCardLatestYuan() {
    const course = [{
        id: 1,
        level: '入門',
        duration: '2',
        courseName: '簡易個性化陶瓷製作體驗課',
        storeName: '小自在工藝空間',
        price: 2299,
        photo:'./images/classphoto-01.png',
    },
    {
        id: 2,
        level: '進階 ',
        duration: '4',
        courseName: '陶藝進階挑戰！打造屬於自己的陶器吧！',
        storeName: '小自在工藝空間',
        price: 1599,
        photo:'./images/classphoto-02.jpg',
    },
    {
        id: 3,
        level: '進階',
        duration: '3',
        courseName: '居家擺飾陶器創作體驗',
        storeName: '小自在工藝空間',
        price: 998,
        photo:'./images/classphoto-03.jpg',
    },
    ]
    
    return (

        course.map((course) => {
            return (
                <div key={course.id} className="classCard">

                    <figure className="classPhoto">
                        <Link to='/classpage'>
                            <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                            <img className="photo" src={course.photo} alt="" />

                            <div className="tagHotorNew ">
                                {/* <img src="./images/icon-tag/labels-hot.png" alt="" /> */}
                                <img src="./images/icon-tag/labels-new.png" alt="" />
                            </div>
                        </Link>
                    </figure>
                    <div className="classTag">
                        <p className="classLevel">{course.level}</p>
                        <p className="classTime">{course.duration}hr</p>
                    </div>
                    <div className="classTitle">
                        <h3><Link to='/classpage'>{course.courseName}</Link></h3>
                        <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' defaultChecked={true} />
                        {/* <Hearttoggle2  defaultChecked={true}></Hearttoggle2> */}
                    </div>
                    <div className="classPrice">
                        <p className="classStoreName"><Link to='/shop'>{course.storeName}</Link></p>
                        <p className="price">$ {course.price.toLocaleString()}</p>
                    </div>
                </div>

            )

        })





    )

}

export default ClassCardLatestYuan