
import {useBlog} from '../hooks'
import { useParams } from "react-router-dom"
import { Date } from '../Components/Date'


export function Blog(){

    const {id} = useParams()

    // custom hook created to send the req
    const {blog, loading}= useBlog(id || "")

    if(loading){
        return <div>
            loading...
        </div>
    }

    const blogDate = blog.date;
   

    // IN LINE 31 DANGEROUSLYSET MEANS THE CONTENT CONTAINS TAG WHEN CONTENT IS DISPLAYED THE CONTENT WRAP IN   <bold> tag should appear bold
    
    return(
        <div className='flex gap-4 py-9 px-[150px] '>
            <div className="flex flex-col w-[80%] gap-2">
                <div className="text-5xl font-bold">{blog.title}</div>
                <div className="text-sm text-gray-600">  <Date date={blogDate }></Date></div>
                <div className="text-xl ">
                <div className="" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                </div>
            </div>
            <div>
                <div>Author</div>
                <div className='flex items-center justify-center gap-2'>
                   <div className='flex items-center justify-center bg-gray-400  size-9 rounded-full'>{blog.author.name[0]}</div>
                   <div className='flex flex-col gap-0'>
                        <div className='font-semibold text-xl'>{blog.author.name}</div>
                        <div className='text-xl'>A enthusiast Content Writer</div>
                   </div>
                </div>
            </div>
         </div>
    )
}

