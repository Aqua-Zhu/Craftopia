import $ from 'jquery'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// import SearchLesson from '../pages/SearchLesson';

export default function Seemore({ text, imgBall, href }) {
    // 搬到home.jsx裡面執行
    useEffect(() => {
        $(function () {
            $('.seemore-btn').click(function (e) {
                e.preventDefault();
                
                setTimeout(function () {

                    // 切換到另一頁       
                    // console.log('href:', href);
                    // window.location.href = '/classpage';
                    window.location = '#/classpage';
                    // <Link to={href} />
                    // <Link to='/classpage'></Link>

                }, 1000);
                $(this).addClass('shot');

                setTimeout(function () {
                    $('.font').addClass('transform-delay');
                    $('.arr').addClass('transform-delay');
                }, 300);

                setTimeout(function () {
                    $('.font').addClass('transform-delay2');
                    $('.arr').addClass('transform-delay2');
                    $('.ball').addClass('transform-delay2');
                }, 700);

            })
        })

    }, []);


    return (
        <>
            <a className="seemore-btn" >
                <img className="ball" src={imgBall} alt="" />
                <span className="font">{text}</span>
                <img className="arr" src="./images/Vector-arr.png" alt="" />
            </a>
        </>
    )
}