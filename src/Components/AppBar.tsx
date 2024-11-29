export function AppBar({name}: {name: string}){
    return (
        <div className="flex justify-between items-center p-5 text-xl shadow-sm bg-color h-[50px]">
            <div>
                MyIdea
            </div>
            <div className="flex gap-2 items-center justify-center">
                <div className="flex items-center justify-center bg-gray-400 rounded-full size-6 ">
                {name[0] || "A"}
                </div>
                <div>
                {name || "Anonymous"}
                </div>
            </div>
        </div>
    )
}