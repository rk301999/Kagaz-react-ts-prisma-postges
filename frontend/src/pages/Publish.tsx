import { useState, useRef } from 'react'
import JoditEditor from 'jodit-react';
import Appbar from "../components/Appbar"
import axios from "axios"
import {BACKEND_URL} from "../config"
import { useNavigate } from 'react-router-dom';

const Publish = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title,setTitle] = useState("")
    
    const publishPost=async()=>{
        const res = await axios.post(`${BACKEND_URL}/api/v1/post`,{title:title,content:content},{
            headers:{
                Authorization: "Bearer "+localStorage.getItem("token")
            }
        })
        console.log(res.data.id);
        navigate(`/post/${res.data.id}`)
    }

  return (
    <div>
      <Appbar/>
      <div className='w-screen h-screen flex items-center justify-center bg-signup'>
        <div className='w-[60%] flex flex-col gap-6 h-screen py-16 '>
        <input placeholder='Enter the Title' className='placeholder:text-xl border-2 py-4 px-2 w-full rounded-lg' onChange={e=>setTitle(e.target.value)}/>
        <JoditEditor
			ref={editor}
			value={content}
			
			
			onChange={e => setContent(e)}
            className='h-screen'
		/>
        
        <button type="button" className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-fit  " onClick={publishPost}>Publish</button>
        </div>
      </div>
    </div>
  )
}

export  default  Publish
