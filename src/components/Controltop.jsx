import { useState } from "react";
import { profileImg } from "../assets";

function Controltop(props) {
  const [navTap, setNavTap] = useState(props.left);

  const user = (
    <button className="px-5 py-1.5 bg-primary text-lg font-light rounded-lg border border-primary transition-colors sm:px-10 sm:py-2 md:px-20 hover:bg-transparent hover:text-primary">
      user
    </button>
  );

  const movies_about = (
    <div className="flex rounded-tl-xl rounded-br-xl border border-primary overflow-hidden ">
      <button
        className={`px-5 py-1.5 font-light hover:bg-primary hover:text-dark sm:px-10 sm:py-2 md:px-20 ${
          navTap === props.left ? "bg-primary text-dark" : "text-primary"
        }`}
        onClick={() => setNavTap(props.left)}
      >
        {props.left}
      </button>

      <button
        className={`px-5 py-1.5 font-light hover:bg-primary hover:text-dark sm:px-10 sm:py-2 md:px-20 ${
          navTap === props.right ? "bg-primary text-dark" : "text-primary"
        }`}
        onClick={() => setNavTap(props.right)}
      >
        {props.right}
      </button>
    </div>
  );

  return (
    <div className="flex items-center gap-5 justify-between flex-wrap rounded-xl p-2 bg-white shadow-md dark:shadow-darkShadow dark:bg-dark mb-5 sm:p-3">
      <div className="flex items-center gap-5">
        <img
          src={profileImg}
          alt=""
          className="w-12 h-12 rounded-full outline-2 outline-primary outline"
        />

        <div className="hidden text-dark dark:text-white sm:block">
          <h1 className="font-light">Galaxycinema</h1>
          <h2 className="font-light">Galaxycinema@gmail.com</h2>
        </div>
        </div>

      {props.entry === "movies_about" ? movies_about : user}
    </div>
  );
}

export default Controltop;
