import Body from "./repositories/Body";
import Header from "./repositories/Header";

export default function MainPage() {
    return (
        <div className="sm:bg-zinc-50 p-6 flex w-screen ">
            <div className="bg-white rounded-xl sm:border-[1px] border-neutral-200 w-full">
                <Header />
                <Body />
            </div>
        </div>
    )
}