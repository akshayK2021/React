import React from 'react';
import {FcLike, FcLikePlaceholder } from "react-icons/fc";
import {toast } from "react-toastify";



function Cardpp({cours,likedcourses,setLikedcourses}){

   function clickHandler(){

  if(likedcourses.includes(cours.id)){
    setLikedcourses((prev)=> prev.filter((cid)=>( cid!== cours.id) ) );
    toast.warning("You removed like for "+cours.title);
  }
  else{
 if(likedcourses.length==0){
    setLikedcourses([cours.id]);
 }
 else{
    setLikedcourses((prev)=>[...prev,cours.id]);
 }
 toast.success("liked successfully for "+cours.title);
  }

   }

    
    return(
        <div className='w-[300px] bg-cyan-950 rounded-md overflow-hidden bg-opacity-75'>
            <div className='relative'>
<img src={cours.image.url}></img>
          
            <div className='w-[40px] h-[40px] bg-white absolute rounded-full right-2 bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                    {likedcourses.includes(cours.id) ? ( <FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontsize="1.75rem"/>)
                    } 
                </button>
            </div>
            </div>
           <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{cours.title}</p>
            <p className='mt-2 text-white'>{cours.description}</p>
           </div>
        </div>
    );
}

export default Cardpp;

 