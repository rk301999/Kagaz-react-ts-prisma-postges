import  { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { Avatar } from './PostCard'
import { SkeletonPostId } from '../components/SkeletonPost'
import parse from "html-react-parser"

export interface Post{
    "content": string;
    "title": string;
    // "id": string,
    "author": {
        "name": string
    }
}

const ShowPost = () => {
    const {id} = useParams()
    const [post,setPost] = useState<Post>({content:"",title:"",author:{name:""}});
    const [loading, setLoading] = useState(false);

    
    useEffect(()=>{
        async function getPost(){
            setLoading(true)
            const res = await axios.get(`${BACKEND_URL}/api/v1/post/${id}`,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  }
            })
            console.log(res.data);
            // const {title,content,author} = res.data;
             setPost(res.data);
             setLoading(false)
        }
        getPost();
    },[id])
  return (
    <div>
      <Appbar/>
      {loading ? <SkeletonPostId/>:<div className='w-screen h-screen flex items-center justify-center bg-signup '>
      <div className=' w-[90%]  h-screen py-16'>
        <div className='grid grid-rows-6 lg:grid-cols-6 gap-10'>
            <div className='row-span-4 lg:col-span-4  flex flex-col gap-6 '>
                
                <h1 className='text-5xl font-bold p-4'>{post.title}</h1>
                <div className='tracking-wide text-lg bg-white rounded-md p-4'>{parse(post.content)}</div>
            </div>
             <div className=' row-span-2 lg:col-span-2 flex flex-col gap-2  shadow-xl px-3 py-7 h-fit rounded-2xl'>
                <h1 className='font-semibold'>Author</h1>
                <div className='flex gap-4 items-center'>
                    <p>{(post.author.name)?<Avatar author={post.author.name}/>:null}</p>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-semibold'>{post.author.name} ✍🏼</h1>
                        <h1 className='tracking-wide'>Author's cool description to grab users attention</h1>
                    </div>
                </div>
             </div>
        </div>
      </div>
      </div>}
      
      
    </div>
  )
}

export default ShowPost
