import { Link, useNavigate } from "react-router-dom";
import {SignupInput} from '@abhishek227/medium-common/dist'
import { useState , ChangeEvent} from "react";
import axios from "axios";
import { postURL } from "../config";

export default function SignupComponent(){
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState<SignupInput>({
        username: "",
        password: "",
        name: ""
      });


      const debounced = (fn: (e: ChangeEvent<HTMLInputElement>) => void)=> {
        let interval: ReturnType<typeof setTimeout>;
        return (event: ChangeEvent<HTMLInputElement>)=>{
          clearInterval(interval);
         interval =  setTimeout(()=> {
            fn(event)
          }, 1000)
        }
      }

      async function submitHandler(){
     try{
      const response = await axios.post(`${postURL}/signup`, 
        userInput,
      );
      
      const token = await response.data.token;
    
      
      // console.log("success")
      localStorage.setItem("token", `Bearer ${token}`);
      {token.length>1 ? navigate('/blog'): ""}
     }catch(e){
      console.log(e)
      console.error("some error occured")
     }
      }
      
        return <div className="flex flex-col items-center justify-center h-screen">
         <div className="w-full max-w-md">
         <div className="flex flex-col items-start gap-2">
            <h1 className="text-4xl font-bold">Login to your account</h1>
            <h2 className="text-lg">Already have an account? | <Link className="underline opacity-80 text-base hover:text-blue-500" to="/signin">Sign in</Link></h2>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
          <form  className="flex flex-col justify-start items-start gap-2">
                <LabelInput label="Full Name" inputType="text" placeholder="Enter your full name" onChange={
                debounced(e => setUserInput(p=>({...p, name: e.target.value})))
                }/>
                <LabelInput label="Email" inputType="email" placeholder="Enter your email" onChange={
                debounced(e => setUserInput(p=>({...p, username: e.target.value})))
                }/>
                <LabelInput label="Password" inputType="password" placeholder="Enter your password" onChange={
               debounced( e => setUserInput(p=>({...p, password: e.target.value})))
                }/>
                <button onClick={submitHandler}  className="bg-black w-full text-white p-2 rounded-md" type="button">Sign Up</button>
           </form>
          </div>
         </div>
        </div>
}

function LabelInput({label,inputType, placeholder, onChange}:{label: string,inputType:string,placeholder:string, onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void}){
    return (
      <>
         <div>
          <h3 className="text-left py-2" >{label}</h3>
            <input 
            onChange={onChange}
            className={`w-full p-2 rounded-md border-2 border-gray-300 min-w-[400px] lg:min-w-[350px]`} type={inputType} placeholder={placeholder} />
         </div>
      </>
    )
  }