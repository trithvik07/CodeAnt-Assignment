import MainPage from "../Components/MainPage";
import MobileHeader from "../Components/MobileHeader";
import SideBar from "../Components/SideBar";

export default function Home() {
    
    return (
        <div className={`flex flex-col sm:flex-row `}>
            <div className="hidden sm:flex sticky top-0 h-screen">
                <SideBar />
            </div>
            <div className="sm:hidden">
                <MobileHeader/>
            </div>
                <MainPage />
        </div>
    )
}