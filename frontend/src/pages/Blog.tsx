import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Loading } from "../components/Loading";

export const Blog = () => {
    const id = useParams()["id"];
    const { loading, blog } = useBlog({
        id : id || ""
    });

    if(loading){
        return(
            <Loading />
        )
    }

    return(
        <div>
            <FullBlog title={blog.title}  content={blog.content} name={blog.author.name}/>
        </div>
    )
}