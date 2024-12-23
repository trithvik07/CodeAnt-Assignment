import { useState } from 'react';
import loginImage from '../assets/login.png';
import logo from "../assets/logo.png";
import SaasProducts from '../Components/SaasProducts';
import SelfHosted from '../Components/SelfHosted';
export default function SignIn() {
    const [feild, setFeild] = useState("SAAS")
    return (
        <div>
            <div className='flex flex-row items-center justify-center'>
                <img src= {loginImage} className=' h-screen xl:w-[50%] hidden xl:flex'></img>
                <div className='h-full xl:w-[50%] flex flex-col items-center justify-center gap-8 bg-zinc-50'>
                    <div className=' bg-white border-[1px] rounded-xl flex flex-col items-center border-b-[1px] justify-center '>
                        <div className='flex flex-col items-center xl:py-9 xl:px-6 py-6 px-4 border-b-[1px] gap-5'>
                            <div className='flex flex-col items-center xl:gap-9 gap-6'>
                                <div className='flex flex-row items-center text-xl'>
                                    <img src= {logo} className=' h-auto' width={35.62} height={40}></img>
                                    <p className='font-satoshi text-[30px] font-normal leading-[33px] text-left text-2xl'>CodeAnt AI</p>
                                </div>
                                <p className='font-inter text-[32px] font-semibold leading-[48px] text-left'>Welcome to CodeAnt AI</p>
                            </div>
                            <div className='bg-zinc-50 top-16 w-[376px] xl:w-[624px]'>
                                <button onClick={() => setFeild("SAAS")} className={`font-inter font-semibold font-xs text-[20px] leading-[28px] w-[187px] h-[52px] xl:w-[311px] xl:h-[60px] p-4 lg:px-6 lg:py-4 gap-md rounded-lg ${feild === 'SAAS'?"bg-blue-600 text-white": "text-gray-700"} text-center`}>SAAS</button>
                                <button onClick={() => setFeild("hosted")} className={`font-inter font-semibold font-xs text-[20px] leading-[28px] w-[187px] h-[52px] xl:w-[311px] xl:h-[60px] p-4 px-[14px] gap-xs rounded-lg ${feild === 'SAAS'? "text-gray-700" :"bg-blue-600 text-white"} text-center`}>Self Hosted</button>
                            </div>
                        </div>
                        {feild === "SAAS" ? <SaasProducts/> : <SelfHosted/>}
                    </div>
                    <p className='font-inter font-normal text-[16px]'>By signing up you agree to the <span className='font-bold'>Privacy policy</span></p>
                </div>
            </div>
        </div>
    )
}