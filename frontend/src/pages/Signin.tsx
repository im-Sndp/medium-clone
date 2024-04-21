import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = ()=>{
    return(
        <div className="flex">
            <Auth type="signin" />
            <Quote />
        </div>
    )
}