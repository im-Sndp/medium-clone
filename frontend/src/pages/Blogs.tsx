import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { Loading } from "../components/Loading"


export const Blogs = () => {
    const {loading,blogs} = useBlogs();

    if(loading){
        return(
            <Loading />
        )
    }

    interface blogType {
        id: string,
        author: {
            name: string,
        },
        title: string,
        content: string,
    }

    return(
        <div>
            <Appbar />
            <div className="py-5 divide-y max-w-xl mx-auto">
                {blogs.map((blog : blogType )=>{
                    return(
                        <BlogCard 
                            key={blog.id}
                            id ={blog.id}
                            authorName={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"20 April 2024"}
                        />

                    )
                })}
            </div>
        </div>
    )
}