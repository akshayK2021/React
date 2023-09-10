import axios from "axios";
import { createContext,  useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


export const AppContextt=createContext();

export default function AppContextProvider({children}){
    const navigate=useNavigate();

    const[loading,setloading]=useState(false);
    const[posts,setPost]=useState([]);
    const[page,setpage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

   const fetchBlogPosts=async(page=1,tag=null,category)=>{
    setloading(true);
    let url= `${baseUrl}?page=${page}`;
    
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`
        }
        try{
            const {data}= await axios.get(url);
          
                setPost(data.posts);

            setTotalPages(data.totalPages)
        }
        catch(error){
 console.log("Error in fetching data");
 setpage(1);
 setPost([]);
 setTotalPages(null);
        }
        setloading(false);

    }


    function handlePageChange(page){
    
      navigate({search:`?page=${page}`});
     
 
setpage(page);
      


    }

    const value={
        posts,setPost,loading,setloading,page,setpage,totalPages,setTotalPages,fetchBlogPosts,handlePageChange
    };
    return (<AppContextt.Provider value={value}>
        {children}
    </AppContextt.Provider>);
}