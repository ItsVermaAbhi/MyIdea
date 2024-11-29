
import { useEffect, useState } from "react";
import axios from "axios";
import { postURL } from "../config";
import { Post } from "../Pages/Post";

interface blog {
    id: string,
    title: string,
    content: string,
    date: Date
    author : {
        name: string
    }
}

type BlogCardProps = {
    id: string,
    title: string,
    content: string,
    published: boolean,
    date: Date,
    author: {
        name: string
    }
    // date: Date
}


export const useBlogs = () => {
    

    const [blogs, setBlogs ] = useState<blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get(`${postURL}/blog/bulk`,  {
            headers :{
                authorization: localStorage.getItem("token")
            }
        })
        .then(res => {
            setBlogs(res.data.post)
            setLoading(false)
        }).catch(function(e){
            console.error(e)
        })   
        }
    , [])

    return {
        blogs,
        loading
    }
}





export const useBlog = (id: string) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [blog, setBlog] = useState<BlogCardProps >({
        id: '',
        title: '',
        content: '',
        date: new Date(),
        published: false,
        author : {
            name: ''
        }


      })

      useEffect(() => {
        const fetchBlog = async () => {
          try {
            const res = await axios.get(`${postURL}/blog/get/${id}`, {
              headers: { Authorization: `${localStorage.getItem("token")}` },
            });
            const fetchedBlog = res.data.post;
      
            // Convert fetched date string to a Date object
            setBlog({
              ...fetchedBlog,
              date: new Date(fetchedBlog.date),
            });
            setLoading(false);
          } catch (e) {
            console.error("Can't fetch the blog", e);
          }
        };
      
        fetchBlog();
      }, [id]);

 
    return {
        blog,
        loading
    }
 
}


export const useUserDetail = ()=> {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("")

    
     useEffect(()=> {
        try{
            axios.get(`${postURL}/blog/name`,{
                headers : {
                    Authorization : `${localStorage.getItem("token")}`
                }
            })
              .then((res)=> {
                    setName(res.data.user.name)
                    setEmail(res.data.user.email)
                 })
        }catch(e){
           console.error("some error occured while fetching the user name")
         }
    
     },[])
    
    return {
        name,
        email
    }
}