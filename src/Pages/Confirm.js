import React from "react";
import { useNavigate } from "react-router-dom";
import "../App2.css"

const Confirm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-xl font-extrabold">Are You Ready?</p>
        <a
          onClick={handleClick}
          className="font-sans font-semibold bg-white hover:bg-black hover:text-white text-md text-black px-8 py-1 border-2 border-black rounded-[20px] cursor-pointer shadow shadow-3xl"
        >
          Yes
        </a>
      </div>
    </div>
  );
};

export default Confirm;
