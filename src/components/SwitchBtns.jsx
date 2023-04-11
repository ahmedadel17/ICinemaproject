import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SwitchBtns = () => {
  const [switchBtn, setSwitchBtn] = useState(localStorage.getItem("switchBtn") || "signin" );

  useEffect(() => {
    localStorage.setItem("switchBtn", switchBtn);
  }, [switchBtn]);


  return (
    <div className="flex justify-center gap-1 mb-7 top-32 left-0 overflow-x-clip lg:mb-0 lg:flex-col lg:-translate-x-full lg:absolute">
      <Link
        to={"/"}
        className={`
          relative block w-32 py-2.5 font-light text-dark text-center rounded-lg
          lg:rounded-l-full lg:mb-5
          dark:text-white
          ${switchBtn === "signin" ? "lg:activeBtn bg-primary" : "hover:text-primary"}
        `}
        onClick={() => setSwitchBtn("signin")}
      >
        Sign in
      </Link>

      <Link
        to={"/signup"}
        className={`
          relative block w-32 py-2.5 font-light text-dark text-center rounded-lg
          lg:rounded-l-full lg:mb-5   
          dark:text-white       
          ${ switchBtn === "signup" ? "lg:activeBtn bg-primary" : "hover:text-primary"}
        `}
        onClick={() => setSwitchBtn("signup")}
      >
        Sign up
      </Link>
    </div>
  );
};

export default SwitchBtns;
