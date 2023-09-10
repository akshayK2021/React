
import React,{ useContext}  from "react";
import{AppContextt} from "../Context/AppContextt"
import Spinner from "./Spinner";

import Blogdetails from "./Blogdetails";

function Blogs(){
    const {posts,loading}=useContext(AppContextt)

    console.log("Inside blogs")
    console.log(posts);
    return(
        <div className="w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center h-full">{
            loading?(<Spinner/>):(
                posts.length===0? 
                (<div>
                    <p> No Post Found</p>
                    </div>):(
                        posts.map((post)=>{
                            return (<Blogdetails post={post} key={post.id}/>)
                            
                        })
                  
                    
                    )
            )}

        </div>
    );
}

export default Blogs;