import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();

    return(
        <div>
            <Appbar />
            <div className="mx-auto my-10 w-1/2">
                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value)
                }} placeholder="Title" className="placeholder:text-4xl text-semibold text-4xl w-full p-5 border-b focus:outline-none" />
                
            <div className="w-full mb-4">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <textarea onChange={(e)=>{
                        setContent(e.target.value)
                    }} id="comment" rows="10" className="placeholder:text-xl text-xl focus:outline-none w-full px-0 text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Tell your story..." required ></textarea>
                </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button onClick={()=>{
                            axios.post(`${BACKEND_URL}/api/v1/blog`,{
                                title,
                                content
                            },{
                                headers:{
                                    Authorization : localStorage.getItem("token")
                                }
                            }).then(response =>{
                                if(response.status == 200){
                                    navigate(`/blog/${response.data.id}`)
                                }
                             }
                            )
                        }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}