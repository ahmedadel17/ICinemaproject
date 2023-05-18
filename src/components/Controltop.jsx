import { useState } from "react";
import { profileImg } from "../assets";

function Controltop(props) {
  const [navTap, setNavTap] = useState(props.left);

  const user = (
    <button className="ml-auto px-20 py-2 bg-primary text-lg font-light rounded-lg border border-primary transition-colors hover:bg-transparent hover:text-primary">
      user
    </button>
  );

  const movies_about = (
    <div className="flex rounded-tl-xl rounded-br-xl border border-primary overflow-hidden ml-auto">
      <button
        className={`px-20 py-2 font-light hover:bg-primary hover:text-dark ${navTap === props.left ? 'bg-primary text-dark' : 'text-primary'}`}
        onClick={() => setNavTap(props.left)}
      >
        {props.left}
      </button>

      <button
        className={`px-20 py-2 font-light hover:bg-primary hover:text-dark ${navTap === props.right ? 'bg-primary text-dark' : 'text-primary'}`}
        onClick={() => setNavTap(props.right)}
      >
        {props.right}
      </button>
    </div>
  );

  return (
    <div className="flex items-center gap-5 rounded-xl p-3 bg-white shadow-md dark:shadow-darkShadow  dark:bg-dark mb-5">
      <img
        src={profileImg}
        alt=""
        className="w-12 h-12 rounded-full outline-2 outline-primary outline"
      />

      <div className="text-dark dark:text-white">
        <h1 className="text-base font-light">Galaxycinema</h1>
        <h2 className="text-base font-light">Galaxycinema@gmail.com</h2>
      </div>

      {props.entry === "movies_about" ? movies_about : user}
    </div>
  );
}

export default Controltop;
