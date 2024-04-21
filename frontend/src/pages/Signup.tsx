import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = ()=>{
    return(
        <div className="flex">
            <Auth type="signup" />
            <Quote />
        </div>
    )
}