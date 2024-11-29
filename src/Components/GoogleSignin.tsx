
import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { jwtDecode, JwtPayload } from "jwt-decode";
import axios from 'axios';
import { postURL } from '../config';
import { useNavigate } from 'react-router-dom';

interface customJwtPayload extends JwtPayload {
  name: string,
  email: string
}

export default function GoogleSignin({type}: {type: string}){

  const navigate = useNavigate()

  return (
    <div >
            <GoogleLogin
             
             onSuccess={async (credentialResponse: GoogleCredentialResponse) => {
                if (credentialResponse.credential) {
                        const credentials = jwtDecode<customJwtPayload>(credentialResponse.credential);
                      
                      
                        console.log(credentials)
                        if (type === "signup" && credentials.name) {
                          

                            const response = await axios.post(`${postURL}/signup`,{
                              username: credentials.email,
                              password: "",
                              name: credentials.name 
                            })

                            const token = await response.data.token;

                            localStorage.setItem("token", `Bearer ${token}`);

                            // IF TOKEN IS ALREADY PRESENT THEN WE SEND HIM TO BLOG WHERE TOKEN IS VARIFIES FIRST
                  
                            {token.length>1 ? navigate('/blog'): ""}
                          
                          
                      }else if(type === "signin"){
                        const response = await axios.post(`${postURL}/signin`,{
                          username: credentials.email
                        })

                        const token = await response.data.token;
                        console.log(token)

                        localStorage.setItem("token", `Bearer ${token}`);

                        // IF TOKEN IS ALREADY PRESENT THEN WE SEND HIM TO BLOG WHERE TOKEN IS VARIFIES FIRST
              
                        {token.includes("undefined") ? "": navigate('/blog')}
                      }
                      
                      else {
                          console.error("Name property is missing in credentials:", credentials);
                      }
              } else {
                    console.error("Credential is undefined");
               }
             }}
             onError={() => {
                 console.log('Login Failed');
             }}
         />
            </div>
  )
}