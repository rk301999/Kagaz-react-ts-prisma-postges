import { Link, } from "react-router-dom"
import parse from "html-react-parser"

function PostCard({id,title,content,author,publishedDate}:{id:string,title:string,content:string,author:string,publishedDate:string}){

    // const navigate = useNavigate();
    //@ts-ignore
    return <Link to={`/post/${id}`}>
    <div className='border-b py-8 px-2 max-w-[590px] cursor-pointer '  >
        <div className="top flex gap-2 items-center">
            <Avatar author={author}/>
            <p className='font-semibold '>{author} . </p>
            <p className='text-slate-500'>{publishedDate}</p>
        </div>
        <div className="bottom flex flex-col gap-2">
            <h1 className='text-4xl font-bold'>{title}</h1>
            <h1 className=''>{parse(content.slice(0,200)  + "...")}</h1>
        </div>
        <div className='text-slate-500'>
            {`5 min read` }
        </div>
    </div>
    </Link> 
}

 export function Avatar({author}:{author:string}){
    return <div className='h-7 w-7 bg-slate-600 text-white rounded-full flex justify-center items-center'>
        <h1>{author[0].toUpperCase() || author[0]}</h1>
    </div>
}

export default PostCard


