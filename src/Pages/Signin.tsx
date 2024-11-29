import SigninComponent from "../Components/SigninComponent";

import GoogleSignin from "../Components/GoogleSignin";




export default function Signin(){
    return (
        <div>
            <SigninComponent />
            <div className="z-30 absolute bottom-[15%] left-[40%]">
            <GoogleSignin type="signin"/>
            </div>
           
            
        </div>
    )
}


