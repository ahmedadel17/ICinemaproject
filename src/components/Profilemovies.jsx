import React from 'react'
import Moviecard from "./Moviecard";
import Searchinput from "./Searchinput";

import Advertise from "./Advertise";
import Edit from "./Edit";
import Plussign from "./Plussign";

function Profilemovies() {
  return (
    <div className="flex mt-5">
        <div className="w-1/2  h-full  ">
         

          <div className="h-1/2">
            <h1 className="text-3xl ml-5 mb-5 mt-5 ">Showing now</h1>
            <Searchinput />
            <Moviecard />
          </div>

          <div className="h-1/2">
            <h1 className="text-3xl ml-5 mb-5 mt-5 ">Coming soon</h1>

            <Searchinput />

            <Moviecard />
          </div>
        </div>

        <div className="w-1/2  h-full  p-5 ">
          <h1 className="ml-5 my-5  text-3xl">Advertise</h1>
          {/* advertise bar */}
       <div className=" w-[720px] h-[60px] border-black flex justify-around">
       <div className=" w-[567px] h-[56px]   border rounded-xl">
          <button className="grow  rounded-xl active:bg-primary    w-1/3 h-full">Ad1</button>
          <button className="grow  rounded-xl active:bg-primary    w-1/3 h-full">Ad2</button>
          <button className="grow  rounded-xl active:bg-primary    w-1/3 h-full">Ad3</button>
        </div>
        <Edit/>
        <Plussign/>
       </div>
{/* -----------------Advertise component------- */}
<Advertise src={'https://m.media-amazon.com/images/M/MV5BMTU1ZjgzMTAtNGJhNC00NjE5LWI0Y2QtZmQxYmMxNzNiY2VhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg'}/>
        </div>
      </div>
  )
}

export default Profilemovies
