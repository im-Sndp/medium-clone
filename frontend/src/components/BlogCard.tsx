import { Link } from "react-router-dom"

interface BlogCardComponent{
    id: string,
    authorName : string,
    title : string,
    content : string,
    publishedDate: string
}


export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardComponent) => {
    return (
        <Link to={`/blog/${id}`}>
        <div className="py-5 cursor-pointer">
            <div className="flex gap-1 font-light text-sm items-center">
                <img alt="profile" className="rounded-full h-6 w-6" src={`https://source.unsplash.com/random/?profile&${Math.floor(Math.random() * 100)}`} />
                <div>{authorName}</div> · 
                <div>{publishedDate}</div>
            </div>
            <div className="text-xl font-bold pt-5">
                {title}
            </div>
            <div className="text-slate-500 font-medium">
                {content.slice(0,100) + "..."}
            </div>
            <div className="flex items-center pt-4 gap-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                    <span>{Math.ceil(Math.random()*100)}</span>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>

                    <span>{Math.ceil(Math.random()*10)}</span>
                </div>
            </div>
        </div>
        </Link>
    )
}