import database from "../assets/database.png"
export default function BodyItem({heading, language, size, updated, type}: {heading: string, language: string, size: string, updated: string, type: string}) {
    return (

        <div className="flex flex-col sm:px-6 py-6 font-inter gap-3 border-b-[1px] border-zinc-300 rounded-md">
            <div className="flex flex-row gap-3">
                <span>{heading}</span>
                <span className="flex items-center justify-center rounded-full bg-sky-50 border-[1px] border-blue-200 text-blue-600 text-xs px-5 sm:w-[59px] sm:h-6 w-[41px] h-5">{type}</span>
            </div>
            <div className="flex flex-row gap-4 sm:gap-10 items-center text-xs">
                <div className="flex flex-row items-center gap-2 ">
                    <span>{language}</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src={database}/>
                    <span>{size} KB</span>
                </div>
                <span className="text-xs">Upadated {updated} days ago</span>
            </div>
        </div>
    )
}