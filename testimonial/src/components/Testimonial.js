import React from "react";
import Card from "./Card";
import { useState } from "react";
import {FiChevronLeft,FiChevronRight } from 'react-icons/fi'

function Testimonial({reviews}){
const[count,setcount]=useState(0);


function decrement(){
    if(count<=0){
        setcount(reviews.length-1);
    }
    else{
        setcount(count-1);
    }
}
function increment(){
    if(count+1>=reviews.length){
        setcount(0);
    }
    else{
        setcount(count+1);
    }
}
function randoms(){
    setcount(Math.floor(Math.random()*reviews.length))

}

    return(
        <div  className="bg-white flex flex-col justify-center text-sm items-center md:w-[700px]  w-[85vw] mt-10 p-5 transition-all duration-700">
    
           <Card reviews={reviews[count]} setcount={setcount}  />
           
           <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center">
           <button className="cursor-pointer hover:text-violet-500" onClick={decrement}><FiChevronLeft/></button>
           <button className="cursor-pointer hover:text-violet-500" onClick={increment} ><FiChevronRight/></button>
       </div>
       <div className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 font-bold text-white text-lg mt-3 mx-auto rounded-md ">
           <button onClick={randoms}>Surprise Me !</button>
       </div>
        
        
        
        </div>
    );

}

export default Testimonial;