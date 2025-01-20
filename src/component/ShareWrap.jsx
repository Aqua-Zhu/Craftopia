import { useState } from 'react';
import ModalReview from './ModalReview';
import '../scss/_style_MyShareBox.scss';

export default function ShareWrap() {
    const shareData = [
        {
            expInfoName: "Amber",
            imgSrc: "./images/reviewPic1.jpg",
            avatarSrc: "./images/exp-id-pic-1.png",
            levelSrc: "./images/icon-tag/tag-stoneLV.svg",
            shareTime: "2020年12月20日",
            expItem: "Overloading 戒指 | 純銀 | 送禮自用",
            expTxt: "小有老師很溫柔講解很仔細，中途看大家有點意識渙散還會講一些幽默的故事，空間環境舒適明亮，作品更是美得不像話，可惜沒有遇到店貓來上班，但整體體驗下來超讚的，大力推推!",
        },
        {
            expInfoName: "三郎",
            imgSrc: "./images/reviewPic2.jpg",
            avatarSrc: "./images/exp-id-pic-1.png",
            levelSrc: "./images/icon-tag/tag-stoneLV.svg",
            shareTime: "2024年11月13日",
            expItem: "Overloading 戒指 | 純銀 | 送禮自用",
            expTxt: "一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。30年來收了許多有趣、好玩、有意思的藝術品。這10年來，日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！",
        }
    ];

    const ShareCard = ({ expInfoName, imgSrc, avatarSrc, levelSrc, shareTime, expItem, expTxt }) => {
        const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);

        const handleOpenModalReview = () => {
            setIsModalReviewOpen(true);
        };

        const handleCloseModalReview = () => {
            setIsModalReviewOpen(false);
        };

        return (
            <>
                <div className="Exp" onClick={handleOpenModalReview}>
                    <div className="expPic">
                        <img src={imgSrc} alt="" />
                    </div>
                    <div className="expContent">
                        <div className="expInfo">
                            <img src={avatarSrc} alt="" />
                            <p>{expInfoName}</p>
                            <img src={levelSrc} alt="" />
                        </div>
                        <div className="expDate">
                            <p>{shareTime}</p>
                            <p className='expItem'>課程項目：{expItem}</p>
                        </div>
                        <p className="expTxt">{expTxt}</p>
                    </div>
                </div>

                {/* Modal Review Component */}
                <ModalReview
                    isOpen={isModalReviewOpen}
                    onClose={handleCloseModalReview}
                />
            </>
        );
    };

    return (
        <div className="newestExp">
            {shareData.map((card, index) => (
                <ShareCard key={index} {...card} />
            ))}
        </div>
    );
}