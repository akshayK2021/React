import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";


import Filter from "./components/Filter";
import Spinner from "./components/spinner";
import './App.css';
import  {toast} from "react-toastify";

import {filterdata,apiUrl} from "./data";
import { useState, useEffect } from "react";

function App() {

  const [courses, setcourses] = useState(null);
  const [loading,setloading]=useState(true);
  const [categeory,setCategeory]=useState("All");


  async function fetchdata(){
    try{
      let response=await fetch(apiUrl);
      let output= await response.json();

      setcourses(output.data);
       console.log(output.data);
   
    }
    catch(error){
      toast.error("Network me koi dikkat hai kya");

    }
    setloading(false);

  }

  useEffect(()=>{
    fetchdata();
    console.log("It is fetching");
  },[]);

  return (
    <div className='min-h-screen flex flex-col bg-cyan-800'>
      <div>
        <Navbar />
      </div>
      <div className=''>
      <div>
        <Filter filterdata={filterdata} categeory={categeory} setCategeory={setCategeory}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>{
   
        loading? (<Spinner/>):(<Cards courses={courses} categeory={categeory}/>)
      }
      </div>
      </div>
    </div>

  
  );
}

export default App;
