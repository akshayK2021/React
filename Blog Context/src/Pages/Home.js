import Header from "../Components/Header";
import Pagination from "../Components/Pagination";

import Blogs from "../Components/Blogs";
const Home=()=>{
    return(
        <div>
            <Header/>
            <div>
                <Blogs/>
                <Pagination/>
            </div>
        </div>
    );
}
export default Home;