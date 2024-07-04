import { useEffect, useState } from "react";
import  PostCard  from "./PostCard.tsx";
import axios from "axios";
import { BACKEND_URL } from "../config";
import SkeletonPost from "../components/SkeletonPost";
import Appbar from "../components/Appbar.tsx";


const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [allposts, setAllposts] = useState([]);

  useEffect(() => {
    async function getData() {
        setLoading(true)
      const response = await axios.get(`${BACKEND_URL}/api/v1/post/bulk`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log("response", response.data);
      setAllposts(response.data);
      setLoading(false)
    }
    getData();
  }, []);

  if(loading){
    return <div className="flex  justify-center bg-signup bg-no-repeat min-h-screen bg-[20%]">
        <div className="w-fit">
            <SkeletonPost/>
            <SkeletonPost/>
            <SkeletonPost/>
            <SkeletonPost/>
            <SkeletonPost/>
        </div>
    </div>
  }
  return (
    <div>
        <Appbar/>
        <div className="flex  justify-center bg-signup bg-no-repeat min-h-screen bg-[20%]">
      <div className="w-fit">
        {allposts.map((post:{id:string,title:string,content:string,author:{name:string},}) => {
          return (
            <PostCard
              id={post.id}
              title={post.title}
              
              content={post.content}
              author={post.author.name || "Anonymous"}
              publishedDate="Dec 2, 2023"
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Posts;
