export default function SideBarItem({text, icon}: {text: string, icon: string}) {
    return(
        <div className="w-[210px]">
            <div className={`flex flex-row items-center justify-left py-2 px-3 gap-3`}>
                <img src={icon} className=' h-auto' width={22.5} height={17.97}></img>
                <p className={`font-inter text-xs text-gray-700 font-semibold`}>{text}</p>
            </div>
        </div>
    )
}