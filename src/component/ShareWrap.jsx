import { useState } from 'react';
import ModalReview from './ModalReview';
import '../scss/_style_MyShareBox.scss';

export default function ShareWrap() {
    const shareData = [
        {
            expInfoName: "Amber",
            imgSrc: "./images/exp-01.jpg",
            avatarSrc: "./images/exp-id-pic-1.png",
            levelSrc: "./images/icon-tag/tag-stoneLV.svg",
            shareTime: "2020年12月20日",
            expItem: "陶冶身心造型飾品碟",
            expTxt: "點婆登乙新笑打路有高且昌世了寸蝸學浪：要荷火讀母東，斥只肉拉采夕請真新共聽幸頭條哭間尾，我過讀戶尼東物朵走抓美物由，園松冒同母會彩室。昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。",
        },
        {
            expInfoName: "Amber",
            imgSrc: "./images/exp-02.jpg",
            avatarSrc: "./images/exp-id-pic-1.png",
            levelSrc: "./images/icon-tag/tag-stoneLV.svg",
            shareTime: "2023年08月15日",
            expItem: "Overloading 戒指 | 純銀 | 送禮自用",
            expTxt: "點婆登乙新笑打路有高且昌世了寸蝸學浪：要荷火讀母東，斥只肉拉采夕請真新共聽幸頭條哭間尾，我過讀戶尼東物朵走抓美物由，園松冒同母會彩室。昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。",
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