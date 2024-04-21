import { Appbar } from "./Appbar"

interface fullBlogType {
    title : string,
    content: string,
    name: string
}

export const FullBlog = ({title,content,name} : fullBlogType) => {
    return(
        <div>
        <Appbar />
        <div className="flex p-10">
            <div className="flex flex-col gap-5 w-5/6">
                <div className="text-3xl font-bold">{title}</div>
                <div className="text-sm font-light">Posted on April 21,2024</div>
                <div>
                    {content}
                </div>
            </div>
            <div className="flex py-10 flex-col gap-4">
                <div className="text-sm">Author</div>
                <div className="flex gap-2">
                    <div><img alt="profile" className="rounded-full h-6 w-6" src={`https://source.unsplash.com/random/?profile&${Math.floor(Math.random() * 100)}`} /></div>
                    <div className="font-semibold">{name}</div>
                </div>
            </div>
        </div>
        </div>
    )
}