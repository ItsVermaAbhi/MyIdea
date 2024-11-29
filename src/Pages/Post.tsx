
import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState, ChangeEvent } from 'react';
import { AppBar } from '../Components/AppBar';
import axios from 'axios';
import { postURL } from "../config";
import { useBlogs } from '../hooks';
import { useNavigate } from 'react-router-dom';

export function Post(){
   
    const ref = useRef(null)
    const { blogs } = useBlogs();
    const [name, setName ] = useState( '')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [published, setPublished] = useState(false)
    const navigate = useNavigate()

    const debounced = (fn : (e: ChangeEvent<HTMLInputElement>)=> void)=> {
        let timer: ReturnType<typeof setTimeout>;
        return (e: ChangeEvent<HTMLInputElement>)=> {
            clearInterval(timer);
            timer = setTimeout(()=> {
                fn(e)
            },5000) 

        }
    }

   

 
    useEffect(()=>{
        
        if(blogs.length>0){
            setName(blogs[0].author.name);
            
        }

        // ABOVE CODE IS FOR GETTING THE NAME OF AUTHOR AND SET ITS AVATAR
        

        // ON CLICKING THE PUBLISHED BUTTON THE REQUESTIS SEND TO THE BACKEND
      {
        published ? 
        axios.post(`${postURL}/blog`, {
            title: title, 
            content: content
        }, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res=> {
            
            console.log(res)
            setTitle('')
            setContent('')
        }) : ""
      }
    }, [published])
    

    return (
        <div>
            <div className='relative'>
                <div>
                <AppBar name={name}/>
                </div>
                <div className='absolute right-[180px] flex gap-2 top-2.5'>
                    <button onClick={()=>setPublished(true)} className='border-none bg-green-700 text-white px-2 py-1 font-semibold rounded-lg'>Publish</button>
                    <button onClick={()=>navigate('/blog')} className='border-none bg-green-700 text-white px-2 py-1 font-semibold rounded-lg'>Dashboard</button>
                </div>
            </div>
            <div className='mx-[150px] mt-5 border-2 rounded-lg border-gray-400'>
        
            <input className='w-full rounded-lg py-4 px-4' placeholder='Enter the title' type="text" onChange={debounced(e=> setTitle(e.target.value))} name="" id="" />
            </div>
          
            <div className='px-[150px] relative py-9'>
                
             <div className=''>
                <JoditEditor
                    ref = {ref}
                    value={content}
                    onChange={c=> setContent(c)}
                    
                    />
             </div>
             <div className='absolute mt-7 bottom-[28px] w-[calc(100vw-300px)] h-7 bg-white'>
             </div>
            </div>

        </div>
    )
}