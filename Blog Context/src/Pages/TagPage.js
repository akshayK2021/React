
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";


const TagPage=()=>{
    const navigation=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div>
                <button onclick={()=>navigation(-1)}>
                    back
                </button>
                <h2>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    );

}

export  default TagPage;