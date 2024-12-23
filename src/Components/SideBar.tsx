import SideBarItem from "./SideBarItem";
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import code from '../assets/code.png';
import security from '../assets/cloud.png';
import howTo from '../assets/book.png';
import settings from '../assets/gear.png';
import phone from '../assets/phone.png';
import signOut from '../assets/sign-out.png';
export default function SideBar() {
    return (
        <div className="z-10 w-[242px] border-r-[1px] border-neutral-200 flex flex-col justify-between h-screen">
            <div className="pt-6 gap-4">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-row items-center justify-center">
                        <img src= {logo} className=' h-auto' width={35.62} height={40}></img>
                        <p className='font-satoshi font-normal leading-[26px] text-2xl'>CodeAnt AI</p>
                    </div>
                    <div>
                        <select className="font-inter bg-white border-[1px] border-zinc-300 px-[18px] py-[6px] rounded-md flex items-center justify-center w-[202px] text-xs">
                            <option>UtkarshDhariyaPa..</option>
                        </select>
                    </div>
                </div>
                <div className="px-4 py-4 flex flex-col items-center justify-center">
                    <div className="text-sm bg-blue-600 text-white w-[210px] border-2 rounded-md flex flex-row items-center justify-left px-[14px] py-[10px] gap-2">
                        <img src={home} className=' h-auto' width={20.24} height={17.97}></img>
                        <p>Repositories</p>
                    </div>
                    <SideBarItem icon={code} text="Ai Code Review" />
                    <SideBarItem icon = {security} text="Cloud Security"/>
                    <SideBarItem icon = {howTo} text="How to use"/>
                    <SideBarItem icon = {settings} text="Settings"/>
                </div>
            </div>
            <div className="px-4 py-4 flex flex-col items-center justify-center">
                <SideBarItem icon={phone} text="Support"/>
                <SideBarItem icon= {signOut} text="Logout"/> 
            </div>
        </div>
    )
}