import { useState, useEffect } from "react";


function SearchSection({ handleSearch, handleSearchResult }) {


    const [inputType, setInputType] = useState("text");


    // 管理下拉式選單開啟與收合
    const [locationIsOpen, setLocationIsOpen] = useState(false);
    const [typeIsOpen, setTypeIsOpen] = useState(false);
    const [peopleIsOpen, setPeopleIsOpen] = useState(false);

    // 管理下拉式選單選中的選項
    const [selectedLOption, setSelectedLOption] = useState({ value: null, label: "想去哪裡做？" });
    const locationOptions = [
        { value: "北投區", label: "北投區" },
        { value: "士林區", label: "士林區" },
        { value: "大同區", label: "大同區" },
        { value: "中山區", label: "中山區" },
        { value: "松山區", label: "松山區" },
        { value: "內湖區", label: "內湖區" },
        { value: "萬華區", label: "萬華區" },
        { value: "中正區", label: "中正區" },
        { value: "大安區", label: "大安區" },
        { value: "信義區", label: "信義區" },
        { value: "南港區", label: "南港區" },
        { value: "文山區", label: "文山區" },
    ];

    const [selectedTOption, setSelectedTOption] = useState({ value: null, label: "想體驗什麼？" });
    const typeOptions = [
        { value: "金工", label: "金工" },
        { value: "陶藝", label: "陶藝" },
        { value: "皮革", label: "皮革" },
    ];


    // 管理選擇日期
    const [searchDate, setSearchDate] = useState("");

    // 管理成人與孩童人數數量
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const handleIncrease = (type) => {
        if (type === 'adult') {
            setAdultCount((prev) => prev + 1);
        } else if (type === 'child') {
            setChildCount((prev) => prev + 1);
        }
    };

    const handleDecrease = (type) => {
        if (type === 'adult' && adultCount > 0) {
            setAdultCount((prev) => prev - 1);
        } else if (type === 'child' && childCount > 0) {
            setChildCount((prev) => prev - 1);
        }
    };


    // 點擊選單時顯示&隱藏
    const toggleDropdown = (dropdownType) => {
        if (dropdownType === "location") {
            setLocationIsOpen((prevent) => !prevent);
            setTypeIsOpen(false);
            setPeopleIsOpen(false);
        } else if (dropdownType === "type") {
            setTypeIsOpen((prevent) => !prevent);
            setLocationIsOpen(false);
            setPeopleIsOpen(false);
        } else if (dropdownType === "people") {
            setPeopleIsOpen((prevent) => !prevent);
            setLocationIsOpen(false);
            setTypeIsOpen(false);
        }
    };

    // 點擊選項後顯示選中的值
    const handleOptionClick = (value, label, e, clickType) => {
        e.stopPropagation(); // 阻止事件冒泡
        if (clickType === "location") {

            if (selectedLOption.value === value) {

                setSelectedLOption({ value: null, label: "想去哪裡做？" });

            } else {

                setSelectedLOption({ value, label }); // 更新顯示的選中值
            }

            setLocationIsOpen(false);  // 收起選單

        } else if (clickType === "type") {

            if (selectedTOption.value === value) {

                setSelectedTOption({ value: null, label: "想體驗什麼？" });

            } else {

                setSelectedTOption({ value, label }); // 更新顯示的選中值
            }

            setTypeIsOpen(false);  // 收起選單
        }

        console.log(`選的值：${value}`)
    };

    // 點擊外部時收起選單
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.search-select')) {
                setLocationIsOpen(false);
                setTypeIsOpen(false);
                setPeopleIsOpen(false);

            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };

    }, []);



    // 點擊按鈕傳遞搜尋條件篩選
    const handleSearchClick = () => {

        const filters = {
            location: selectedLOption.value,
            type: selectedTOption.value,
            date: searchDate,
            adults: adultCount,
            children: childCount,
        };

        handleSearch(filters);

    };






    return (
        <>

            <div className="searchSection">
                <figure><img src="./images/icons-search.svg" alt="搜尋" /></figure>
                <div className="search-select">

                    {/* 下拉選單顯示選擇區塊 */}
                    <div className={`select location ${locationIsOpen ? "open" : ""}`} >
                        <div className={`select-header ${selectedLOption.value !== null ? "active" : ""}`} onClick={() => toggleDropdown("location")}>
                            <div>{selectedLOption.label}</div>
                            <img className="arrowDown" src="./images/icons-arrowDownR.svg" alt="" />
                        </div>

                        {/* 選擇選項區塊 */}
                        {locationIsOpen && (
                            <div className='option-container'>
                                {locationOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        className={`select-option  ${selectedLOption.value === option.value ? "active" : ""}`}
                                        onClick={(e) => handleOptionClick(option.value, option.label, e, "location")}>
                                        <div>{option.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* 下拉選單顯示選擇區塊 */}

                    <div className={`select type ${typeIsOpen ? "open" : ""}`} >
                        <div className={`select-header ${selectedTOption.value !== null ? "active" : ""}`} onClick={() => toggleDropdown("type")}>
                            <div>{selectedTOption.label}</div>
                            <img className="arrowDown" src="./images/icons-arrowDownR.svg" alt="" />
                        </div>

                        {/* 選擇選項區塊 */}

                        {typeIsOpen && (
                            <div className='option-container'>

                                {typeOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        className={`select-option ${selectedTOption.value === option.value ? "active" : ""}`}
                                        onClick={(e) => handleOptionClick(option.value, option.label, e, "type")}>
                                        <div>{option.label}</div>
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                    <input

                        type={inputType}
                        value={searchDate}
                        placeholder="什麼時候去？"
                        onChange={(e) => setSearchDate(e.target.value)}
                        onFocus={() => setInputType("date")}
                        onBlur={() => setInputType("text")}
                        name="search-day" id="search-day" title="選擇日期" />



                    <div className={`select people  select-people ${peopleIsOpen ? "open" : ""}`} >
                        <div className={`select-header ${adultCount > 0 || childCount > 0 ? "active" : ""}`} onClick={() => toggleDropdown("people")}>

                            {
                                (adultCount > 0 || childCount > 0) ? (
                                    <div>{adultCount} 位成人 , {childCount} 位孩童</div>
                                ) : (
                                    <div>幾個人？</div>
                                )
                            }

                            <img className="arrowDown" src="./images/icons-arrowDownR.svg" alt="" />
                        </div>
                        <div className='option-container'>
                            <div className="number-option">
                                <div className="label">
                                    <p>成人</p>
                                    <small>18歲（含）或以上</small>
                                </div>
                                <div className="number-input">
                                    <button onClick={() => handleDecrease('adult')}>−</button>
                                    <input
                                        type="text"
                                        readOnly
                                        value={adultCount}
                                        name="adultNumber"
                                        id="adultNumber" />
                                    <button onClick={() => handleIncrease('adult')}>+</button>
                                </div>
                            </div>

                            <div className="number-option">
                                <div className="label">
                                    <p>孩童</p>
                                    <small>12歲至17歲</small>
                                </div>
                                <div className="number-input">
                                    <button onClick={() => handleDecrease('child')}>−</button>
                                    <input
                                        type="text"
                                        readOnly
                                        value={childCount}
                                        name="childNumber"
                                        id="childNumber" />
                                    <button onClick={() => handleIncrease('child')}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="searchBtn" onClick={() => { handleSearchClick(); handleSearchResult() }}>搜尋課程</button>
            </div>
        </>
    )
}

export default SearchSection