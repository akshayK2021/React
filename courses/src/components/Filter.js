
function Filter({filterdata,setCategeory}){
    
    function set(value){
    
        setCategeory(value);

    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">{
            filterdata.map((obj)=>{
              return <button onClick={()=>set(obj.title)} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black 
              hover:bg-opacity-20 hover:text-white border-2`} key={obj.id}>{obj.title}</button>
            })
        }
        </div>
    );
}
export default Filter;