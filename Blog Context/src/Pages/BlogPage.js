import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContextt } from "../Context/AppContextt";
import { baseUrl } from "../baseUrl";
import Header from "../Components/Header";
import Blogdetails from "../Components/Blogdetails";



const BlogPage=()=>{

    const[blog,setblog]=useState(null);
    const[relatedblogs,setrelatedblogs]=useState([]);
    const location=useLocation();
    const navigation=useNavigate();
    const {setloading,loading}=useContext(AppContextt);
    const blogId=location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    async function fetchRelatedBlogs(){
        setloading(true);
        let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data= await res.json();
            setblog(data.blog);
            setrelatedblogs(data.relatedblogs);
        }
        catch(error){
            setblog(null);
            setrelatedblogs([]);

        }
        setloading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }

    },[location.pathname])
    return(
        <div>
<Header/>
<div>
    <button onClick={()=>navigation(-1)}>
        Back
    </button>
</div>
{
    loading?( <p>Loading</p>):
    blog?(<div>
        <Blogdetails post={blog}/>
        <h2>
            Related Blogs</h2>
            {
                relatedblogs.map((post)=>{
                 return   <div key={post.id}>
                        <Blogdetails post={post}/>
                        </div>
                })


            }</div>):(<p>No blog found</p>)
}
        </div>
    );

}
export default BlogPage;