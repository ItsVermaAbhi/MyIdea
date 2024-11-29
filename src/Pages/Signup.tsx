
import Quote from "../Components/Quote";
import GoogleSignin from "../Components/GoogleSignin";
import SignupComponent from "../Components/SignupComponent";
export default function Signin(){
    return <div className="flex items-center justify-center h-screen overflowy-hidden">
       <div className="w-full pl-[250px] lg:w-1/2 lg:pl-10 ">
       <SignupComponent/>
       <div className="z-30 absolute bottom-[15%] left-[15%]">
            <GoogleSignin type="signup"/>
            </div>
       </div>
       <div className="lg:visible invisible w-0  lg:w-1/2">
       <Quote></Quote>
       </div>
    </div>
}