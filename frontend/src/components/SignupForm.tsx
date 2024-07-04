import  { useState } from 'react'
import TextField from './TextField'
import {Signupinput} from "@rk301999/medium-common"
import axios from 'axios'
import {BACKEND_URL} from "../config"
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<Signupinput>({
        email:"",
        password:"",
        name:"",
    })

    function updatePostInputValue(e:any){
        e.preventDefault();
        setPostInputs(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    async function postSignupData(){
       try {
        const response= await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs)
        const {token} = response.data;
        console.log(token);
        
        localStorage.setItem("token",token)
        navigate("/posts")
       } catch (error) {
        alert(error);
       }
    }

  return (
    <div className=' h-screen  flex  flex-col items-center justify-center relative bg-signup bg-no-repeat bg-[30%] ' >
        
     <div className='w-[90%] md:w-[60%] flex flex-col gap-2  items-center justify-center p-5' >
        <h1 className='text-4xl md:text-5xl font-bold text-center'>Create an account</h1>
        <h3 className='text-slate-500 font-xl'>Already have an account ? <span className='underline'>Login</span></h3>
        <TextField title='Email' placeholder='Enter your email' name='email' onchange={updatePostInputValue}/>
        <TextField title='Name' placeholder='Enter your name' name='name' onchange={updatePostInputValue}/>
        <TextField title='Password' placeholder='' name='password' onchange={updatePostInputValue}/>
        <button className='text-white w-full px-1 py-3 bg-black rounded-md text-md md:text-xl' onClick={postSignupData}>Signup</button>
    </div> 
    </div>
  )
}
export default SignupForm
