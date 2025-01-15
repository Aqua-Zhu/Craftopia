import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Qa from "./pages/Qa";
import Member from "./pages/Member";
import SearchLesson from "./pages/SearchLesson";
import ClassPage from "./pages/ClassPage";
import MapMain from "./pages/MapMain";
import Activity from "./pages/Activity";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/qa" element={<Qa/>} ></Route>
                <Route path="/member" element={<Member/>}  ></Route>
                <Route path="/search" element={<SearchLesson/>}></Route>
                <Route path="/classpage" element={<ClassPage/>}></Route>
                <Route path="/mapmain" element={<MapMain/>}></Route>
                <Route path="/act" element={<Activity/>}></Route>
            </Routes>
        </>
    )
}


