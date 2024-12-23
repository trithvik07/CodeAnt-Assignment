import refresh from "../../assets/refresh.png"
import plus from "../../assets/plus.png"
import search from "../../assets/search.png"
export default function Header() {
    return (
        <div className="gap-[20px] border-b-[1px] border-neutral-200 sm:px-6 sm:py-5 ">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-inter font-semibold">Repositories</p>
                    <span className="text-xs font-inter text-gray-700">33 total Repositories</span>
                </div>
                <div className="gap-3 flex flex-row">
                    <button className="flex flex-row items-center justify-center gap-1 px-[14px] py-[10px] border-[1px] text-gray-700 border-zinc-300 rounded-md font-normal">
                        <img src={refresh}/>
                        <p className="font-inter text-xs sm:text-sm">Refresh All</p>
                    </button>
                    <button className="flex flex-row items-center justify-center gap-1 px-[14px] py-[10px] border-2 border-white bg-blue-600 rounded-md font-normal">
                        <img src={plus}/>
                        <p className="font-inter text-xs sm:text-sm text-white">Add Repository</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-row items-center gap-1 mt-6">
                <img src={search} className="-mr-7 text-gray-700"/>
                <input type="text" placeholder="     Search Repositories" className="flex-1 outline-none bg-transparent px-[14px] py-[10px] border-[1px] rounded-md w-[366px] border-zinc-300 font-inter text-sm"/>
            </div>
        </div>
    )
}