import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Edit from "./Edit";
import Plussign from "./Plussign";
import { editIcon } from "../assets";
import { Link } from "react-router-dom";
function Searchinput() {
  return (
    <div className="mb-5">
      <form className="">
        <div className="flex items-stretch justify-between gap-3">
          <div className="relative flex-1">
            <input
              type="search"
              className="w-full h-full py-2 pl-4 pr-12 border-none focus:ring-0 rounded-xl shadow-md text-light font-light dark:bg-dark dark:shadow-darkShadow"
              placeholder="Search here"
            />

            <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
              <img
                src={editIcon}
                alt="edit icon"
                className="w-5 h-5 object-contain sm:w-6 sm:h-6"
              />
            </a>
          </div>

          <Link to="add-movie"
            className="p-3 rounded-xl shadow-md dark:shadow-darkShadow"
          >
            <img
              src={editIcon}
              alt="edit icon"
              className="w-5 h-5 object-contain sm:w-6 sm:h-6"
            />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Searchinput;
