import React from "react";

function Button({ children, fild }) {
  return (
    <button
      className={`
        text-base font-light text-center capitalize w-40 py-2
        rounded-lg border border-dark transition duration-300
        lg:w-52 lg:py-2.5 lg:text-lg
        dark:border-white
       ${
         fild
           ? "text-white bg-dark hover:bg-transparent hover:text-dark dark:text-dark dark:bg-white dark:hover:bg-dark dark:hover:text-white"
           : "text-dark hover:bg-dark hover:text-white  dark:text-white dark:hover:bg-white dark:hover:text-dark"
       }`}
    >
      {children}
    </button>
  );
}

export default Button;
