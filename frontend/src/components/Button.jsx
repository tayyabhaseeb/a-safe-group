import React from "react";

function Button({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-6 py-3 rounded transition-all hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
