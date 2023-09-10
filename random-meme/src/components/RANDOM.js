import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function RANDOM(){

//     const[gif,setgif]=useState("");
//     const [loading,setloading]=useState(false);
   
 
//     async function fetchdata(){
//         setloading(true)
//         let url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const {data}=await axios.get(url);
// const imagesource=data.data.images.downsized_large.url;
// console.log(imagesource);
// setgif(imagesource);
// setloading(false);
//     }
//     useEffect(()=>{
//         fetchdata();
//     },[])
const{gif,loading,fetchdata}=useGif("")
   
    return(
        <div className="w-1/2  bg-green-500 border rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-3xl underline uppercase">Random Gif</h1>
            {
                loading?<Spinner/>:    <img src={gif} width="450" />
            }
        
            <button onClick={()=>{
                fetchdata();
            }} className="w-10/12 text-lg  bg-yellow-500 py-2  rounded-lg">Generate</button>
        </div>
    );
}

export default RANDOM