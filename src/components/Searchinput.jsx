import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import Edit from "./Edit";
import Plussign from "./Plussign";
function Searchinput() {
  return (
    <div>
      <form className="flex items-center justify-around  relative px-2 ">
        <input type="search" className="border w-[567px] h-[56px] rounded-xl  " placeholder="Search here" />
        <button type="submit" className=" absolute left-[520px]">
          <AiOutlineSearch size={'2rem'}/>
        </button>
        <Edit/>
        <Plussign/>
      </form>
    </div>
  );
}

export default Searchinput;
