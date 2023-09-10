import RANDOM from "./components/RANDOM";
import Tag from "./components/Tag";



export default function App() {
  return (
<div className="w-full h-screen flex flex-col background  overflow-x-hidden items-center" >
<h1 className="bg-white w-11/12 text-center  mt-[40px]  px-10 py-2 text-3xl rounded-lg">RANDOM GIFS</h1>
<div className="flex flex-col items-center w-full  gap-y-10  mt-[30px]" >

  <RANDOM/>
  <Tag/>
</div>
</div>
  );
}
 