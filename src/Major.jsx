import React from "react";
import contact from "./contact";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import Favorite from "./Favorite";


const Major = () => {
  const [contactList, setContactList] = React.useState(contact);

  function toggleFavorite(id) {
    setContactList((prevState) => {
      return (
        prevState.map((item) => {
          return (
            item.id === id ? {...item, isFavorite: !item.isFavorite } : item
          )
            
          
        })
      )
    })
  }

  const contactElements = contactList.map((item) => {
    return (
      <div
        key={item.id}
        className=" p-4 rounded-lg shadow-lg flex flex-col gap-8 bg-white"
      >
        <div className="rounded-lg overflow-hidden p-4 bg-gray-200 shadow-lg ">
          <img src={item.img} alt="" />
        </div>

        <div>
          <h2 className="font-semibold text-[25px]">{item.name}</h2>
          <h2 className="font-semibold text-[17px] text-gray-600 flex items-center gap-2">
            <FaPhone />
            {item.phone}
          </h2>
          <h2 className="font-semibold text-[17px] text-gray-600 flex items-center gap-2">
            <MdOutlineMail />
            {item.email}
          </h2>
          <h2 className="font-semibold text-[17px] text-gray-600 flex items-center gap-2">
            {item.gender === "Female" ? <FaFemale /> : <FaMale />}
            {item.gender}
          </h2>
        </div>

        <Favorite key={item.id} isFavorite={item.isFavorite} id={item.id} toggle={toggleFavorite} />

        
      </div>
    );
  });

  return (
    <main className="grid md:grid-cols-3 gap-4 p-4">{contactElements}</main>
  );
};

export default Major;
