const courseData = [
    { id: 1, courseName: "陶土與自然｜打造獨一無二屬於自己的手作花器", storeName: "靜陶森林", type: "陶藝", location: "中正區", level: "入門", duration: 3, price: 1800,   releaseDate: "2024-08-15",sales: 22, image: "course-pottery03.jpg" },
    { id: 2, courseName: "時光的溫度 專屬於你的紀念銀飾製作體驗", storeName: "PICK&COLLECT", type: "金工", location: "大安區", level: "入門", duration: 2, price: 2500,   releaseDate: "2024-08-10",sales: 37,image: "course-mentalwork07.jpg" },
    { id: 3, courseName: "一針一線的溫柔｜手縫皮革錢包創作課程", storeName: "徐氏父女 Hsu & Daughter ", type: "皮革", location: "信義區", level: "進階", duration: 4, price: 2500,   releaseDate: "2024-09-01" , sales: 28 ,image: "course-leather09.jpg"},
    { id: 4, courseName: "純粹日式風格陶器創作課程", storeName: "古靈手作坊", type: "陶藝", location: "士林區", level: "入門", duration: 3, price: 1800,   releaseDate: "2024-10-05" ,sales: 38, image: "course-pottery01.jpg"},
    { id: 5, courseName: "尋找生活的溫度｜打造屬於你的陶藝茶具", storeName: "拾塵陶舍", type: "陶藝", location: "文山區", level: "入門", duration: 2, price: 1200,   releaseDate: "2024-11-15" ,sales: 8 ,image: "course-pottery05.jpg"},
    { id: 6, courseName: "用雙手說故事！手縫皮革吊飾製作體驗", storeName: "COJO手作皮革工坊", type: "皮革", location: "內湖區", level: "進階", duration: 4, price: 3200,   releaseDate: "2024-12-20" ,sales: 2,image: "course-leather04.jpg"},
    { id: 7, courseName: "體驗手工之美！親手製作造型個性耳飾", storeName: "混合基因 MixGene Jewelry Studio", type: "金工", location: "松山區", level: "入門", duration: 1, price: 1400,   releaseDate: "2024-01-05",sales: 32 ,image: "course-mentalwork03.jpg"},
    { id: 8, courseName: "個性化皮件設計班", storeName: "BeTwo手工皮件", type: "皮革", location: "中山區", level: "進階", duration: 3, price: 2200,   releaseDate: "2024-02-10",sales: 17 ,image: "course-leather03.jpg"},
    { id: 9, courseName: "手作銀飾初體驗！ 從零開始打造專屬飾", storeName: "光染金藝", type: "金工", location: "大同區", level: "進階", duration: 4, price: 3000,   releaseDate: "2024-09-25",sales: 29 ,image: "course-mentalwork08.jpg"},
    { id: 10, courseName: "拾泥之趣｜獨一無二的多功能花器製作", storeName: "陶然時光", type: "陶藝", location: "大安區", level: "入門", duration: 2, price: 1600,   releaseDate: "2024-10-20" ,sales: 18,image: "course-pottery04.jpg"},
    { id: 11, courseName: "時光的印記 手縫皮夾創作課程", storeName: "慢步皮革坊", type: "皮革", location: "中正區", level: "進階", duration: 4, price: 3500,   releaseDate: "2024-03-01",sales: 12,image: "course-leather02.jpg" },
    { id: 12, courseName: "暖心咖啡杯拉胚體驗課｜這個冬天就用親手做的咖啡杯！", storeName: "陶然心語", type: "陶藝", location: "大安區", level: "入門", duration: 2, price: 1800,   releaseDate: "2024-02-25" ,sales: 12,image: "course-pottery07.jpg"},
    { id: 13, courseName: "靜中藏光｜打造你的個性化純銀飾品", storeName: "靜敲敲 Be quiet!", type: "金工", location: "中山區", level: "入門", duration: 3, price: 2000,   releaseDate: "2024-01-15",sales: 24 ,image: "course-mentalwork02.jpg"},
    { id: 14, courseName: "時光裡的溫度 手工皮革零錢包製作", storeName: "溫潤時光", type: "皮革", location: "信義區", level: "入門", duration: 2, price: 1300,   releaseDate: "2024-11-30" ,sales: 16,image: "course-leather01.jpg"},
    { id: 15, courseName: "專屬皮革卡夾設計", storeName: "皮藝學堂", type: "皮革", location: "內湖區", level: "進階", duration: 3, price: 2700,   releaseDate: "2024-03-10",sales: 10 ,image: "course-leather05.jpg"},
    { id: 16, courseName: "銀飾情侶對戒製作-親手雕刻屬於她的名字", storeName: "心銀 Mental", type: "金工", location: "士林區", level: "進階", duration: 4, price: 3200,   releaseDate: "2024-09-10" ,sales: 2,image: "course-mentalwork04.jpg"},
    { id: 17, courseName: "瓷與手的共鳴——捏塑專屬器具", storeName: "森瓷物語", type: "陶藝", location: "松山區", level: "入門", duration: 2, price: 1500,   releaseDate: "2024-12-01",sales: 4 ,image: "course-pottery06.jpg"},
    { id: 18, courseName: "手簡單的美｜打造獨一無二純銀飾品", storeName: "pick 皮克坊", type: "金工", location: "信義區", level: "進階", duration: 4, price: 3500,   releaseDate: "2024-02-05" ,sales: 24,image: "course-mentalwork10.jpg"},
    { id: 19, courseName: "初學者歡迎！手作清新陶器體驗課", storeName: "陶藝工坊", type: "陶藝", location: "大同區", level: "入門", duration: 3, price: 2000,   releaseDate: "2024-08-25",sales: 34,image: "course-pottery02.jpg"},
    { id: 20, courseName: "金屬之韻｜打造專屬定制戒指", storeName: "ART64 六四設計", type: "金工", location: "文山區", level: "入門", duration: 3, price: 2500,   releaseDate: "2024-07-30" ,sales: 18,image: "course-mentalwork01.jpg"}
];

export default courseData;