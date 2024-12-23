import logo from '../assets/logo.png';
import bars from '../assets/bars.png';
import {  useState } from 'react';
import SideBarItem from './SideBarItem';
import home from '../assets/darkhome.png';
import code from '../assets/code.png';
import security from '../assets/cloud.png';
import howTo from '../assets/book.png';
import settings from '../assets/gear.png';
import phone from '../assets/phone.png';
import signOut from '../assets/sign-out.png';
import close from "../assets/close.png";
export default function MobileHeader() {
    const [showDropDown, setShowDropDown] = useState(false);
    const handleDropDown = () => {
        setShowDropDown(!showDropDown);
    }
    return (
        <>
            <div className="flex flex-row items-center p-4 justify-between gap-4 border-b-[1px] border-neutral-200">
                <div className="flex flex-row items-center ">
                    <img src={logo} width={28.5} height={32}/>
                    <span className='font-satoshi font-normal'>CodeAnt AI</span>
                </div>
                <div onClick={handleDropDown}>
                    {showDropDown ? <img src= {bars} width={24} height={24}/> : <img src= {close} width={15} height={15}/>}
                </div>
            </div>
            <div>
                {!showDropDown && <div className="w-screen absolute bg-white border-[1px] border-neutral-200 rounded-md p-4 flex flex-col">
                    <div className="z-10 relative top-1 flex flex-col">
                        <select className="font-inter bg-white border-[1px] border-zinc-300 px-3 py-2 rounded-md flex items-center justify-center text-xs">
                                <option>UtkarshDhariyaPanwar</option>
                        </select>
                        <SideBarItem icon={home} text="Repositories"/>
                        <SideBarItem icon={code} text="Ai Code Review" />
                        <SideBarItem icon = {security} text="Cloud Security"/>
                        <SideBarItem icon = {howTo} text="How to use"/>
                        <SideBarItem icon = {settings} text="Settings"/>
                        <SideBarItem icon={phone} text="Support"/>
                        <SideBarItem icon= {signOut} text="Logout"/> 
                    </div>
                </div>}
            </div>
        </>
    )
}