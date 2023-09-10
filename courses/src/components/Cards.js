
import React from "react";
import Cardpp from "./Cardpp";
import { useState } from "react";

function Cards(props){

let courses=props.courses;
let categeory=props.categeory


const [likedcourses,setLikedcourses]=useState([]);

    function getcourses(){
        if(categeory=="All"){
        const allcourses=[];
        Object.values(courses).forEach((course)=>{
            course.forEach((c)=>{
                allcourses.push(c);
            })
        })
        console.log("categeory is"+categeory)
return allcourses;
    }
    else{
        return courses[categeory];
    }

    }

    
    return(
   
        <div className="flex flex-wrap justify-center gap-4 mb-4">{
            getcourses().map((course)=>{
             return   <Cardpp key={course.id} likedcourses={likedcourses}  setLikedcourses={setLikedcourses} cours={course}></Cardpp>
       
            })
        
           
        
            }


        </div>
    );
 }

 export default Cards;