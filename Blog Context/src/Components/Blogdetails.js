
import { NavLink } from "react-router-dom"
function Blogdetails({post}){
    return(
        <div className="">
            <NavLink to={`/blog/${post.id}`} >
            <p className="font-bold text-lg">{post.title}</p>
           </NavLink> <p className="text-sm mt-[4px]">
                By <span className="italic">{post.author}</span> on {""}<NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><span className="underline font-bold">{post.category}</span>
            
            </NavLink></p>
            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
                {post.tags.map((tag,index)=>{
                  return  <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                      <span className="text-blue-700 underline font-bold text-xs mt-[5px]" key={index}>{`#${tag}`}</span>
                    </NavLink>
                   
                })}
            </div>
          

        </div>
    )
}

export default Blogdetails;