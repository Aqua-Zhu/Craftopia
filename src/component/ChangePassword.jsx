import { useState } from "react";

export default function ChangePassword() {

    // 定義 state，用來控制是否顯示表單和按鈕
    const [isPasswordFormVisible, setPasswordFormVisible] = useState(false);

    // 展開密碼表單
    const showPasswordForm = () => {
        setPasswordFormVisible(true);
    };

    // 隱藏密碼表單
    const cancelPasswordForm = () => {
        setPasswordFormVisible(false);
    };


    return (

        <div id="password">
            {/* 標題 */}
            <div className="title">
                <h2>
                    <img src="./images/title/passTitle.svg" alt="修改密碼" />
                </h2>
                <button
                    className={`memberBtn ${isPasswordFormVisible ? "change-password" : ""}`}
                    onClick={showPasswordForm} // 展開綁定事件
                >
                    修改密碼
                </button>
            </div>
            {/* 表單 */}
            <div
                className={`form-container ${isPasswordFormVisible ? "show" : ""}`}
            >
                <form
                    id="password-form2"
                    action=""
                    method="post"
                    name="member-form"
                    title="會員資料修改"
                >
                    <label htmlFor="oldPassword">*請輸入舊密碼</label>
                    <input
                        id="oldPassword"
                        type="password"
                        name="oldPassword"
                        title="請輸入舊密碼"
                        placeholder="請輸入6-8混合字元"
                        required
                        maxLength="8"
                    />

                    <label htmlFor="newPassword">*請輸入新密碼</label>
                    <input
                        id="newPassword"
                        type="password"
                        name="newPassword"
                        title="請輸入新密碼"
                        placeholder="請輸入6-8混合字元"
                        required
                        maxLength="8"
                    />

                    <label htmlFor="confirmPassword">*再次確認新密碼</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        title="再次確認新密碼"
                        placeholder="請輸入6-8混合字元"
                        required
                        maxLength="8"
                    />
                </form>
                {/* 確認按鈕 */}
                <div className="confirm-btn">
                    <button className="memberBtn">確認密碼</button>
                    <button
                        className="cancel-btn"
                        onClick={cancelPasswordForm} // 取消綁定事件
                    >
                        取消
                    </button>
                </div >
            </div>
        </div>
    )
}