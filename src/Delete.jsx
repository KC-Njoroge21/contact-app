import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Delete = (props) => {
  return (
    <>
      <button onClick={() => {propsdelete(props.id)}} className="text-red-600 -400 text-4xl shadow-lg rounded-full p-2 hover:bg-gray-200 cursor-pointer">
        <RiDeleteBin6Line />
      </button>
    </>
  );
};

export default Delete;
