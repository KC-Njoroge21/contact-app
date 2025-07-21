import React from "react";

const Favorite = (props) => {
  return (
    <>
      <button onClick={() => {props.toggle(props.id)}} className="w-12 cursor-pointer">
        <img
          src={
            props.isFavorite
              ? "/images/gold-star.png"
              : "/images/star.png"
          }
          alt=""
        />
      </button>
    </>
  );
};

export default Favorite;
