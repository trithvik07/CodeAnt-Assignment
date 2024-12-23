export default function Button({logo, content, onClick}: {logo: string, content: string, onClick: () => void | Promise<void>}) {
    return(
        <button onClick={onClick} className='border-gray-300 w-[376px] xl:w-[446px] border-[1px] py-[16px] rounded-lg font-inter font-semibold text-[16px]'>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <img src= {logo} className=' h-auto' width={25} height={25.59}></img>
                    <p className='text-black'>{content}</p>
                </div>
        </button>
    )
}