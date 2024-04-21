import { Avatar } from "./Avatar"
import { Link } from "react-router-dom";

export const Appbar = () => {
    return(
        <div className="flex border-b justify-between px-10 py-2">
            <div className="text-2xl font-bold">Medium</div>
            <div className="flex gap-5">
                <Link className="bg-green-700 flex text-white px-3  rounded-2xl" to={"/publish"}>
                    <button>New</button>
                </Link>
                <Avatar name={"Sandeep"} />
            </div>
        </div>
    )
}