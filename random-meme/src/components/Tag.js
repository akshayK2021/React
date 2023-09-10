import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Tag(){
    const [tag,settag]=useState('');
 const{gif,loading,fetchdata}=useGif("car");

   


   
    return(
        <div className="w-1/2  bg-blue-500 border rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-3xl underline uppercase">Random Gif {tag }</h1>
            {
                loading?<Spinner/>:    <img src={gif} width="450" />
            }
            <input type="text" value={tag} className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event)=>{
                settag(event.target.value)
            }}></input>
        
            <button onClick={()=>{
              fetchdata(tag);
            }} className="w-10/12 text-lg  bg-yellow-500 py-2  rounded-lg">Generate</button>
        </div>
    );
}

export default Tag;