
import { Date } from "./Date"

type BlogCardProps = {
    name: string,
    title: string,
    content: string,
    date: Date
}

export function BlogCard({name, title, content, date}: BlogCardProps){


   

    return (
        <div className="flex flex-col shadow-md py-3 px-2">
            <div className="flex gap-2 justify-start items-center">
                <div className="rounded-full size-7 flex justify-center items-center bg-gray-400">
                    {name[0]}
                </div>
                <div className="text-base font-semibold">
                    {name}
                </div>
                <div>
                    <Date date={date}></Date>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="max-h-[15vh] overflow-hidden">
                <p className="text-base content text-gray-800">
                <div className="" dangerouslySetInnerHTML={{ __html: content }}></div>
                </p>
            </div>
        </div>
    )
}



