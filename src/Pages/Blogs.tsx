import { AppBar } from "../Components/AppBar";
import { BlogCard } from "../Components/BlogCard";
import { useBlogs, useUserDetail } from "../hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function Blogs() {
    const { blogs, loading } = useBlogs();
    const {name} = useUserDetail()
    const [userName, setUserName] = useState("Anonymous")

  

    const navigate = useNavigate()
    useEffect(()=> {
        setUserName(name)
    },[name])

   

    if (loading) {
        return <div>Loading...</div>; 
    } 

    return (
        <>
        <div className="relative">
         <AppBar name={userName}/>
         <button onClick={()=> navigate('/post')} 
            className={`absolute  top-2 bg-green-800 rounded-md py-1 px-2 text-white`}
            style={{
                right: `calc(${userName.length} * 12px + 55px)`,
              }}
            >Post</button>
                
        </div>
        <div className="flex gap-5 flex-col items-center relative left-[27%] pt-3 justify-center  overflowY-hidden max-w-[50vw]  " >
            {blogs.map((blog) => (
                <div onClick={()=> {
                   
                    navigate(`/blog/${blog.id}`)
                }} className="w-full " key={blog.id} >
                
                    <BlogCard 
                        name={userName}
                        title={blog.title}
                        content={blog.content}
                        date={new Date(blog.date)} 
                    />
                </div>
            ))}
        </div>
        </>
    );
}
