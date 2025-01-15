import { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

function MapSelect({ handleSearch ,  searchTerm, setSearchTerm }) {


    const [locationIsOpen, setLocationIsOpen] = useState(false);
    const [typeIsOpen, setTypeIsOpen] = useState(false);

    const [selectedLOption, setSelectedLOption] = useState({ value: null, label: "地區" });
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


    const [selectedTOption, setSelectedTOption] = useState({ value: null, label: "類型" });
    const typeOptions = [
        { value: "金工", label: "金工" },
        { value: "陶藝", label: "陶藝" },
        { value: "皮革", label: "皮革" },
    ];


    // 點擊選單時顯示&隱藏
    const toggleDropdown = (dropdownType) => {
        if (dropdownType === "location") {
            setLocationIsOpen((prevent) => !prevent);
            setTypeIsOpen(false);
        } else if (dropdownType === "type") {
            setTypeIsOpen((prevent) => !prevent);
            setLocationIsOpen(false);
        }
    }


    // 點擊選項後顯示選中的值

    /* const handleOptionClick = (value, label, e, clickType) => {
        e.stopPropagation(); // 阻止事件冒泡


        if (clickType === "location") {

            if (selectedLOption.value === value) {

                setSelectedLOption({ value: null, label: "地區" });

            } else {

                setSelectedLOption({ value, label }); // 更新顯示的選中值
            }

            setLocationIsOpen(false);  // 收起選單

        } else if (clickType === "type") {

            if (selectedTOption.value === value) {

                setSelectedTOption({ value: null, label: "類型" });

            } else {

                setSelectedTOption({ value, label }); // 更新顯示的選中值
            }

            setTypeIsOpen(false);  // 收起選單
        }

        console.log(`選的值：${value}`);

        const filters = {
            location: selectedLOption.value,
            type: selectedTOption.value,
        };

        handleSearch(filters);
    }; */

    const handleOptionClick = (value, label, e, clickType) => {
        e.stopPropagation(); // 阻止事件冒泡

        let newSelectedLOption = { ...selectedLOption };
        let newSelectedTOption = { ...selectedTOption };

        if (clickType === "location") {

            if (newSelectedLOption.value === value) {

                newSelectedLOption = { value: null, label: "地區" };

            } else {

                newSelectedLOption= { value, label }; // 更新顯示的選中值
            }

            setSelectedLOption(newSelectedLOption);
            setLocationIsOpen(false);  // 收起選單

        } else if (clickType === "type") {

            if (newSelectedTOption.value === value) {

                newSelectedTOption = { value: null, label: "類型" };

            } else {

                newSelectedTOption= { value, label }; // 更新顯示的選中值
            }

            setSelectedTOption(newSelectedTOption);
            setTypeIsOpen(false);  // 收起選單
        }

        console.log(`選的值：${value}`);

    };


    useEffect(() => {
        const filters = {
            location: selectedLOption?.value || null,
            type: selectedTOption?.value || null,
            searchTerm: searchTerm, // 使用最新的 searchTerm
        };

        handleSearch(filters);
    }, [searchTerm, selectedLOption, selectedTOption]); // 監聽所有篩選條件的變化


    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };




    // 點擊外部時收起選單
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.map-select')) {
                setLocationIsOpen(false);
                setTypeIsOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };


    }, []);


    // AOS 套件初始化設定
    useEffect(() => {
    
        AOS.init(); // 初始化
    
    }, [])



    return (
        <>
            <div data-aos="fade-left" className="map-select">
                <input type="text" name="map-searchStore" id="map-searchStore" title="姓名" placeholder="輸入店名" value={searchTerm} // 綁定父層狀態
                    onChange={handleInputChange} />

                {/* 下拉選單顯示選擇區塊 */}
                <div id="storeSelect" className={`select ${locationIsOpen ? "open" : ""} ${selectedLOption.value !== null ? "active" : ""}`} onClick={() => { toggleDropdown("location") }}>
                    <div className="select-header">
                        <img src="./images/icons-mapLocation.svg" alt="" />
                        <div>{selectedLOption.label}</div>
                        <img className="arrowDown" src="./images/icons-arrowDownR.svg" alt="" />
                    </div>


                    {/* 選擇選項區塊 */}
                    {locationIsOpen && (
                        <div className='option-container'>
                            {locationOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`select-option ${selectedLOption.value === option.value ? "active" : ""}`}
                                    onClick={(e) => handleOptionClick(option.value, option.label, e, "location")}>
                                    <div>{option.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


                {/* 下拉選單顯示選擇區塊 */}
                <div id="typeSelect" className={`select ${typeIsOpen ? "open" : ""} ${selectedTOption.value !== null ? "active" : ""}`} onClick={() => toggleDropdown("type")}>
                    <div className={` select-header `}>
                        <img src="./images/icons-store.svg" alt="" />
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

            </div>
        </>
    )
}


export default MapSelect