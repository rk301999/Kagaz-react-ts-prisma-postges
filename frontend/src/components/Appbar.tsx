import { Link } from "react-router-dom"
import { Avatar } from "../pages/PostCard"

const Appbar = () => {
  return (
    <div className="flex justify-between h-16 items-center px-5 bg-slate-100 border-b  left-0 right-0">
        <Link to={"/posts"}>
        <div className="flex items-center">
        <h1 className="font-bold text-3xl italic underline">Kagaz </h1>
        <span className="text-4xl">📑</span>
        </div></Link>
        <Avatar author="Ritesh"/>
    </div>
  )
}

export default Appbar
