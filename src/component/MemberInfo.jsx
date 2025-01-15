import { useRef, useState } from "react"

export default function MemeberInfo() {

    // 初始資料
    const initialData = {
        name: "王曉明",
        email: "armincraft@gmail.com",
        phone: "0966123456",
        birthday: "未填寫",
    };

    const [memberData, setMemberData] = useState(initialData); // 編輯中的資料
    const [isEditing, setIsEditing] = useState(false); // 控制編輯模式
    const [errors, setErrors] = useState({}); // 儲存驗證錯誤訊息

    // 使用 useRef 保存上次確認後的資料
    const confirmedData = useRef(initialData);

    // 處理 input 變更並驗證輸入格式
    const handleInputChange = (field, value) => {
        setMemberData({
            ...memberData,
            [field]: value,
        });

        // 驗證邏輯
        let newErrors = { ...errors };
        if (field === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
            newErrors.email = "請輸入有效的電子信箱";
        } else if (field === "phone" && !/^09\d{8}$/.test(value)) {
            newErrors.phone = "請輸入正確的電話格式";
        } else {
            delete newErrors[field];
        }
        setErrors(newErrors);
    };

    // 完成按鈕
    const handleConfirm = () => {
        const newErrors = {};
        if (!/^\S+@\S+\.\S+$/.test(memberData.email)) newErrors.email = "請輸入有效的電子信箱";
        if (!/^09\d{8}$/.test(memberData.phone)) newErrors.phone = "電話格式需為 09 開頭的 10 位數字";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            confirmedData.current = memberData; // 更新確認資料
            setIsEditing(false);
        }
    };

    // 取消按鈕
    const handleCancel = () => {
        setMemberData(confirmedData.current); // 回到上次確認的資料
        setErrors({}); // 清空錯誤訊息
        setIsEditing(false);
    };

    return (
        <div className="info">
            <div className="title">
                <h2>
                    <img src="./images/title/infoTitle.svg" alt="基本資料" />
                </h2>
                <img
                    className="icon-edit"
                    src="./images/icon-tag/type=edit.svg"
                    alt="edit"
                    onClick={() => setIsEditing(true)}
                />
            </div>

            <div className="dataBox">
                <div className="data">
                    <p>姓名</p>
                    {isEditing ? (
                        <div className="data-edit">
                            <input
                                type="text"
                                value={memberData.name}
                                disabled
                                onChange={(e) => handleInputChange("name", e.target.value)}
                            />
                        </div>

                    ) : (
                        <p className="data-text">{memberData.name}</p>
                    )}
                </div>
                <div className="data">
                    <p>電子信箱</p>
                    {isEditing ? (
                        <div className="data-edit">
                            <input
                                type="email"
                                value={memberData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                    ) : (
                        <p className="data-text">{memberData.email}</p>
                    )}
                </div>
                <div className="data">
                    <p>行動電話</p>
                    {isEditing ? (
                        <div className="data-edit">
                            <input
                                type="tel"
                                value={memberData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                    ) : (
                        <p className="data-text">{memberData.phone}</p>
                    )}
                </div>
                <div className="data">
                    <p>生日</p>
                    {isEditing ? (
                        <div className="data-edit">
                            <input
                                type="date"
                                value={memberData.birthday}
                                onChange={(e) => handleInputChange("birthday", e.target.value)}
                            />
                            
                        </div>
                    ) : (
                        <p className="data-text">{memberData.birthday}</p>
                    )}
                </div>
            </div>

            {/* 按鈕 */}
            {isEditing && (
                <div className="confirm-btn">
                    <button className="memberBtn" onClick={handleConfirm}>完成</button>
                    <button className="cancel-btn" onClick={handleCancel}>取消</button>
                </div>
            )}
        </div>
    );
}


